import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 16; // حوالى 60 FPS (سلس وسريع)
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps; // ✅ يجعل كل الأرقام تنتهي بنفس التوقيت

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}
