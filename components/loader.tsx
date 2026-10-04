"use client";

import { useEffect, useState } from "react";
import { Logo3D } from "./logo-3d";

function withTimeout(work: Promise<void>, ms: number) {
  return new Promise<void>((resolve) => {
    const timer = window.setTimeout(resolve, ms);
    work.then(() => {
      window.clearTimeout(timer);
      resolve();
    });
  });
}

function waitImage(img: HTMLImageElement) {
  if (img.complete && img.naturalWidth > 0) return Promise.resolve();
  return new Promise<void>((resolve) => {
    const done = () => resolve();
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
}

function waitFrame(frame: HTMLIFrameElement) {
  const src = frame.dataset.src;
  if (!src) return Promise.resolve();
  if (frame.dataset.loaded === "1") return Promise.resolve();
  return new Promise<void>((resolve) => {
    const done = () => {
      frame.dataset.loaded = "1";
      resolve();
    };
    frame.addEventListener("load", done, { once: true });
    frame.addEventListener("error", done, { once: true });
    if (frame.dataset.armed === "1") return;
    frame.dataset.armed = "1";
    frame.loading = "eager";
    frame.src = src;
  });
}

function preloadUrl(url: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

function backgroundUrls() {
  const found = new Set<string>();
  document.querySelectorAll<HTMLElement>("[style]").forEach((el) => {
    const value = el.style.backgroundImage;
    if (!value || value === "none") return;
    for (const match of value.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      if (match[1]) found.add(match[1]);
    }
  });
  return [...found];
}

export function Loader() {
  const [mounted, setMounted] = useState(true);
  const [pct, setPct] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    let gone = false;
    let frame = 0;
    let value = 0;
    let target = 8;
    let ready = false;
    const timeouts: number[] = [];

    const finish = () => {
      if (gone || ready) return;
      ready = true;
      target = 100;
    };

    const tasks: Promise<void>[] = [];
    document.querySelectorAll("img").forEach((img) => {
      tasks.push(withTimeout(waitImage(img), 12000));
    });
    document.querySelectorAll<HTMLIFrameElement>("iframe[data-src]").forEach((iframe) => {
      tasks.push(withTimeout(waitFrame(iframe), 18000));
    });
    backgroundUrls().forEach((url) => {
      tasks.push(withTimeout(preloadUrl(url), 12000));
    });
    if (document.fonts) tasks.push(withTimeout(document.fonts.ready.then(() => undefined), 8000));

    const total = Math.max(tasks.length, 1);
    let done = 0;
    tasks.forEach((task) => {
      task.then(() => {
        if (gone) return;
        done += 1;
        target = Math.max(target, Math.round((done / total) * 100));
        if (done >= total) finish();
      });
    });
    timeouts.push(window.setTimeout(finish, 20000));

    const step = () => {
      if (gone) return;
      value += (target - value) * (target === 100 ? 0.18 : 0.12);
      if (target === 100 && value > 99.4) value = 100;
      const next = Math.round(value);
      setPct((prev) => (prev === next ? prev : next));
      if (value >= 100) {
        window.setTimeout(() => {
          if (gone) return;
          setOut(true);
          document.documentElement.style.overflow = "";
          window.setTimeout(() => {
            if (!gone) setMounted(false);
          }, 1000);
        }, 180);
        return;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => {
      gone = true;
      cancelAnimationFrame(frame);
      timeouts.forEach((id) => window.clearTimeout(id));
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div role="status" aria-label="טוען" style={{ position: "fixed", inset: 0, zIndex: 100, pointerEvents: out ? "none" : "auto" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0 0 50% 0", background: "#0B2B2D", transform: out ? "translateY(-100%)" : "translateY(0)", transition: "transform .9s cubic-bezier(.76,0,.24,1)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: "50% 0 0 0", background: "#0B2B2D", transform: out ? "translateY(100%)" : "translateY(0)", transition: "transform .9s cubic-bezier(.76,0,.24,1)" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 34,
          color: "#FFFFFF",
          opacity: out ? 0 : 1,
          transform: out ? "scale(0.92)" : "scale(1)",
          transition: "opacity .45s ease, transform .6s cubic-bezier(.76,0,.24,1)",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", width: "min(70vw,520px)", aspectRatio: "1/1", borderRadius: "50%", background: "radial-gradient(circle, rgba(23,177,177,0.28) 0%, rgba(23,177,177,0) 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", width: 132, height: 132, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span aria-hidden="true" style={{ position: "absolute", inset: -14, borderRadius: "50%", border: "1px solid rgba(94,238,238,0.5)", animation: "loaderRing 2s ease-out infinite" }} />
          <span aria-hidden="true" style={{ position: "absolute", inset: -14, borderRadius: "50%", border: "1px solid rgba(94,238,238,0.5)", animation: "loaderRing 2s ease-out 1s infinite" }} />
          <div aria-hidden="true" style={{ width: "100%", height: "100%", perspective: 800 }}>
            <Logo3D />
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em" }}>פרופ&apos; אייל שיינר</span>
          <span style={{ fontSize: 13, color: "#A9D6D3", letterSpacing: "0.08em" }}>מיילדות · גינקולוגיה · פיריון</span>
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "min(260px,64vw)" }}>
          <div style={{ width: "100%", height: 2, borderRadius: 999, background: "rgba(255,255,255,0.12)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, borderRadius: 999, background: "linear-gradient(90deg,#17B1B1,#5EEEEE)", boxShadow: "0 0 12px rgba(94,238,238,0.8)" }} />
          </div>
          <span dir="ltr" style={{ fontSize: 13, fontWeight: 500, color: "#5EEEEE", fontVariantNumeric: "tabular-nums", letterSpacing: "0.1em" }}>
            {pct}%
          </span>
        </div>
      </div>
    </div>
  );
}
