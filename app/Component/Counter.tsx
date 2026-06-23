"use client";

import { useEffect, useRef, useState } from "react";

function parse(val: string): { num: number; prefix: string; suffix: string } {
  const m = val.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!m) return { num: 0, prefix: "", suffix: val };
  return { num: parseInt(m[2], 10), prefix: m[1], suffix: m[3] };
}

export default function Counter({ value, duration = 1800 }: { value: string; duration?: number }) {
  const { num, prefix, suffix } = parse(value);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    const frame = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * num));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [started, num, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
