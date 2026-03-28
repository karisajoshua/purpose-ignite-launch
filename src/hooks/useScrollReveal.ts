import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hide initially
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/** Adds staggered reveal to children of a container */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  selector = ":scope > *",
  staggerMs = 120,
  threshold = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll<HTMLElement>(selector);
    children.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            child.style.transition = `opacity 0.6s cubic-bezier(.22,1,.36,1) ${i * staggerMs}ms, transform 0.6s cubic-bezier(.22,1,.36,1) ${i * staggerMs}ms`;
            child.style.opacity = "1";
            child.style.transform = "translateY(0)";
          });
          observer.unobserve(container);
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [selector, staggerMs, threshold]);

  return ref;
}
