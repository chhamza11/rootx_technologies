"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NAVY = "#00346C";

const SOCIAL = [
  {
    label: "Follow On Facebook",
    href: "https://www.facebook.com/rootxtechnologies1/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Join On LinkedIn",
    href: "https://www.linkedin.com/company/rootx-technologies/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    ),
  },
  {
    label: "Follow On Instagram",
    href: "https://www.instagram.com/rootx_technologies/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function CtaSection() {
  return (
    <section
      className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-white"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="inline-block mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="px-4 sm:px-6 py-2 sm:py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black transition-all duration-300">
            Join Us
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-bold font-heading leading-tight text-black"
            style={{ fontSize: "clamp(1.6rem, 5vw, 3.8rem)" }}
          >
            Are you Ready to Turn <span style={{ color: NAVY }}>your Ideas</span> into{" "}
            <span style={{ color: NAVY, }}>
              Powerful Digital Products
            </span>
          </h2>
        </motion.div>

        {/* ── Social Links — left aligned, icon overflows left ── */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          {SOCIAL.map((s, i) => (
            <motion.div
              key={i}
              className="flex-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center rounded-full transition-all duration-300 group overflow-visible"
                style={{
                  background: "rgba(0,52,108,0.07)",
                  border: "1px solid rgba(0,52,108,0.12)",
                  padding: "10px 16px 10px 68px",
                  minHeight: "56px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,52,108,0.13)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,52,108,0.07)")}
              >
                {/* Icon circle — overflows left */}
                <span
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: "#00346C" }}
                >
                  {s.icon}
                </span>
                {/* Label */}
                <span className="font-bold font-body text-black text-sm sm:text-base whitespace-nowrap">
                  {s.label}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
