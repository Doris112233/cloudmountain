import type { MouseEvent } from "react";
import { useCallback } from "react";

export const useTilt = (maximum = 2.5) => {
  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
        return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      event.currentTarget.style.setProperty("--tilt-x", `${-y * maximum}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${x * maximum}deg`);
    },
    [maximum],
  );

  const onMouseLeave = useCallback((event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }, []);

  return { onMouseMove, onMouseLeave };
};
