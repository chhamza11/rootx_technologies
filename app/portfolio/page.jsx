"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Testimonials from "@/Components/Testimonials";
import CtaSection from "@/Components/CtaSection";
import HeroBackground from "@/Components/HeroBackground";

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [isVisible, setIsVisible] = useState(false);
    const [touchedCard, setTouchedCard] = useState(null);
    const sectionRef = useRef(null);

    const categories = ["All", "Financial Platform", "Productivity Suite", "E-commerce", "HR Management", "Transportation", "Gaming"];

    const projects = [
        {
            id: 1,
            title: "Aconomy",
            category: "Financial Platform",
            description: "A comprehensive financial management platform offering advanced analytics and portfolio tracking for modern businesses.",
            image: "/Aconomy.webp",
            link: "#",
        },
        {
            id: 2,
            title: "FocusMonk",
            category: "Productivity Suite",
            description: "An innovative productivity solution designed to enhance focus and streamline workflow management for teams.",
            image: "/Focusmonk (1).webp",
            link: "#"
        },
        {
            id: 3,
            title: "Salharo",
            category: "E-commerce",
            description: "A robust e-commerce platform supporting seamless online transactions and exceptional customer experience.",
            image: "/Salharo.webp",
            link: "#"
        },
        {
            id: 4,
            title: "Wise1HRM",
            category: "HR Management",
            description: "Complete human resource management system with employee tracking and payroll management features.",
            image: "/Wise1HRM.webp",
            link: "#"
        },
        {
            id: 5,
            title: "Appointzme",
            category: "Productivity Suite",
            description: "Smart appointment scheduling platform that simplifies booking management and enhances customer engagement.",
            image: "/with_name_final.png",
            link: "https://play.google.com/store/apps/details?id=com.appointzme.business",
            isExternal: true,

        },
        {
            id: 6,
            title: "Eco Ride",
            category: "Transportation",
            description: "Eco-friendly ride-sharing platform promoting sustainable transportation and reducing carbon footprint.",
            image: "/EcoRide.png",
            link: "https://play.google.com/store/apps/details?id=com.flutterdev.ourjourney",
            isExternal: true,

        },
        {
            id: 7,
            title: "Racket Score",
            category: "Gaming",
            description: "Interactive gaming platform offering immersive experiences and engaging gameplay for all ages.",
            image: "/Racket.png",
            link: "https://play.google.com/store/apps/details?id=com.padel.score",
            isExternal: true,
            objectFit: "object-contain"
        },
    ];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center mb-2 justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                {/* Background Effects */}
                <HeroBackground />
                {/* Background Pattern */}
                

                <div className="relative max-w-5xl mx-auto text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="inline-block mb-4 sm:mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="px-4 sm:px-6 py-2 sm:py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black transition-all duration-300">
                                Our Portfolio
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight font-heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Our Work Speaks
                            <br />
                            <span className="text-black">For Itself</span>
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-normal px-4 font-body"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Explore our diverse portfolio of successful projects that showcase our expertise in delivering innovative digital solutions across various industries.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3 sm:gap-4"
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold font-body text-xs sm:text-sm transition-all duration-300 ${activeFilter === category
                                    ? 'text-white shadow-lg'
                                    : 'bg-white text-black border-2 border-black hover:bg-gray-50'
                                    }`}
                                style={activeFilter === category ? { backgroundColor: '#00346C' } : {}}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`group relative bg-white/5 backdrop-blur-md border border-gray-200 rounded-3xl overflow-hidden hover:border-[#00346C]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00346C]/20 ${touchedCard === project.id ? 'touched' : ''}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onTouchStart={() => {
                                    if (touchedCard === project.id) {
                                        setTouchedCard(null);
                                    } else {
                                        setTouchedCard(project.id);
                                    }
                                }}
                            >
                                {/* Product Image */}
                                <div className="relative w-full cursor-pointer h-[380px] sm:h-[400px] md:h-[360px] lg:h-[400px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={`${project.objectFit || 'object-cover'} object-center transition-transform duration-700`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Overlay - Shows on Hover with slide up animation */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/95 via-[#2c4a6b]/85 to-[#1e3a5f]/70 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out flex flex-col justify-end p-6 sm:p-8 ${touchedCard === project.id ? '!translate-y-0' : ''}`}>
                                        {/* Category Badge */}
                                        <div className={`inline-block self-start px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-body ${touchedCard === project.id ? '!translate-y-0 !opacity-100' : ''}`}>
                                            {project.category}
                                        </div>

                                        {/* Project Name */}
                                        <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 font-body ${touchedCard === project.id ? '!translate-y-0 !opacity-100' : ''}`}>
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className={`text-sm sm:text-base text-white/90 leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 font-body ${touchedCard === project.id ? '!translate-y-0 !opacity-100' : ''}`}>
                                            {project.description}
                                        </p>

                                        {/* View Project Button */}
                                        {project.isExternal ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <button className={`w-full px-6 py-3 bg-white text-[#00346C] hover:bg-gray-100 font-semibold rounded-xl shadow-lg hover:shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400 text-sm sm:text-base font-body ${touchedCard === project.id ? '!translate-y-0 !opacity-100' : ''}`}>
                                                    View on Play Store
                                                </button>
                                            </a>
                                        ) : (
                                            <Link href={project.link}>
                                                <button className={`w-full px-6 py-3 bg-white text-[#00346C] hover:bg-gray-100 font-semibold rounded-xl shadow-lg hover:shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400 text-sm sm:text-base font-body ${touchedCard === project.id ? '!translate-y-0 !opacity-100' : ''}`}>
                                                    View Project Details
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process Section - Screenshot Accurate */}
            <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 max-w-7xl mx-auto">

                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                        <motion.div className="inline-block mb-6" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                            <span className="px-6 py-2.5 border border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black">Our Process</span>
                        </motion.div>
                        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                            Development Process
                        </motion.h2>
                        <motion.p className="text-gray-900 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                            Our streamlined process ensures efficient delivery and exceptional results for every project.
                        </motion.p>
                    </motion.div>

                    {/* Cards Row — simple grid on mobile, staggered on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                        {[
                            { number: "01", title: "Requirement", src: "/file-description.svg", description: "Deep architectural discovery and stakeholder alignment to map every technical nuance." },
                            { number: "02", title: "UI/UX Design", src: "/brand-ubuntu.svg", description: "Iterative prototyping focused on ergonomic flows and pixel-perfect high-fidelity interfaces." },
                            { number: "03", title: "Development", src: "/terminal-2.svg", description: "Robust, high-performance engineering using cutting-edge stacks and clean code principles." },
                            { number: "04", title: "Testing", src: "/file-code (1).svg", description: "Rigorous QA, automated unit testing, and performance stress benchmarks for stability." },
                            { number: "05", title: "Deployment", src: "/cloud-upload.svg", description: "Seamless CI/CD orchestration and cloud infrastructure handover for 24/7 reliability." },
                        ].map((step, index) => {
                            const isCenter = index === 2;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <div
                                        className="relative rounded-2xl p-4 flex flex-col gap-3 cursor-default overflow-hidden h-full"
                                        style={{
                                            background: isCenter ? "linear-gradient(160deg,#00346C 0%,#001d3d 100%)" : "#f3f4f6",
                                            border: isCenter ? "none" : "1px solid rgba(0,52,108,0.1)",
                                            boxShadow: isCenter ? "0 12px 32px rgba(0,52,108,0.4)" : "0 2px 12px rgba(0,52,108,0.06)",
                                        }}
                                    >
                                        <span className="absolute top-3 right-4 font-bold font-body select-none leading-none pointer-events-none"
                                            style={{ fontSize: "2rem", color: isCenter ? "rgba(255,255,255,0.1)" : "rgba(0,52,108,0.07)" }}>
                                            {step.number}
                                        </span>
                                        <div className="relative flex-shrink-0 rounded-xl overflow-hidden" style={{ width: 48, height: 48, background: "#00346C", padding: "10px" }}>
                                            <div className="relative w-full h-full">
                                                <Image src={step.src} alt={step.title} fill sizes="28px" className="object-contain brightness-0 invert" />
                                            </div>
                                        </div>
                                        <h3 className="font-bold font-body leading-snug" style={{ fontSize: "1rem", color: isCenter ? "#ffffff" : "#0d0d0d" }}>
                                            {step.title}
                                        </h3>
                                        <p className="font-body leading-relaxed text-xs" style={{ color: isCenter ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.9)" }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Desktop staggered layout */}
                    <div className="hidden md:flex md:flex-row md:items-end justify-center gap-3 lg:gap-4 pb-8">
                        {[
                            { number: "01", title: "Requirement", src: "/file-description.svg", description: "Deep architectural discovery and stakeholder alignment to map every technical nuance." },
                            { number: "02", title: "UI/UX Design", src: "/brand-ubuntu.svg", description: "Iterative prototyping focused on ergonomic flows and pixel-perfect high-fidelity interfaces." },
                            { number: "03", title: "Development", src: "/terminal-2.svg", description: "Robust, high-performance engineering using cutting-edge stacks and clean code principles." },
                            { number: "04", title: "Testing", src: "/file-code (1).svg", description: "Rigorous QA, automated unit testing, and performance stress benchmarks for stability." },
                            { number: "05", title: "Deployment", src: "/cloud-upload.svg", description: "Seamless CI/CD orchestration and cloud infrastructure handover for 24/7 reliability." },
                        ].map((step, index) => {
                            const isCenter = index === 2;
                            const isElevated = index === 1 || index === 3;
                            const isOuter = index === 0 || index === 4;
                            return (
                                <motion.div
                                    key={index}
                                    className="w-full md:w-1/5  flex-shrink-0"
                                    style={{
                                        marginBottom: isOuter ? "120px" : isElevated ? "70px" : "0px",
                                        marginLeft: isOuter ? "-5px" : "0px",
                                        marginRight: isOuter ? "-5px" : "0px",
                                    }}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <motion.div
                                        className="relative rounded-2xl p-5 flex flex-col gap-3 cursor-default overflow-hidden"
                                        style={{
                                            background: isCenter ? "linear-gradient(160deg,#00346C 0%,#001d3d 100%)" : "#f3f4f6",
                                            border: isCenter ? "none" : "1px solid rgba(0,52,108,0.1)",
                                            // boxShadow:   isCenter ? "0 24px 64px rgba(0,52,108,0.5)" : "0 2px 16px rgba(0,52,108,0.07)",
                                            minHeight: isCenter ? "300px" : isElevated ? "260px" : "230px",
                                        }}
                                        whileHover={{ y: -8, boxShadow: isCenter ? "0 5px 10px rgba(0,52,108,0.6)" : "0 5px 10px rgba(0,52,108,0.15)" }}
                                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                    >
                                        {/* Ghost number — top right */}
                                        <span
                                            className="absolute top-3 right-4 font-bold font-body select-none leading-none pointer-events-none"
                                            style={{ fontSize: "clamp(2.2rem,4.5vw,3.2rem)", color: isCenter ? "rgba(255,255,255,0.7)" : "rgba(0,52,108,0.09)" }}
                                        >
                                            {step.number}
                                        </span>

                                        {/* Icon box — bigger, screenshot accurate */}
                                        <motion.div
                                            className="relative flex-shrink-0 rounded-xl overflow-hidden"
                                            style={{
                                                width: 56, height: 56,
                                                background: isCenter ? "rgba(255,255,255,0.18)" : "#00346C",
                                                padding: "10px",
                                            }}
                                            whileHover={{ scale: 1.08, rotate: 4 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <div className="relative w-full h-full">
                                                <Image src={step.src} alt={step.title} fill sizes="36px" className="object-contain brightness-0 invert" />
                                            </div>
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="font-bold font-body leading-snug" style={{ fontSize: "clamp(1rem,1.6vw,1.15rem)", color: isCenter ? "#ffffff" : "#0d0d0d" }}>
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-body leading-relaxed" style={{ fontSize: "clamp(0.78rem,1.2vw,0.88rem)", color: isCenter ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.9)" }}>
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section
            <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url('/ff bg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            className="inline-block mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="px-6 py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black">
                                Our Impact
                            </span>
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 font-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Delivering Excellence
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { number: "25+", label: "Projects Completed" },
                            { number: "30+", label: "Happy Clients" },
                            { number: "50+", label: "Team Members" },
                            { number: "99%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 rounded-2xl bg-white shadow-lg"
                            >
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 font-heading" style={{ color: '#00346C' }}>
                                    {stat.number}
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base font-body">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            <Testimonials />

            {/* CTA Section */}
            <CtaSection />
        </div>
    );
}
