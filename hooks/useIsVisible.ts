import { useState, useEffect, Ref, RefObject } from "react"
export function useIsVisible(ref: RefObject<HTMLSpanElement> | null) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect((): () => void => {
    const observer: IntersectionObserver = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}