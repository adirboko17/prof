"use client";

import { useEffect, useRef, useState } from "react";

const mouse = { x: 0, y: 0 };
let listening = false;

function trackPointer() {
  if (listening || typeof window === "undefined") return;
  listening = true;
  mouse.x = window.innerWidth / 2;
  mouse.y = window.innerHeight / 2;
  window.addEventListener(
    "pointermove",
    (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    },
    { passive: true },
  );
}

type Sprites = { face: string; side: string };

function buildSprites(image: HTMLImageElement): Sprites {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return { face: image.src, side: image.src };
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.clearRect(0, 0, size, size);
  ctx.drawImage(image, 0, 0, size, size);
  const face = canvas.toDataURL("image/png");

  const pixels = ctx.getImageData(0, 0, size, size);
  const data = pixels.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 8) continue;
    data[i] = 12;
    data[i + 1] = 92;
    data[i + 2] = 96;
  }
  ctx.putImageData(pixels, 0, 0);
  return { face, side: canvas.toDataURL("image/png") };
}

type Logo3DProps = {
  depth?: number;
};

export function Logo3D({ depth = 11 }: Logo3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [sprites, setSprites] = useState<Sprites | null>(null);
  const count = Math.min(72, Math.max(48, Math.round((depth * 2) / 0.42)));
  const layers = Array.from({ length: count }, (_, index) => -depth + (index * (depth * 2)) / (count - 1));

  useEffect(() => {
    const image = new Image();
    image.src = "/assets/logo-mark.png";
    image.onload = () => setSprites(buildSprites(image));
  }, []);

  useEffect(() => {
    trackPointer();
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const current = { x: 0, y: 0 };
    let frame = 0;

    const tick = (time: number) => {
      const rect = el.getBoundingClientRect();
      const visible = rect.bottom >= -50 && rect.top <= window.innerHeight + 50;
      if (visible) {
        const dx = Math.max(-1, Math.min(1, (mouse.x - (rect.left + rect.width / 2)) / (window.innerWidth / 2)));
        const dy = Math.max(-1, Math.min(1, (mouse.y - (rect.top + rect.height / 2)) / (window.innerHeight / 2)));
        const targetY = reduce ? -18 : Math.sin(time * 0.00045) * 32 + dx * 12;
        const targetX = reduce ? 6 : Math.cos(time * 0.00035) * 7 - dy * 8;
        current.x += (targetX - current.x) * 0.08;
        current.y += (targetY - current.y) * 0.08;
        el.style.transform = `rotateX(${current.x.toFixed(2)}deg) rotateY(${current.y.toFixed(2)}deg)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", willChange: "transform" }}>
      {sprites
        ? layers.map((z, index) => {
            const front = index === layers.length - 1;
            return (
              <img
                key={index}
                src={front ? sprites.face : sprites.side}
                alt=""
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transform: front ? `translateZ(${z.toFixed(2)}px)` : `translateZ(${z.toFixed(2)}px) scale(1.012)`,
                  backfaceVisibility: "hidden",
                  pointerEvents: "none",
                }}
              />
            );
          })
        : null}
    </div>
  );
}
