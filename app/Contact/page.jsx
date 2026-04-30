"use client";
import ContactUs from "@/Components/ContactUs";
import CtaSection from "@/Components/CtaSection";
import HeroBackground from "@/Components/HeroBackground";
import { motion } from "framer-motion";

export default function ContactPage() {

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
                                Contact Us
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight font-heading"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Get In Touch
                            <br />
                            <span className="text-black">With Us</span>
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-normal px-4 font-body"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Have a project in mind or need assistance? We're here to help. Reach out to us and let's start building something amazing together.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Customer Support Section */}
            <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">


                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Section Header */}
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
                                Customer Support
                            </span>
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 font-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            We're Here to Help
                        </motion.h2>
                        <motion.p
                            className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto font-body"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Our dedicated support team is available to assist you with any questions or concerns.
                        </motion.p>
                    </motion.div>

                    {/* Support Options Grid */}

                    {/* Bottom Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                title: "Quick Response",
                                description: "Average response time less than 2 hours"
                            },
                            {
                                icon: (
                                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: "Expert Team",
                                description: "Dedicated professionals ready to assist you"
                            },
                            {
                                icon: (
                                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "24/7 Available",
                                description: "Round-the-clock support for your convenience"
                            }
                        ].map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1 + 0.3,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-gray-50 p-6 sm:p-8 rounded-2xl text-center"
                            >
                                {/* Icon */}
                                <motion.div
                                    className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: '#00346C' }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 text-white">
                                        {info.icon}
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <h4 className="text-lg sm:text-xl font-bold text-black mb-2 font-heading">
                                    {info.title}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-700 text-sm sm:text-base font-body">
                                    {info.description}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>
            
            <ContactUs />
            <CtaSection />

            <div className="relative mt-10 mb-2 w-full h-[200px] sm:h-[300px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.1789133873244!2d74.3147377!3d31.464264200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a961f801cb%3A0xb80393383235653f!2sRootX%20Technologies!5e0!3m2!1sen!2s!4v1772734846150!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RootX Technologies Location"
                />
            </div>

            


        </div>
    );
}
