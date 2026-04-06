"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaRocket, FaUsers, FaLightbulb, FaAward } from "react-icons/fa";
import TeamMembers from "@/Components/TeamMembers";

export default function AboutPage() {
    const [counters, setCounters] = useState([0, 0, 0, 0]);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    const stats = [
        {
            number: "25+",
            label: "Completed Projects",
            value: 25,
            suffix: "+",
            icon: (
                 <div className="relative w-16 h-16 sm:w-20 sm:h-20" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                    <Image
                        src="/tasks.png"
                        alt="Satisfaction Rate"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            number: "30+",
            label: "Happy Customer",
            value: 30,
            suffix: "+",
            icon: (
                 <div className="relative w-16 h-16 sm:w-20 sm:h-20" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                    <Image
                        src="/happy.png"
                        alt="Satisfaction Rate"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
        {
            number: "3+",
            label: "Award Winning",
            value: 3,
            suffix: "+",
            icon: (
                <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 100 100" fill="none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                    {/* Trophy cup */}
                    <path d="M35 30H65V50C65 58 58 65 50 65C42 65 35 58 35 50V30Z" fill="#FFD54F" stroke="#000" strokeWidth="3"/>
                    <rect x="30" y="25" width="40" height="8" rx="2" fill="#FFC107" stroke="#000" strokeWidth="3"/>
                    {/* Base */}
                    <rect x="45" y="65" width="10" height="8" fill="#FFB300" stroke="#000" strokeWidth="3"/>
                    <rect x="35" y="73" width="30" height="5" rx="2" fill="#FF9800" stroke="#000" strokeWidth="3"/>
                    {/* Handles */}
                    <path d="M30 35C25 35 20 38 20 43C20 48 25 50 30 50" stroke="#000" strokeWidth="3" fill="none"/>
                    <path d="M70 35C75 35 80 38 80 43C80 48 75 50 70 50" stroke="#000" strokeWidth="3" fill="none"/>
                    {/* Star */}
                    <path d="M50 38L52 44L58 44L53 48L55 54L50 50L45 54L47 48L42 44L48 44L50 38Z" fill="#FFF" stroke="#000" strokeWidth="2"/>
                </svg>
            )
        },
        {
            number: "99%",
            label: "Satisfaction Rate",
            value: 99,
            suffix: "%",
            icon: (
                <div className="relative w-16 h-16 sm:w-20 sm:h-20" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))' }}>
                    <Image
                        src="/satisfaction.png"
                        alt="Satisfaction Rate"
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    // Animate each counter
                    stats.forEach((stat, index) => {
                        let start = 0;
                        const end = stat.value;
                        const duration = 2000; // 2 seconds
                        const increment = end / (duration / 16); // 60fps

                        const timer = setInterval(() => {
                            start += increment;
                            if (start >= end) {
                                setCounters(prev => {
                                    const newCounters = [...prev];
                                    newCounters[index] = end;
                                    return newCounters;
                                });
                                clearInterval(timer);
                            } else {
                                setCounters(prev => {
                                    const newCounters = [...prev];
                                    newCounters[index] = Math.floor(start);
                                    return newCounters;
                                });
                            }
                        }, 16);
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    const values = [
        {
            icon: <FaRocket className="w-8 h-8" />,
            title: "Innovation",
            description: "We embrace cutting-edge technologies and innovative solutions to deliver exceptional results."
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Collaboration",
            description: "We work closely with our clients to understand their needs and deliver tailored solutions."
        },
        {
            icon: <FaLightbulb className="w-8 h-8" />,
            title: "Excellence",
            description: "We strive for excellence in every project, ensuring quality and attention to detail."
        },
        {
            icon: <FaAward className="w-8 h-8" />,
            title: "Integrity",
            description: "We maintain transparency and honesty in all our business relationships and practices."
        },
    ];

    const whyChooseUs = [
        "Expert team of developers and designers",
        "Proven track record of successful projects",
        "Agile development methodology",
        "24/7 customer support",
        "Competitive pricing",
        "On-time project delivery",
    ];

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
                                About Us
                            </span>
                        </motion.div>

                        <motion.h1 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight font-heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Building Digital Excellence
                            <br />
                            <span className="text-black">Since 2019</span>
                        </motion.h1>

                        <motion.p 
                            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-normal px-4 font-body"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            We are a passionate team of developers, designers, and innovators dedicated to transforming ideas into powerful digital solutions.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                {/* Background Pattern */}
                

                {/* L-Shape Border Frame - Top Left and Bottom Right */}
                <div
                    className="absolute inset-0 border-4 pointer-events-none"
                    style={{
                        borderColor: "#00346C",
                        clipPath: "polygon(0 0, 20% 0, 20% 4px, 4px 4px, 4px 20%, 0 20%, 0 100%, 100% 100%, 100% 80%, calc(100% - 4px) 80%, calc(100% - 4px) calc(100% - 4px), 80% calc(100% - 4px), 80% 100%, 0 100%)",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.15,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >
                                {/* Icon without background */}
                                <motion.div 
                                    className="inline-flex items-center justify-center mb-4 sm:mb-6"
                                    initial={{ rotate: -10, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.icon}
                                </motion.div>

                                {/* Number */}
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2 font-heading">
                                    {counters[index]}{stat.suffix}
                                </h3>

                                {/* Label */}
                                <p className="text-black text-sm sm:text-base font-body">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                {/* <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url('/bg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                /> */}

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left - Images */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative w-full"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div 
                                    className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                >
                                    <Image
                                        src="/about1.jpeg"
                                        alt="Team collaboration"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </motion.div>
                                <motion.div 
                                    className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-8"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, rotate: -2 }}
                                >
                                    <Image
                                        src="/about2.jpg"
                                        alt="Office workspace"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full"
                        >
                            <motion.div 
                                className="inline-block mb-4"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="px-4 py-2 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black">
                                    OUR STORY
                                </span>
                            </motion.div>

                            <motion.h2 
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-heading"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Transforming Ideas Into Reality
                            </motion.h2>

                            <motion.p 
                                className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 font-body"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Founded in 2019, RootX Technologies started with a simple mission: to help businesses leverage technology to achieve their goals. What began as a small team of passionate developers has grown into a full-service software house.
                            </motion.p>

                            <motion.p 
                                className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 font-body"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Today, we specialize in web development, mobile applications, and custom software solutions. Our team combines technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations.
                            </motion.p>

                            <motion.p 
                                className="text-gray-700 text-base sm:text-lg leading-relaxed font-body"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                We believe in building long-term partnerships with our clients, understanding their unique challenges, and providing innovative solutions that drive real business value.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            
            <TeamMembers />

            {/* Why Choose Us Section */}
            <section className="relative py-12 sm:py-16 md:py-24 px-4 mb-10 sm:px-6 lg:px-8 bg-white">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full"
                        >
                            <motion.div 
                                className="inline-block mb-4"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="px-4 py-2 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black">
                                    Why Choose Us
                                </span>
                            </motion.div>

                            <motion.h2 
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-heading"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Your Trusted Technology Partner
                            </motion.h2>

                            <div className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ 
                                            duration: 0.5, 
                                            delay: index * 0.1 + 0.4,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-2" />
                                        <p className="text-black text-base sm:text-lg font-headng">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 80, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl w-full"
                        >
                            <Image
                                src="/team work 3.png"
                                alt="Team working"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 font-heading"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Ready to Start Your Project?
                        </motion.h2>
                        <motion.p 
                            className="text-black text-base sm:text-lg mb-8 font-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Let's work together to bring your ideas to life with cutting-edge technology and expert craftsmanship.
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
                                className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-semibold border-2 border-black transition-all duration-300 text-base sm:text-lg shadow-md hover:shadow-lg transform font-body inline-block"
                                style={{ backgroundColor: '#ffffff' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#00346C';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.borderColor = '#00346C';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.borderColor = '#000000';
                                }}
                            >
                                Get In Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
