"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const smoothPos = useRef({ x: -100, y: -100 });
  const particles = useRef<
    {
      x: number;
      y: number;
      alpha: number;
      size: number;
      hue: number;
    }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    let animFrame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follow
      smoothPos.current.x += (mouse.current.x - smoothPos.current.x) * 0.15;
      smoothPos.current.y += (mouse.current.y - smoothPos.current.y) * 0.15;

      const dx = mouse.current.x - smoothPos.current.x;
      const dy = mouse.current.y - smoothPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Only spawn particles when actually moving
      if (speed > 0.5) {
        for (let i = 0; i < 2; i++) {
          particles.current.push({
            x: smoothPos.current.x + (Math.random() - 0.5) * 10,
            y: smoothPos.current.y + (Math.random() - 0.5) * 10,
            alpha: 0.5,
            size: Math.random() * 14 + 6,
            hue: 240 + Math.random() * 80,
          });
        }
      }

      if (particles.current.length > 80) {
        particles.current = particles.current.slice(-80);
      }

      // Draw aurora trail
      particles.current = particles.current.filter((p) => p.alpha > 0.01);
      particles.current.forEach((p) => {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grd.addColorStop(0, `hsla(${p.hue}, 85%, 70%, ${p.alpha})`);
        grd.addColorStop(1, `hsla(${p.hue}, 85%, 70%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        p.alpha *= 0.9;
        p.size *= 1.03;
      });

      // Draw actual cursor dot at real mouse position
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.fill();

      // Outer ring
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 14, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(167, 139, 250, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animFrame = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
}
