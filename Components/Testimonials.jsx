"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const autoPlayRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Ahmed Hassan",
            role: "CEO, Tech Innovations",
            image: "/test-1.avif",
            rating: 5,
            text: "RootX Technologies transformed our digital presence with their exceptional web development services. Their team's expertise and dedication exceeded our expectations.",
        },
        {
            id: 2,
            name: "Muhammad Ali",
            role: "Product Manager, StartupHub",
            image: "/test-2.avif",
            rating: 5,
            text: "Working with RootX was a game-changer for our mobile app project. They delivered a high-performance solution that our users love. Highly recommended!",
        },
        {
            id: 3,
            name: "Ahsan Rehan",
            role: "Marketing Director, GrowthCo",
            image: "/test-5.avif",
            rating: 5,
            text: "The professionalism and technical skills of RootX Technologies are outstanding. They completed our project on time and within budget. ",
        },
        {
            id: 4,
            name: "Fatima Khan",
            role: "Founder, Digital Solutions",
            image: "/test-4.avif",
            rating: 4,
            text: "RootX Technologies provided innovative solutions that helped scale our business. Their attention to detail and commitment to quality is remarkable.",
        },
    ];

    // Auto-play functionality
    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            handleNext();
        }, 4000); // 3 seconds

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Get previous and next indices for side images
    const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length;
    const getNextIndex = () => (currentIndex + 1) % testimonials.length;

    return (
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-white">
            {/* Background Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.01]"
                style={{
                    backgroundImage: `url('/bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-6 py-2.5 border-1 border-black rounded-full text-sm font-body font-semibold text-black ">
                            TESTIMONIAL
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-4 mb-4 font-heading">
                            What Our Clients Say
                        </h2>
                        <p className="text-black text-base sm:text-lg max-w-2xl mx-auto font-body">
                            Our clients trust us to power their digital transformation and deliver exceptional results
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative  max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute hidden lg:block sm:-left-6 top-1/3 sm:top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-4 z-30 bg-white/90 backdrop-blur-sm text-gray-800 p-3 sm:p-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 border border-gray-200 shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 hidden lg:block  top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-30 bg-white/90 backdrop-blur-sm text-gray-800 p-3 sm:p-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110 border border-gray-200 shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    {/* Main Content - Images Left, Text Right */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left Side - Images with In-Place Animation */}
                        <div className="relative w-full lg:w-1/2 flex items-center justify-center overflow-hidden px-2">
                            <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 w-full max-w-[320px] sm:max-w-sm md:max-w-md mx-auto">
                                {/* Left Position - Grayscale & Smaller */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`left-${getPrevIndex()}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 0.4, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-[22vw] h-[30vw] max-w-[96px] max-h-[128px] sm:w-32 sm:h-40 md:w-36 md:h-44 rounded-2xl overflow-hidden grayscale flex-shrink-0"
                                    >
                                        <Image
                                            src={testimonials[getPrevIndex()].image}
                                            alt={testimonials[getPrevIndex()].name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 22vw, 150px"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Center Position - Full Color & Larger */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`center-${currentIndex}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-[32vw] h-[44vw] max-w-[160px] max-h-[208px] sm:w-48 sm:h-60 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-950 z-10 flex-shrink-0"
                                    >
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 32vw, 250px"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Right Position - Grayscale & Smaller */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`right-${getNextIndex()}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 0.4, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-[22vw] h-[30vw] max-w-[96px] max-h-[128px] sm:w-32 sm:h-40 md:w-36 md:h-44 rounded-2xl overflow-hidden grayscale flex-shrink-0"
                                    >
                                        <Image
                                            src={testimonials[getNextIndex()].image}
                                            alt={testimonials[getNextIndex()].name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 22vw, 150px"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="w-full lg:w-1/2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-left"
                                >
                                    {/* Quote Icon */}
                                    <div className="mb-6">
                                        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-950" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-black text-base  sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-body">
                                        {testimonials[currentIndex].text}
                                    </p>

                                    {/* Client Name */}
                                    <h4 className="text-blue-950 text-xl sm:text-2xl font-bold mb-2 font-body">
                                        {testimonials[currentIndex].name}
                                    </h4>

                                    {/* Client Role */}
                                    <p className="text-blue-950 text-sm sm:text-base mb-4  font-body">
                                        {testimonials[currentIndex].role}
                                    </p>

                                    {/* Rating Stars */}
                                    <div className="flex gap-1">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <FaStar key={i} className="w-5 h-5 text-blue-950" />
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? "w-10 h-3 bg-blue-950"
                                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
