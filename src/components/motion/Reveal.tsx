import type { CSSProperties, ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motionTokens } from "./motionTokens";
import { observeReveal } from "./revealObserver";
import { useReducedMotion } from "./useReducedMotion";
import "./motion.less";

export interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  distance?: number;
  duration?: number;
  threshold?: number;
  style?: CSSProperties;
}

const Reveal = ({
  children,
  as: Component = "div",
  className = "",
  direction = "up",
  delay = 0,
  distance = motionTokens.distance,
  duration = motionTokens.duration.narrative,
  threshold = 0.12,
  style,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const element = ref.current;
    if (!element) return;
    return observeReveal(element, () => setVisible(true), threshold);
  }, [reducedMotion, threshold]);

  return (
    <Component
      ref={ref}
      className={`motion-reveal motion-reveal--${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={{
        "--motion-delay": `${delay}ms`,
        "--motion-distance": `${distance}px`,
        "--motion-duration": `${duration}ms`,
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
