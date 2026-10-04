"use client";

import { useEffect } from "react";

export function RevealController() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          const delay = Number(el.dataset.revealDelay || "0");
          requestAnimationFrame(() => {
            el.style.opacity = "";
            el.style.transform = "";
          });
          window.setTimeout(() => {
            el.style.transition = el.dataset.origTransition || "";
          }, 1300 + delay);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const prep = (el: HTMLElement, delay: number) => {
      if (seen.has(el)) return;
      const hidden = el.getClientRects().length === 0;
      if (hidden) return;
      seen.add(el);
      el.dataset.revealDelay = String(delay);
      el.dataset.origTransition = el.style.transition;
      el.style.opacity = "0";
      el.style.transform = "translate3d(0,28px,0)";
      el.style.transition = `opacity 1s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1.1s cubic-bezier(.2,.7,.2,1) ${delay}ms`;
      io.observe(el);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        prep(el, parseInt(el.getAttribute("data-reveal-delay") || "0", 10));
      });
      document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((wrap) => {
        Array.from(wrap.children).forEach((child, index) => prep(child as HTMLElement, index * 80));
      });
    };

    scan();
    window.addEventListener("resize", scan);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", scan);
    };
  }, []);

  return null;
}
