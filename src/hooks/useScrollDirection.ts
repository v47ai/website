import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

/**
 * Tracks scroll direction via IntersectionObserver-free scroll listener,
 * throttled with requestAnimationFrame. Returns "up" near the top of the
 * page so the Nav stays visible before any scrolling occurs.
 */
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<ScrollDirection>("up");

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function updateDirection() {
      const currentY = window.scrollY;
      if (currentY <= threshold) {
        setDirection("up");
      } else if (Math.abs(currentY - lastY) > threshold) {
        setDirection(currentY > lastY ? "down" : "up");
      }
      lastY = currentY;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
