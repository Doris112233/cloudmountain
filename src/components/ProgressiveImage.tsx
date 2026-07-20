import type { CSSProperties, ImgHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import "./ProgressiveMedia.less";

export type ProgressiveMediaState = "loading" | "loaded" | "error";

export interface ProgressiveImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "loading" | "decoding"
> {
  src: string;
  alt: string;
  aspectRatio?: CSSProperties["aspectRatio"];
  objectFit?: CSSProperties["objectFit"];
  priority?: boolean;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  errorFallback?: ReactNode;
  onStateChange?: (state: ProgressiveMediaState) => void;
}

const ProgressiveImage = ({
  src,
  alt,
  aspectRatio,
  objectFit,
  priority = false,
  wrapperClassName = "",
  wrapperStyle,
  errorFallback,
  onLoad,
  onError,
  onStateChange,
  className = "",
  style,
  ...imageProps
}: ProgressiveImageProps) => {
  const [state, setState] = useState<ProgressiveMediaState>("loading");
  const onStateChangeRef = useRef(onStateChange);
  onStateChangeRef.current = onStateChange;

  useEffect(() => {
    setState("loading");
    onStateChangeRef.current?.("loading");
  }, [src]);

  const markLoaded: ImgHTMLAttributes<HTMLImageElement>["onLoad"] = async (
    event,
  ) => {
    const image = event.currentTarget;

    try {
      await image.decode?.();
    } catch {
      // The load event already proves the image is usable. Some browsers reject
      // decode() for cached or SVG resources, so reveal it normally.
    }

    setState("loaded");
    onStateChangeRef.current?.("loaded");
    onLoad?.(event);
  };

  const markError: ImgHTMLAttributes<HTMLImageElement>["onError"] = (event) => {
    setState("error");
    onStateChangeRef.current?.("error");
    onError?.(event);
  };

  return (
    <span
      className={`progressive-media progressive-media--${state} ${wrapperClassName}`.trim()}
      style={{ aspectRatio, ...wrapperStyle }}
      aria-busy={state === "loading"}
    >
      <span className="progressive-media__placeholder" aria-hidden="true" />
      <img
        {...imageProps}
        className={`progressive-media__image ${className}`.trim()}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...({ fetchpriority: priority ? "high" : "auto" } as Record<
          string,
          string
        >)}
        style={{ objectFit, ...style }}
        onLoad={markLoaded}
        onError={markError}
      />
      {state === "error" && (
        <span className="progressive-media__error" role="img" aria-label={alt}>
          {errorFallback ?? <span aria-hidden="true">◇</span>}
        </span>
      )}
    </span>
  );
};

export default ProgressiveImage;
