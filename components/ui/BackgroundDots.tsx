"use client";

import { useEffect, useRef } from "react";

const DOTS = 220;
const PUSH_RADIUS = 160;     // px around cursor
const PUSH_FORCE = 2200;     // shove strength
const FRICTION = 0.88;       // 1 = no friction
const RETURN_FORCE = 0.03;   // pull-back to origin
const MAX_V = 2500;          // safety cap px/sec

type Dot = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  r: number;
  o: number;
};

export default function InteractiveDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // init dots
    const dots: Dot[] = Array.from({ length: DOTS }).map(() => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return {
        x,
        y,
        ox: x,
        oy: y,
        vx: 0,
        vy: 0,
        r: 1 + Math.random() * 2.5,
        o: 0.25 + Math.random() * 0.5,
      };
    });

    const mouse = { x: -9999, y: -9999 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    let last = performance.now();
    let raf: number;

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      ctx.clearRect(0, 0, w, h);

      dots.forEach((d) => {
        // push
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < PUSH_RADIUS) {
          const force = (1 - dist / PUSH_RADIUS) * PUSH_FORCE * 1.6; // extra boost
          const angle = Math.atan2(dy, dx);
          d.vx += Math.cos(angle) * force * dt;
          d.vy += Math.sin(angle) * force * dt;
        }

        // return
        d.vx += (d.ox - d.x) * RETURN_FORCE;
        d.vy += (d.oy - d.y) * RETURN_FORCE;

        // friction
        d.vx *= FRICTION;
        d.vy *= FRICTION;

        // cap
        d.vx = Math.max(Math.min(d.vx, MAX_V), -MAX_V);
        d.vy = Math.max(Math.min(d.vy, MAX_V), -MAX_V);

        // integrate
        d.x += d.vx * dt;
        d.y += d.vy * dt;

        // draw
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${d.o})`;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 mix-blend-screen"
    />
  );
}
