"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  threshold?: number;
}

const TRANSLATE: Record<Direction, string> = {
  up:    "translateY(32px)",
  left:  "translateX(32px)",
  right: "translateX(-32px)",
  none:  "none",
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.06,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = TRANSLATE[direction];
    el.style.transition = `opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1)`;
    el.style.transitionDelay = `${delay}ms`;
    el.style.willChange = "opacity, transform";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 0px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, direction, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
