import * as React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: "fade-in" | "slide-up" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 600,
  className,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold });
  const reducedMotion = useReducedMotion();

  const base = "opacity-0 translate-y-8 scale-95";
  const visible = "opacity-100 translate-y-0 scale-100";
  let animClass = "";
  switch (animation) {
    case "fade-in":
      animClass = "transition-all duration-700 ease-out";
      break;
    case "slide-up":
      animClass = "transition-all duration-700 ease-out transform";
      break;
    case "scale-in":
      animClass = "transition-transform duration-700 ease-out";
      break;
    case "slide-left":
      animClass = "transition-all duration-700 ease-out -translate-x-8";
      break;
    case "slide-right":
      animClass = "transition-all duration-700 ease-out translate-x-8";
      break;
    default:
      animClass = "transition-all duration-700 ease-out";
  }

  return (
    <section
      ref={ref}
      className={cn(
        "will-change-transform will-change-opacity",
        animClass,
        reducedMotion || isIntersecting ? visible : base,
        className
      )}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </section>
  );
}
