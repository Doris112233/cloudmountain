import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";
import "./motion.less";

export interface ParallaxMediaProps {
  children: ReactNode;
  className?: string;
  amount?: number;
  axis?: "x" | "y";
  style?: CSSProperties;
}

const ParallaxMedia = ({
  children,
  className = "",
  amount = 22,
  axis = "y",
  style,
}: ParallaxMediaProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number>();
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "15% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const element = ref.current;
    if (!element || !visible || reducedMotion) return;
    const mobileFactor = window.matchMedia("(max-width: 767px)").matches
      ? 0.4
      : 1;
    const update = () => {
      frame.current = undefined;
      const rect = element.getBoundingClientRect();
      const progress =
        (rect.top + rect.height / 2 - window.innerHeight / 2) /
        window.innerHeight;
      const offset =
        Math.max(-1, Math.min(1, progress)) * amount * mobileFactor;
      element.style.setProperty(
        "--parallax-x",
        axis === "x" ? `${offset}px` : "0px",
      );
      element.style.setProperty(
        "--parallax-y",
        axis === "y" ? `${offset}px` : "0px",
      );
    };
    const requestUpdate = () => {
      if (frame.current === undefined)
        frame.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame.current !== undefined) cancelAnimationFrame(frame.current);
    };
  }, [amount, axis, reducedMotion, visible]);

  return (
    <div className={`parallax-media ${className}`} style={style}>
      <div
        ref={ref}
        className={`parallax-media__layer parallax-media__layer--${axis}`}
        style={
          {
            "--parallax-overscan": `${amount * 2 + 8}px`,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxMedia;
