"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const NAVY = "#00346C";

// ── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ target, suffix }) {
  const [val, setVal]   = useState(0);
  const ref             = useRef(null);
  const done            = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let n = 0;
        const step = Math.ceil(target / 60);
        const id = setInterval(() => {
          n = Math.min(n + step, target);
          setVal(n);
          if (n >= target) clearInterval(id);
        }, 25);
      }
    }, { threshold: 0.6 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Hover Image that follows cursor vertically ────────────────────────────────
function FloatingImage({ src, alt, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute right-16 pointer-events-none z-20 rounded-2xl overflow-hidden shadow-2xl"
          style={{ width: 280, height: 200 }}
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain bg-gray-50 p-2"
            sizes="280px"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Single Row ────────────────────────────────────────────────────────────────
function ProjectRow({ project, index, isLast }) {
  const [hovered, setHovered] = useState(false);
  const rowRef = useRef(null);

  // Track cursor Y inside row for image vertical position
  const mouseY = useMotionValue(0);
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const onMouseMove = (e) => {
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseY.set(e.clientY - rect.top - 100); // center image on cursor
  };

  return (
    <motion.div
      ref={rowRef}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Hover background highlight */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ background: "rgba(0,52,108,0.04)" }}
      />

      {/* Row content */}
      <div className="relative flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 py-5 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 cursor-pointer overflow-visible">

        {/* ── Number ── */}
        <span
          className="font-body font-bold flex-shrink-0 select-none hidden xs:inline sm:inline"
          style={{
            fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)",
            color:hovered ? NAVY : "#0a0a0a",
            transition: "color 0.25s",
            minWidth: "1.5rem",
          }}
        >
          {project.number}
        </span>

        {/* ── Project Name + Description grouped ── */}
        <div className="flex flex-col flex-1 min-w-0 gap-1">
          <motion.h3
            className="font-semibold font-body"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 2.2rem)",
              color: hovered ? NAVY : "#0a0a0a",
              fontWeight: 500,
              transition: "color 0.25s",
            }}
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* ── Description ── */}
          <p
            className="font-body text-xs sm:text-sm md:text-base leading-relaxed"
            style={{
              color: hovered ? NAVY : "#0a0a0a",
              transition: "color 0.3s",
              maxWidth: "420px",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* ── Arrow button ── */}
        <motion.div
          className="flex-shrink-0 ml-auto"
          animate={{
            scale: hovered ? 1.1 : 1,
            rotate: hovered ? -45 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300"
            style={{
              borderColor: hovered ? "transparent" : "#0a0a0a",
              background: hovered ? NAVY : "transparent",
            }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke={hovered ? "#fff" : NAVY}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>

        {/* ── Hover image (desktop only) ── */}
        <div className="hidden lg:block">
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute pointer-events-none z-10 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  width: 200,
                  height: 200,
                  right: "170px",
                  top: "-20px",
                }}
                initial={{ opacity: 0, y: 60, scale: 0.92 }}
                animate={{ opacity: 1, y: 0,  scale: 1    }}
                exit={{   opacity: 0, y: 20, scale: 0.50  }}
                transition={{ duration: 0.60, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Divider */}
      {!isLast && (
        <motion.div
          className="h-px mx-4 sm:mx-6"
          style={{ background: "rgba(0,52,108,0.08)" }}
          animate={{ scaleX: hovered ? 1 : 1, opacity: hovered ? 0.5 : 1 }}
        />
      )}
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Projects() {
  const projects = [
    {
      id: 1, number: "01",
      title: "Aconomy",
      category: "Financial Platform",
      description: "Advanced analytics & real-time portfolio tracking for modern businesses.",
      image: "/Aconomy.webp",
      link: "/portfolio",
    },
    {
      id: 2, number: "02",
      title: "FocusMonk",
      category: "Productivity Suite",
      description: "Enhance focus, streamline workflows and boost team performance.",
      image: "/Focusmonk (1).webp",
      link: "/portfolio",
    },
    {
      id: 3, number: "03",
      title: "Salharo",
      category: "E-commerce Platform",
      description: "Seamless shopping, smart inventory and exceptional customer UX.",
      image: "/Salharo.webp",
      link: "/portfolio",
    },
    {
      id: 4, number: "04",
      title: "Wise1HRM",
      category: "HR Management",
      description: "Employee tracking, payroll automation and performance analytics.",
      image: "/Wise1HRM.webp",
      link: "/portfolio",
    },
    {
      id: 5, number: "05",
      title: "Appointzme",
      category: "Appointment Booking",
      description: "Smart scheduling that reduces no-shows and enhances engagement.",
      image: "/with_name_Final.png",
      link: "/portfolio",
    },
  ];

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="px-5 py-2 border border-black rounded-full text-xs sm:text-sm font-semibold text-black font-body">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-heading leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Projects We Completed
             
            </motion.h2>

            <motion.p
              className="mt-3 text-gray-900 font-body text-base sm:text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hand-picked work showcasing our expertise across web, mobile, and enterprise solutions.
            </motion.p>
          </div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold font-body text-sm transition-all duration-300 hover:scale-105 transform"
              style={{ backgroundColor: NAVY, boxShadow: "0 4px 20px rgba(0,52,108,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,52,108,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,52,108,0.3)")}
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── Top border ── */}
        <motion.div
          className="h-px mb-2"
          style={{ background: "rgba(0,52,108,0.12)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* ── Project Rows ── */}
        <div>
          {projects.map((project, index) => (
            <Link key={project.id} href={project.link || "/portfolio"}>
              <ProjectRow
                project={project}
                index={index}
                isLast={index === projects.length - 1}
              />
            </Link>
          ))}
        </div>

        {/* ── Bottom border ── */}
        <div className="h-px" style={{ background: "rgba(0,52,108,0.12)" }} />

        {/* ── Stats ── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-2xl overflow-hidden"
          style={{ background: "rgba(0,52,108,0.08)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { target: 50,  suffix: "+", label: "Projects Delivered"  },
            { target: 30,  suffix: "+", label: "Happy Clients"        },
            { target: 5,   suffix: "+", label: "Years Experience"     },
            { target: 100, suffix: "%", label: "Client Satisfaction"  },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center py-8 px-4 bg-white"
              whileHover={{ background: "rgba(0,52,108,0.03)" }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="font-bold font-body leading-none mb-1"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: NAVY }}
              >
                <Counter target={s.target} suffix={s.suffix} />
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-body text-center">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="block md:hidden mt-10">
          <Link
            href="/portfolio"
            className="flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-full font-semibold font-body w-full text-sm"
            style={{ backgroundColor: NAVY }}
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
