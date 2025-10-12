import { useEffect, useRef, useState, type RefObject } from "react";
import { useCountUp } from "./useCountUp";

export function useCountUpOnView(end: number, duration?: number) {
  const [startCounting, setStartCounting] = useState(false);
  const count = useCountUp(startCounting ? end : 0, duration);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => element && observer.unobserve(element);
  }, []);

  return { ref: ref as RefObject<any>, count };
}
