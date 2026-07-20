import { useEffect } from "react";
import { observeReveal } from "./revealObserver";
import { useReducedMotion } from "./useReducedMotion";

interface MotionDocumentProps {
  routeKey: string;
}

const MotionDocument = ({ routeKey }: MotionDocumentProps) => {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = document.querySelector(".site-content");
    if (!root) return;
    const elements = Array.from(
      root.querySelectorAll<HTMLElement>(
        "h1, h2, .progressive-media, .overview-image-card, .archiveItem, .timeline-item",
      ),
    );
    const cleanups = elements.map((element, index) => {
      element.classList.add("motion-auto-reveal");
      element.style.setProperty(
        "--auto-delay",
        `${Math.min(index % 4, 3) * 70}ms`,
      );
      if (reducedMotion) {
        element.classList.add("is-visible");
        return () => undefined;
      }
      return observeReveal(element, () => element.classList.add("is-visible"));
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [reducedMotion, routeKey]);

  return null;
};

export default MotionDocument;
