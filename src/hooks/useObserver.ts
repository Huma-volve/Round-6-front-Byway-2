// // useObserver.ts
import { useEffect, useRef, useState, type RefObject } from "react";

type AnimationType = "fade-up" | "slide-left" | "slide-right";

export function useObserver(
  animation: AnimationType = "fade-up",
  options?: IntersectionObserverInit
) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options || { threshold: 0.2 });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return { ref: ref as RefObject<any>, isVisible, animation };
}
