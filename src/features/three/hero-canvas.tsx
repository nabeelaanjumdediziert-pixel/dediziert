"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Corporate "financial growth" visualization: a grid of rising bars that
 * gently breathe, plus a subtle particle field. Vanilla Three.js so it stays
 * lean and predictable under React 19 + the React Compiler.
 *
 * Renders nothing for users who prefer reduced motion (a CSS gradient
 * fallback in the Hero covers that case) or when WebGL is unavailable.
 */
export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reducedMotion) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // No WebGL — gradient fallback remains visible.
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 6.5, 16);
    camera.lookAt(0, 1.5, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(6, 12, 8);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0x6b7da6, 0.8, 60);
    fillLight.position.set(-8, 6, 6);
    scene.add(fillLight);

    // --- Bars grid (the "growth" motif) ---
    const group = new THREE.Group();
    const COLS = 7;
    const ROWS = 5;
    const spacing = 1.5;
    const colorA = new THREE.Color("#4f628e");
    const colorB = new THREE.Color("#243b6b");
    const barGeometry = new THREE.BoxGeometry(0.78, 1, 0.78);

    interface Bar {
      mesh: THREE.Mesh;
      base: number;
      speed: number;
      phase: number;
    }
    const bars: Bar[] = [];

    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        const dist = Math.hypot(x - (COLS - 1) / 2, z - (ROWS - 1) / 2);
        const base = 1.4 + Math.max(0, 3.2 - dist * 0.7) + Math.random() * 0.6;

        const material = new THREE.MeshStandardMaterial({
          color: colorA.clone().lerp(colorB, dist / 4),
          metalness: 0.35,
          roughness: 0.45,
          transparent: true,
          opacity: 0.92,
        });

        const mesh = new THREE.Mesh(barGeometry, material);
        mesh.position.set(
          (x - (COLS - 1) / 2) * spacing,
          base / 2,
          (z - (ROWS - 1) / 2) * spacing,
        );
        mesh.scale.y = base;
        group.add(mesh);
        bars.push({
          mesh,
          base,
          speed: 0.6 + Math.random() * 0.8,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    group.rotation.y = -0.35;
    scene.add(group);

    // --- Particle field ---
    const particleCount = 320;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 34;
      positions[i * 3 + 1] = Math.random() * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9fb0d0,
      size: 0.08,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- Resize handling ---
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Pause when off-screen ---
    let visible = true;
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    // --- Animation loop ---
    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!visible) return;

      const t = clock.getElapsedTime();
      for (const bar of bars) {
        const scaleY = bar.base + Math.sin(t * bar.speed + bar.phase) * 0.45;
        bar.mesh.scale.y = scaleY;
        bar.mesh.position.y = scaleY / 2;
      }
      group.rotation.y = -0.35 + Math.sin(t * 0.12) * 0.12;
      particles.rotation.y = t * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      barGeometry.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      bars.forEach((bar) => (bar.mesh.material as THREE.Material).dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
