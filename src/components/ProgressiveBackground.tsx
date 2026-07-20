import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import type { ProgressiveMediaState } from "./ProgressiveImage";
import "./ProgressiveMedia.less";

export interface ProgressiveBackgroundProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  src: string;
  children?: ReactNode;
  backgroundPosition?: CSSProperties["backgroundPosition"];
  backgroundSize?: CSSProperties["backgroundSize"];
  onStateChange?: (state: ProgressiveMediaState) => void;
}

const ProgressiveBackground = ({
  src,
  children,
  backgroundPosition = "center",
  backgroundSize = "cover",
  onStateChange,
  className = "",
  style,
  ...props
}: ProgressiveBackgroundProps) => {
  const [state, setState] = useState<ProgressiveMediaState>("loading");
  const onStateChangeRef = useRef(onStateChange);
  onStateChangeRef.current = onStateChange;

  useEffect(() => {
    let active = true;
    const image = new Image();

    setState("loading");
    onStateChangeRef.current?.("loading");

    image.onload = async () => {
      try {
        await image.decode?.();
      } catch {
        // Loaded backgrounds remain safe to reveal if decode() is unsupported.
      }
      if (active) {
        setState("loaded");
        onStateChangeRef.current?.("loaded");
      }
    };
    image.onerror = () => {
      if (active) {
        setState("error");
        onStateChangeRef.current?.("error");
      }
    };
    image.src = src;

    return () => {
      active = false;
      image.onload = null;
      image.onerror = null;
    };
  }, [src]);

  return (
    <div
      {...props}
      className={`progressive-background progressive-background--${state} ${className}`.trim()}
      style={style}
      aria-busy={state === "loading"}
    >
      <span
        className="progressive-background__placeholder"
        aria-hidden="true"
      />
      <span
        className="progressive-background__image"
        style={{
          backgroundImage: `url("${src.replaceAll('"', '\\"')}")`,
          backgroundPosition,
          backgroundSize,
        }}
        aria-hidden="true"
      />
      <div className="progressive-background__content">{children}</div>
    </div>
  );
};

export default ProgressiveBackground;
