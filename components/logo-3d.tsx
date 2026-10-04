"use client";

import { useEffect, useRef } from "react";
import shapes from "./logo-shapes.json";

type Point = number[];
type ShapeData = { outer: Point[]; holes: Point[][] };

const COLORS: Record<string, string> = {
  teal: "#16B1B1",
  cyan: "#5BEDEC",
};

const FORWARD: Record<string, number> = {
  teal: 0,
  cyan: 0.035,
};

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

type Logo3DProps = {
  depth?: number;
};

export function Logo3D({ depth = 0.22 }: Logo3DProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackPointer();
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.NeutralToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.setClearColor(0x000000, 0);
      const canvas = renderer.domElement;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.display = "block";
      host.appendChild(canvas);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envTexture;

      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
      camera.position.set(0, 0, 5.4);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x0b2b2d, 0.9));
      const key = new THREE.DirectionalLight(0xffffff, 1.8);
      key.position.set(-2.5, 3, 4);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0x9ff7f5, 1.2);
      rim.position.set(3, -1.5, -3);
      scene.add(rim);

      const group = new THREE.Group();
      scene.add(group);

      const geometries: InstanceType<typeof THREE.BufferGeometry>[] = [];
      const materials: InstanceType<typeof THREE.Material>[] = [];
      const bevel = depth * 0.28;

      for (const [name, list] of Object.entries(shapes as Record<string, ShapeData[]>)) {
        const material = new THREE.MeshPhysicalMaterial({
          color: COLORS[name] ?? "#16B1B1",
          roughness: 0.34,
          metalness: 0.02,
          clearcoat: 0.7,
          clearcoatRoughness: 0.22,
          envMapIntensity: 0.55,
        });
        materials.push(material);
        for (const data of list) {
          const shape = new THREE.Shape(data.outer.map(([x, y]) => new THREE.Vector2(x, y)));
          data.holes.forEach((hole) => shape.holes.push(new THREE.Path(hole.map(([x, y]) => new THREE.Vector2(x, y)))));
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth,
            bevelEnabled: true,
            bevelThickness: bevel,
            bevelSize: bevel * 0.55,
            bevelOffset: -bevel * 0.55,
            bevelSegments: 6,
            curveSegments: 12,
          });
          geometry.translate(0, 0, -depth / 2 + (FORWARD[name] ?? 0));
          geometry.computeVertexNormals();
          geometries.push(geometry);
          group.add(new THREE.Mesh(geometry, material));
        }
      }

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(host);

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const current = { x: 0, y: 0 };
      let frame = 0;
      const toRad = Math.PI / 180;

      const tick = (time: number) => {
        frame = requestAnimationFrame(tick);
        const rect = host.getBoundingClientRect();
        if (rect.bottom < -50 || rect.top > window.innerHeight + 50) return;
        const dx = Math.max(-1, Math.min(1, (mouse.x - (rect.left + rect.width / 2)) / (window.innerWidth / 2)));
        const dy = Math.max(-1, Math.min(1, (mouse.y - (rect.top + rect.height / 2)) / (window.innerHeight / 2)));
        const targetY = reduce ? -18 : Math.sin(time * 0.00045) * 32 + dx * 12;
        const targetX = reduce ? 6 : Math.cos(time * 0.00035) * 7 - dy * 8;
        current.x += (targetX - current.x) * 0.08;
        current.y += (targetY - current.y) * 0.08;
        group.rotation.set(current.x * toRad, current.y * toRad, 0);
        renderer.render(scene, camera);
      };
      frame = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        envTexture.dispose();
        pmrem.dispose();
        renderer.dispose();
        canvas.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [depth]);

  return <div ref={hostRef} style={{ position: "relative", width: "100%", height: "100%" }} />;
}
