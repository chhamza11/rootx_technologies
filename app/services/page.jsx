"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TechStack from "@/Components/TechStack";
import CtaSection from "@/Components/CtaSection";
import HeroBackground from "@/Components/HeroBackground";

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "Website Development",
            description: "Transform your digital presence with high-performance, scalable websites built using cutting-edge technologies. We create responsive, SEO-optimized web solutions that drive engagement, enhance user experience, and accelerate your business growth in the competitive digital landscape.",
            features: [
                "Custom Web Applications",
                "E-commerce Solutions",
                "CMS Development",
                "Progressive Web Apps",
                "API Integration",
                "Performance Optimization"
            ],
            image: "/code.png"
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "Bring your ideas to life with powerful native and cross-platform mobile applications. Our expert team delivers feature-rich, intuitive apps for iOS and Android that provide exceptional user experiences, seamless performance, and help you connect with your audience wherever they are.",
            features: [
                "iOS App Development",
                "Android App Development",
                "Cross-Platform Apps",
                "App Maintenance & Support",
                "App Store Optimization",
                "Push Notifications"
            ],
            image: "/mobile.png"
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Elevate your brand with stunning, user-centric designs that captivate and convert. We craft beautiful, intuitive interfaces backed by thorough research and testing, ensuring every interaction delights your users while driving measurable results and strengthening your brand identity.",
            features: [
                "User Interface Design",
                "User Experience Design",
                "Prototyping & Wireframing",
                "Design Systems",
                "Usability Testing",
                "Brand Identity"
            ],
            image: "/ui.png"
        },
        {
            id: 4,
            title: "Digital Marketing",
            description: "Amplify your online presence with data-driven digital marketing strategies tailored to your goals. From SEO and social media to content marketing and paid advertising, we help you reach your target audience, build meaningful connections, and achieve sustainable growth in the digital space.",
            features: [
                "SEO Optimization",
                "Social Media Marketing",
                "Content Marketing",
                "PPC Advertising",
                "Email Marketing",
                "Analytics & Reporting"
            ],
            image: "/marketing.png"
        },
        {
            id: 5,
            title: "Cloud Solutions",
            description: "Leverage the power of cloud computing to scale your business efficiently and securely. We provide comprehensive cloud migration, deployment, and management services that optimize your infrastructure, reduce costs, and enable seamless scalability for your growing business needs.",
            features: [
                "Cloud Migration",
                "Cloud Infrastructure",
                "DevOps Services",
                "Cloud Security",
                "Serverless Architecture",
                "Container Orchestration"
            ],
            image: "/claude.png"
        },
        {
            id: 6,
            title: "Cybersecurity",
            description: "Protect your digital assets with robust, enterprise-grade security solutions. We implement comprehensive security measures, conduct thorough audits, and provide ongoing monitoring to safeguard your business from evolving cyber threats and ensure compliance with industry standards.",
            features: [
                "Security Audits",
                "Penetration Testing",
                "Security Consulting",
                "Compliance Management",
                "Threat Detection",
                "Incident Response"
            ],
            image: "/cyber.png"
        }
    ];

    const handleServiceClick = (index) => {
        setActiveService(index);
    };

    const process = [
        {
            number: "01",
            title: "Discovery & Planning",
            description: "We start by understanding your business goals, target audience, and project requirements to create a comprehensive strategy."
        },
        {
            number: "02",
            title: "Design & Prototype",
            description: "Our design team creates intuitive interfaces and interactive prototypes to visualize the final product."
        },
        {
            number: "03",
            title: "Development",
            description: "Our developers bring designs to life using the latest technologies and best practices for optimal performance."
        },
        {
            number: "04",
            title: "Testing & Launch",
            description: "Rigorous testing ensures quality, followed by a smooth launch and ongoing support for your success."
        }
    ];

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
                                Our Services
                            </span>
                        </motion.div>

                        <motion.h1 
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight font-heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Services We Can
                            <br />
                            <span className="text-black">Help You With !</span>
                        </motion.h1>

                        <motion.p 
                            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-normal px-4 font-body"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            We offer comprehensive digital solutions to help your business thrive in the modern world. From web development to digital marketing, we've got you covered.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Zig-Zag Section */}
            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.2
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className={`flex flex-col ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } gap-8 md:gap-16 items-center`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 w-full">
                                {/* Number */}
                                <motion.div 
                                    className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 font-body"
                                    style={{ color: '#000000' }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    {service.id}
                                </motion.div>

                                {/* Title */}
                                <motion.h3 
                                    className="text-3xl sm:text-4xl font-bold text-black mb-4 font-body"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    {service.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p 
                                    className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-body"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {service.description}
                                </motion.p>

                                {/* Features List */}
                                <motion.ul 
                                    className="space-y-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    {service.features.map((feature, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-2" />
                                            <span className="text-sm sm:text-base text-gray-700 font-body">
                                                {feature}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Image Side */}
                            <motion.div 
                                className="flex-1 w-full"
                                initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Overlay */}
                                    <div 
                                        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                        style={{ backgroundColor: '#00346C' }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                {/* <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url('/ff bg.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                /> */}

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
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
                            How We Work
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

                    {/* Process Steps — original screenshot layout */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {process.map((step, index) => (
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
                                className="relative"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-8">
                                        {/* Number Circle */}
                                        <motion.div 
                                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-xl relative z-10"
                                            style={{ backgroundColor: '#00346C' }}
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            transition={{ 
                                                duration: 0.7, 
                                                delay: index * 0.15 + 0.2,
                                                type: "spring",
                                                stiffness: 120
                                            }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.08, rotate: 5 }}
                                        >
                                            <span className="text-white text-3xl sm:text-4xl font-bold font-body">
                                                {step.number}
                                            </span>
                                        </motion.div>

                                        {/* Curved Dashed Line Connector - Desktop Only */}
                                        {index < process.length - 1 && (
                                            <motion.svg
                                                className="hidden lg:block absolute top-12 left-[calc(50%+56px)] h-16 pointer-events-none"
                                                style={{ width: 'calc(100% + 2rem)' }}
                                                viewBox="0 0 140 60"
                                                preserveAspectRatio="none"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 1 }}
                                                transition={{ 
                                                    duration: 1.2, 
                                                    delay: index * 0.15 + 0.8,
                                                    ease: "easeInOut"
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <defs>
                                                    <marker
                                                        id={`arrowhead-${index}`}
                                                        markerWidth="12"
                                                        markerHeight="12"
                                                        refX="10"
                                                        refY="3.5"
                                                        orient="auto"
                                                    >
                                                        <polygon
                                                            points="0 0, 12 3.5, 0 7"
                                                            fill="#00346C"
                                                        />
                                                    </marker>
                                                </defs>
                                                <motion.path
                                                    d="M 8 30 Q 70 8, 132 30"
                                                    stroke="#00346C"
                                                    strokeWidth="2.5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeDasharray="8,8"
                                                    markerEnd={`url(#arrowhead-${index})`}
                                                />
                                            </motion.svg>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <motion.h3 
                                        className="text-xl sm:text-2xl font-bold text-black mb-4 font-heading px-2 leading-tight"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {step.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p 
                                        className="text-gray-700 text-sm sm:text-base leading-relaxed font-body px-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        {step.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <TechStack/>

            {/* CTA Section */}
            <CtaSection />
        </div>
    );
}
