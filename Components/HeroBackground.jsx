"use client";
import { useEffect, useRef } from "react";

// ─── Vanta NET ────────────────────────────────────────────────────────────────
function VantaNet() {
  const containerRef = useRef(null);
  const effectRef    = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let destroyed = false;

    const load = async () => {
      const THREE = await import("three");
      const { default: NET } = await import("vanta/dist/vanta.net.min");
      if (destroyed || !containerRef.current) return;
      effectRef.current = NET({
        el:              containerRef.current,
        THREE,
        mouseControls:   true,
        touchControls:   true,
        gyroControls:    false,
        minHeight:       200,
        minWidth:        200,
        scale:           1.00,
        scaleMobile:     1.00,
        color:           0x1560bd,
        backgroundColor: 0xffffff,
        points:          9.00,
        maxDistance:     23.00,
        spacing:         19.00,
        showDots:        true,
      });
    };

    load();
    return () => {
      destroyed = true;
      if (effectRef.current) { effectRef.current.destroy(); effectRef.current = null; }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}

// ─── Falling Lines ────────────────────────────────────────────────────────────
function FallingLines() {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    canvas.parentElement?.addEventListener("mousemove", onMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", onMouseLeave);

    const COUNT = window.innerWidth < 768 ? 14 : 28;
    const lines = Array.from({ length: COUNT }, () => {
      const h = 25 + Math.random() * 55;
      return {
        x:       Math.random() * (canvas.width || window.innerWidth),
        y:       -Math.random() * (canvas.height || window.innerHeight),
        h,
        w:       0.8 + Math.random() * 1.0,
        speed:   1.8 + Math.random() * 2.8,
        opacity: 0.04 + Math.random() * 0.09,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      lines.forEach((l) => {
        l.y += l.speed;
        if (l.y > canvas.height) { l.y = -l.h; l.x = Math.random() * canvas.width; }

        const dx   = l.x - mx;
        const dy   = (l.y + l.h / 2) - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < 140;
        const alpha = near ? Math.min(l.opacity + (1 - dist / 140) * 0.22, 0.40) : l.opacity;
        const width = near ? l.w * 1.8 : l.w;

        const grad = ctx.createLinearGradient(l.x, l.y, l.x, l.y + l.h);
        grad.addColorStop(0,   `rgba(0,52,108,0)`);
        grad.addColorStop(0.3, `rgba(0,52,108,${alpha})`);
        grad.addColorStop(0.7, `rgba(0,52,108,${alpha})`);
        grad.addColorStop(1,   `rgba(0,52,108,0)`);

        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x, l.y + l.h);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = width;
        ctx.lineCap     = "round";
        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", onMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ─── Combined Export ──────────────────────────────────────────────────────────
export default function HeroBackground() {
  return (
    <>
      <VantaNet />
      <FallingLines />
    </>
  );
}
