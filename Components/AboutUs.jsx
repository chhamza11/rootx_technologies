"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
    const sectionRef = useRef(null);
    const borderRef = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    const labelRef = useRef(null);
    const titleRef = useRef(null);
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);
    const para3Ref = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Images animation
            gsap.from(borderRef.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(image1Ref.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(image2Ref.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(image3Ref.current, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            // Text animations
            gsap.from(labelRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(titleRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(para1Ref.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(para2Ref.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(para3Ref.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(buttonRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-white py-16 sm:py-20 lg:py-28 overflow-hidden"
        >
           

            {/* Large Background Watermark */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-[0.02] pointer-events-none">
                <div className="text-[20rem] sm:text-[25rem] lg:text-[30rem] font-black text-blue-700">
                    ABOUT
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
                    {/* Left Side - Images Grid */}
                    <div className="relative">
                        <div className="relative">
                            {/* Blue Border Frame */}
                            <div
                                ref={borderRef}
                                className="absolute -inset-4 border-4 rounded-lg shadow-xl"
                                style={{
                                    borderColor: "#00346C",
                                    clipPath:
                                        "polygon(0 0, 30% 0, 30% 4px, 4px 4px, 4px 30%, 0 30%, 0 100%, 100% 100%, 100% 70%, calc(100% - 4px) 70%, calc(100% - 4px) calc(100% - 4px), 70% calc(100% - 4px), 70% 100%, 0 100%)",
                                }}
                            ></div>

                            {/* Images Grid */}
                            <div className="relative grid grid-cols-2 gap-4">
                                {/* Top Left - Large Image */}
                                <div className="col-span-2 row-span-1">
                                    <div
                                        ref={image1Ref}
                                        className="relative h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-2xl group border border-blue-400"
                                    >
                                        <Image
                                            src="/team work.png"
                                            alt="RootX Technologies Team"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Bottom Left */}
                                <div
                                    ref={image2Ref}
                                    className="relative h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden shadow-2xl group border border-blue-400"
                                >
                                    <Image
                                        src="/team work 1.png"
                                        alt="Mobile App Development"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                                </div>

                                {/* Bottom Right */}
                                <div
                                    ref={image3Ref}
                                    className="relative h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden shadow-2xl group border border-blue-400"
                                >
                                    <Image
                                        src="/team work 2.png"
                                        alt="Web Development"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-4">
                        {/* Small Label */}
                        <div ref={labelRef}>
                            <div className="mb-4">
                                <span
                                    className="px-6 py-2.5 border-1 border-black rounded-full text-sm font-body font-semibold text-black"
                                    
                                >
                                    OUR STORY
                                </span>
                            </div>
                        </div>

                        {/* Main Title */}
                        <div ref={titleRef}>
                            <h2
                                className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-black leading-tight"
                                
                            >
                                ABOUT{" "}
                                <span className="font-light text-black font-body ">
                                    ROOTX TECHNOLOGIES
                                </span>
                            </h2>
                        </div>

                        {/* Description Paragraphs */}
                        <div className="space-y-6 text-black leading-relaxed">
                            <p ref={para1Ref} className="text-sm sm:text-base font-body ">
                                We are a leading software house specializing in cutting-edge mobile
                                app and web development solutions.
                            </p>
                            <p ref={para2Ref} className="text-sm sm:text-base">
                                At RootX Technologies, we transform innovative ideas into powerful
                                digital experiences. Our expert team delivers high-performance mobile
                                applications and responsive web platforms that drive business growth
                                and user engagement.
                            </p>
                            <p ref={para3Ref} className="text-sm sm:text-base">
                                With a passion for technology and a commitment to excellence, we
                                combine creative design with robust development practices. From
                                concept to deployment, we partner with businesses to build scalable,
                                user-friendly solutions that stand out in today's competitive digital
                                landscape.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div ref={buttonRef} className="mt-8">
                            <Link href="/about">
                                <button
                                    className="group relative text-white px-8 py-4 rounded-full text-base font-semibold transform transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 overflow-hidden inline-flex items-center gap-3"
                                    style={{
                                        background: "linear-gradient(to right, #00346C, #002a57)",
                                    }}
                                >
                                    <span className="relative z-10">Learn More Now</span>
                                    <FaArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
