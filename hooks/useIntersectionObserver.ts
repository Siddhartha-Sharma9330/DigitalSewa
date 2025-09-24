import { useEffect, useRef, useState, RefObject } from "react";

interface Options {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: Options = {}
): [RefObject<T | null>, boolean] {
  const {
    threshold = 0.15,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return;
    let observer: IntersectionObserver | null = null;
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && observer) observer.disconnect();
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer && observer.disconnect();
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, isIntersecting];
}
