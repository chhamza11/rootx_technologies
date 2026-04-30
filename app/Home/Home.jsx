"use client";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AboutUs from "@/Components/AboutUs";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
import TechStack from "@/Components/TechStack";
import TeamMembers from "@/Components/TeamMembers";
import Testimonials from "@/Components/Testimonials";
import ContactUs from "@/Components/ContactUs";

const NAVY = "#00346C";

// ─── Vanta NET Background ─────────────────────────────────────────────────────
function VantaNet() {
  const containerRef = useRef(null);
  const effectRef    = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let destroyed = false;

    const load = async () => {
      // Import THREE as namespace object
      const THREE = await import("three");
      // Import Vanta NET
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
        // ── Visual tuning ──
        color:           0x1560bd,   // bright navy-blue lines & dots
        backgroundColor: 0xffffff,  // white bg
        points:          9.00,       // number of nodes
        maxDistance:     23.00,      // max line length
        spacing:         19.00,      // node spacing
        showDots:        true,
      });
    };

    load();

    return () => {
      destroyed = true;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

// ─── Falling Lines Background ─────────────────────────────────────────────────
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

    // Build lines — reduced count & opacity to blend with Vanta NET
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
        // Move down
        l.y += l.speed;
        if (l.y > canvas.height) {
          l.y = -l.h;
          l.x = Math.random() * canvas.width;
        }

        // Cursor proximity boost
        const dx   = l.x - mx;
        const dy   = (l.y + l.h / 2) - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < 140;
        const alpha = near
          ? Math.min(l.opacity + (1 - dist / 140) * 0.22, 0.40)
          : l.opacity;
        const width = near ? l.w * 1.8 : l.w;

        // Draw gradient line (bright top, fade bottom)
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

// ─── Typewriter ───────────────────────────────────────────────────────────────
const WORDS = ["Web Applications", "Mobile Apps", "AI Solutions", "Digital Products"];

function Typewriter() {
  const [index, setIndex]       = useState(0);
  const [text, setText]         = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[index];
    let t;
    if (!deleting && text.length < word.length)
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 72);
    else if (!deleting && text.length === word.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && text.length > 0)
      t = setTimeout(() => setText(word.slice(0, text.length - 1)), 38);
    else { setDeleting(false); setIndex((i) => (i + 1) % WORDS.length); }
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span style={{ color: NAVY }}>
      {text}
      <motion.span
        className="inline-block w-[4px] h-[0.85em] ml-1 align-middle rounded-sm"
        style={{ backgroundColor: NAVY }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}

// ─── Services Marquee Strip ───────────────────────────────────────────────────
const SERVICES = [
  "Web Development","Mobile App Development","UI / UX Design","AI Solutions",
  "Cloud & DevOps","E-Commerce Solutions","API Integration","React & Next.js",
  "Flutter & React Native","SEO Optimization","Custom Software","Database Architecture",
];

function MarqueeStrip() {
  const firstHalfRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    if (!firstHalfRef.current) return;
    setTotalWidth(firstHalfRef.current.scrollWidth);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none"
      style={{
        background:   "linear-gradient(135deg, #00346C 0%, #002a57 100%)",
        borderTop:    "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {totalWidth > 0 && (
        <style>{`
          @keyframes marqueeScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
          }
          .marquee-track {
            display: flex; align-items: center; width: max-content;
            will-change: transform;
            animation: marqueeScroll ${SERVICES.length * 2.5}s linear infinite;
          }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
      )}
      <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #00346C, transparent)" }} />
      <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #002a57, transparent)" }} />
      <div className="marquee-track">
        <span ref={firstHalfRef} className="inline-flex items-center">
          {SERVICES.map((s, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-body font-bold whitespace-nowrap"
                style={{ fontSize:"clamp(0.75rem,1.4vw,0.95rem)", color:"white", letterSpacing:"0.04em", padding:"0 24px" }}>
                {s}
              </span>
              <span className="font-bold flex-shrink-0" style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.6rem" }}>✦</span>
            </span>
          ))}
        </span>
        <span className="inline-flex items-center">
          {SERVICES.map((s, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-body font-bold whitespace-nowrap"
                style={{ fontSize:"clamp(0.75rem,1.4vw,0.95rem)", color:"white", letterSpacing:"0.04em", padding:"0 24px" }}>
                {s}
              </span>
              <span className="font-bold flex-shrink-0" style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.6rem" }}>✦</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const sectionRef = useRef(null);
  const mouseX     = useMotionValue(-9999);
  const mouseY     = useMotionValue(-9999);

  const onMouseMove = (e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  };
  const onMouseLeave = () => { mouseX.set(-9999); mouseY.set(-9999); };

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative min-h-screen overflow-hidden bg-white flex flex-col justify-center"
      >
        {/* ── Vanta NET 3D ── */}
        <VantaNet />

        {/* ── Falling Lines overlay ── */}
        <FallingLines />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-[1]"
          style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center justify-center min-h-screen py-32">

          <motion.h1
            className="font-bold font-body leading-[1.1] tracking-tight w-full mb-6"
            style={{ fontSize: "clamp(2rem, 6.5vw, 5.2rem)", color: "#0a0a0a" }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We Build Innovative
            <br />
            <Typewriter />
          </motion.h1>

          <motion.p
            className="font-body font-medium text-gray-600 leading-relaxed mb-10 max-w-2xl"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Professional software house specializing in custom web development
            and mobile app solutions. We transform your ideas into powerful digital
            products with cutting-edge technology and expert craftsmanship.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/Contact"
                className="inline-flex items-center font-semibold font-body rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base text-white transition-all duration-300"
                style={{ backgroundColor: NAVY, boxShadow: "0 1px 2px rgba(0,52,108,0.15)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,52,108,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,52,108,0.15)")}
              >
                Get Started
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center font-semibold font-body rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base border-2 transition-all duration-300"
                style={{ borderColor: "#111", color: "#111", backgroundColor: "transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = NAVY; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = NAVY; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#111"; }}
              >
                Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MarqueeStrip />
      <AboutUs />
      <Services />
      <Projects />
      <TechStack />
      <TeamMembers />
      <Testimonials />
      <ContactUs />
    </>
  );
}
