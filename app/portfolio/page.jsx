"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Testimonials from "@/Components/Testimonials";

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
            link: "/projects/1",

        },
        {
            id: 2,
            title: "FocusMonk",
            category: "Productivity Suite",
            description: "An innovative productivity solution designed to enhance focus and streamline workflow management for teams.",
            image: "/Focusmonk (1).webp",
            link: "/projects/2"
        },
        {
            id: 3,
            title: "Salharo",
            category: "E-commerce",
            description: "A robust e-commerce platform supporting seamless online transactions and exceptional customer experience.",
            image: "/Salharo.webp",
            link: "/projects/3"
        },
        {
            id: 4,
            title: "Wise1HRM",
            category: "HR Management",
            description: "Complete human resource management system with employee tracking and payroll management features.",
            image: "/Wise1HRM.webp",
            link: "/projects/4"
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
            link: "https://play.google.com/store/apps/details?id=com.mightybell.ecomondemand",
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
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url('/bg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

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

            {/* Development Process Section - Horizontal Line with Steps */}
            <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">


                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            className="inline-block mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="px-6 py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black">
                                Our Process
                            </span>
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Development Process
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Our streamlined process ensures efficient delivery and exceptional results for every project.
                        </motion.p>
                    </motion.div>

                    {/* Horizontal Process Steps */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Horizontal Line - Desktop */}
                        <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-[#00346C] via-[#00346C] to-[#00346C]"></div>

                        {/* Process Steps */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
                            {[
                                {
                                    number: "1",
                                    title: "Requirement",
                                    icon: (
                                        <div className="relative w-14 h-14  sm:w-15 sm:h-15" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                                            <Image
                                                src="/analysis-1.png"
                                                alt="Satisfaction Rate"
                                                fill
                                                sizes="60px"
                                                className="object-contain"
                                            />
                                        </div>
                                    )
                                },
                                {
                                    number: "2",
                                    title: "UI/UX Design",
                                    icon: (
                                        <div className="relative w-14 h-14  sm:w-15 sm:h-15" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                                            <Image
                                                src="/ui-design.png"
                                                alt="Satisfaction Rate"
                                                fill
                                                sizes="60px"
                                                className="object-contain"
                                            />
                                        </div>
                                    )
                                },
                                {
                                    number: "3",
                                    title: "Development",
                                    icon: (
                                        <div className="relative w-14 h-14  sm:w-15 sm:h-15" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                                            <Image
                                                src="/pro.png"
                                                alt="Satisfaction Rate"
                                                fill
                                                sizes="60px"
                                                className="object-contain"
                                            />
                                        </div>
                                    )
                                },
                                {
                                    number: "4",
                                    title: "Testing",
                                    icon: (
                                        <div className="relative w-14 h-14  sm:w-15 sm:h-15" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                                            <Image
                                                src="/QA.png"
                                                alt="Satisfaction Rate"
                                                fill
                                                sizes="60px"
                                                className="object-contain"
                                            />
                                        </div>
                                    )
                                },
                                {
                                    number: "5",
                                    title: "Deployment",
                                    icon: (
                                        <div className="relative w-14 h-14 sm:w-15 sm:h-15" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                                            <Image
                                                src="/dep.png"
                                                alt="Satisfaction Rate"
                                                fill
                                                sizes="60px"
                                                className="object-contain"
                                            />
                                        </div>
                                    )
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="flex flex-col items-center text-center relative"
                                >
                                    {/* Circle with Icon */}
                                    <motion.div
                                        className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-2xl mb-6 bg-white border-4 z-10"
                                        style={{ borderColor: '#00346C' }}
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.15 + 0.2,
                                            type: "spring",
                                            stiffness: 120
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" style={{ color: '#00346C' }}>
                                            {step.icon}
                                        </div>
                                    </motion.div>

                                    {/* Step Number */}
                                    <motion.div
                                        className="text-4xl sm:text-5xl font-bold mb-3 font-body"
                                        style={{ color: '#00346C' }}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className="text-xl sm:text-2xl md:text-2xl font-bold text-black font-heading px-2 leading-tight"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {step.title}
                                    </motion.h3>
                                </motion.div>
                            ))}
                        </div>
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
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 font-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Have a Project in Mind?
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 text-base sm:text-lg mb-8 font-body"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Let's collaborate to bring your vision to life with our expertise and innovative solutions.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/Contact"
                                className="inline-block w-full sm:w-auto text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl font-body"
                                style={{ backgroundColor: '#00346C' }}
                            >
                                Start Your Project
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
