"use client";

import { useEffect, useState } from "react";
import { Logo3D } from "./logo-3d";

export function Loader() {
  const [mounted, setMounted] = useState(true);
  const [pct, setPct] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let loaded = document.readyState === "complete";
    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener("load", onLoad, { once: true });
    let value = 0;
    let frame = 0;
    let gone = false;

    const step = (time: number) => {
      if (gone) return;
      const elapsed = time - start;
      const cap = loaded && elapsed > 1200 ? 100 : Math.min(90, elapsed / 14);
      value += (cap - value) * (cap === 100 ? 0.12 : 0.06);
      if (cap === 100 && value > 99.5) value = 100;
      const next = Math.round(value);
      setPct((prev) => (prev === next ? prev : next));
      if (value < 100 && elapsed < 6000) {
        frame = requestAnimationFrame(step);
        return;
      }
      setPct(100);
      window.setTimeout(() => {
        setOut(true);
        document.documentElement.style.overflow = "";
        try {
          sessionStorage.setItem("es_loader_seen", "1");
        } catch {
          /* ignore */
        }
        window.setTimeout(() => setMounted(false), 1000);
      }, 250);
    };

    frame = requestAnimationFrame(step);
    return () => {
      gone = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("load", onLoad);
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
            <Logo3D depth={12} />
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
