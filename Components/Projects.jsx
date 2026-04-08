"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const projects = [
    {
      id: 1,
      title: "Aconomy",
      category: "Financial Platform",
      description: "A sophisticated financial management platform offering advanced analytics and portfolio tracking for modern businesses.",
      image: "/Aconomy.webp",
      gradient: "from-blue-900 to-cyan-600",
      color: "#00346C"
    },
    {
      id: 2,
      title: "FocusMonk",
      category: "Productivity Suite",
      description: "An innovative productivity solution designed to enhance focus and time management for teams.",
      image: "/Focusmonk (1).webp",
      gradient: "from-blue-800 to-teal-600",
      color: "#00346C"
    },
    {
      id: 3,
      title: "Salharo",
      category: "E-commerce Platform",
      description: "A full-featured e-commerce platform providing seamless shopping experiences and exceptional customer experience.",
      image: "/Salharo.webp",
      gradient: "from-blue-900 to-cyan-700",
      color: "#00346C"
    },
    {
      id: 4,
      title: "Wise1HRM",
      category: "HR Management",
      description: "Complete human resource management system with employee tracking and payroll management features.",
      image: "/Wise1HRM.webp",
      gradient: "from-blue-900 to-cyan-600",
      color: "#00346C"
    },
    {
      id: 5,
      title: "Appointzme",
      category: "Appointment Booking",
      description: "Smart appointment scheduling platform that simplifies booking management and enhances customer engagement.",
      image: "/with name.png",
      gradient: "from-blue-800 to-teal-600",
      color: "#00346C"
    },
  ];

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main ref={container}>
        <section id="portfolio" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12 md:mb-16 gap-4">
              <div className="w-full md:w-auto">
                {/* Our Portfolio Badge */}
                <motion.div 
                  className="inline-block mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="px-4 sm:px-6 py-2 sm:py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold text-black font-body transition-all duration-300">
                    Our Portfolio
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-heading leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Projects We Completed
                </motion.h2>
              </div>

              {/* View All Projects Button - Desktop Only */}
              <motion.div 
                className="hidden md:block w-auto"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-blue-950 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold font-body  transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base"
                >
                  View All Projects
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Projects Cards with Advanced Sticky Motion Effect */}
            <div className="space-y-12 sm:space-y-16 md:space-y-16 mb-24 sm:mb-32 md:mb-0">
              {projects.map((project, index) => {
                const targetScale = 1 - (projects.length - index) * 0.05;
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    progress={scrollYProgress}
                    range={[index * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>

            {/* View All Projects Button - Mobile Only (After Cards) */}
            <motion.div 
              className="block md:hidden mt-20 sm:mt-24 pb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold font-body hover:bg-blue-800 transition-all duration-300 shadow-[0_0_20px_rgba(30,58,138,0.3)] hover:shadow-[0_0_30px_rgba(30,58,138,0.5)] transform hover:scale-105 text-sm sm:text-base w-full"
              >
                View All Projects
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}

// Advanced Project Card Component with Sticky Motion Effects
const ProjectCard = ({ project, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: project.color,
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)] w-full max-w-7xl mx-4 origin-top will-change-transform"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-6 md:p-10 relative">
          {/* Left Side - Title and Description */}
          <motion.div 
            className="flex flex-col justify-between text-white relative z-10"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Title at Top */}
            <div>
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-body leading-tight"
                style={{ color: 'white' }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>
              
              {/* Category Badge - Mobile Only (After Title) */}
              <motion.div 
                className="block lg:hidden mt-3"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur/24 rounded-full text-xs sm:text-sm font-semibold font-body border border-white/20 shadow-lg">
                  {project.category}
                </span>
              </motion.div>
            </div>

            {/* Description at Bottom */}
            <motion.div 
              className="mt-4 lg:mt-0"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base md:text-lg text-white font-body font-normal leading-relaxed opacity-90">
                {project.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Middle - Project Image */}
          <motion.div 
            className="flex items-center justify-center relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div 
              className={`relative w-full aspect-square rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${
                project.id === 1 ? "max-w-[280px] sm:max-w-[320px]" :
                project.id === 2 ? "max-w-[310px] sm:max-w-[370px]" :
                project.id === 3 ? "max-w-[340px] sm:max-w-[420px]" :
                project.id === 4 ? "max-w-[370px] sm:max-w-[470px]" :
                project.id === 5 ? "max-w-[400px] sm:max-w-[520px]" :
                "max-w-xs sm:max-w-sm"
              }`}
            >
              <motion.div
                style={{ scale: imageScale }}
                className="relative w-full h-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Category and Button */}
          <motion.div 
            className="flex flex-col justify-between text-white relative z-10"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Category at Top - Desktop Only */}
            <motion.div 
              className="hidden lg:flex justify-end"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur/24 rounded-full text-xs sm:text-sm font-semibold font-body border border-white/20 shadow-lg">
                {project.category}
              </span>
            </motion.div>

            {/* View Project Details Button at Bottom */}
            <motion.div 
              className="mt-4 lg:mt-0 flex justify-start lg:justify-end"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-body px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.5)] transform hover:scale-105 text-xs sm:text-sm md:text-base group/btn"
              >
                View Project Details
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};