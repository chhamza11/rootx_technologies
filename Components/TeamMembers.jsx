"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function TeamMembers() {
    const [showAll, setShowAll] = useState(false);
    const headingRef = useRef(null);

    const teamMembers = [
        { name: "Muhammad Hamza", image: "/team/hamza.png", role: "Project Manager" },
        { name: "Matloob Ali", image: "/team/matloob Ali.png", role: "Head Manager" },
        { name: "Sidra Younas", image: "/team/sidra.png", role: "HR Manager" },
        { name: "Rehan Munsif", image: "/team/rehan-2.png", role: "Sr.ASP.NET Core/MVC Developer" },
        { name: "Ayaz Aslam", image: "/team/ayaz-2.png", role: "Flutter Developer" },
        { name: "Haris Zeeshan", image: "/team/haris-2.png", role: "Web Developer" },
        { name: "Abdul Moiz", image: "/team/moiz-2.png", role: "UI/UX Designer" },
        { name: "Mr. Zeeshan Niazi ", image: "/team/zeehan.png", role: "Chief technology officer (CTO)" },
        { name: "Ali Ahmad  ", image: "/team/ali.png", role: "Business developer" },
    ];

    const handleSeeLess = () => {
        setShowAll(false);
        
        // Smooth scroll to heading
        setTimeout(() => {
            if (headingRef.current) {
                const headerOffset = 100;
                const elementPosition = headingRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                const startPosition = window.pageYOffset;
                const distance = offsetPosition - startPosition;
                const duration = 400;
                let start = null;
                
                const easeInOutCubic = (t) => {
                    return t < 0.5 
                        ? 4 * t * t * t 
                        : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };
                
                const animation = (currentTime) => {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutCubic(progress);
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                };
                
                requestAnimationFrame(animation);
            }
        }, 50);
    };

    return (
        <section id="team-section" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div ref={headingRef} className="mb-12 md:mb-16">
                    {/* Our Team Badge */}
                    <div className="inline-block mb-4 sm:mb-6">
                        <span className="px-4 sm:px-6 py-2 sm:py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black transition-all duration-300">
                            Our Team
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-black leading-tight">
                       Meet Our Team Members!
                    </h2>
                </div>

                {/* First 3 Members - Always Visible */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-6">
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl"
                            style={{
                                borderTopRightRadius: '2.5rem',
                                borderBottomLeftRadius: '2.5rem',
                                borderTopLeftRadius: '0',
                                borderBottomRightRadius: '0',
                                aspectRatio: '3/4'
                            }}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />

                            {/* Blue Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-blue-900/70 via-blue-900/80 to-transparent" />

                            {/* Name and Role */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 uppercase tracking-wide text-white">
                                    {member.name}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Remaining Members - Expandable (Like Navbar Mobile Menu) */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        showAll ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-6">
                        {teamMembers.slice(3).map((member, index) => (
                            <div
                                key={index + 3}
                                className={`group relative overflow-hidden shadow-xl transition-all duration-500 ease-in-out transform ${
                                    showAll 
                                        ? "translate-y-0 opacity-100" 
                                        : "translate-y-4 opacity-0"
                                }`}
                                style={{
                                    borderTopRightRadius: '2.5rem',
                                    borderBottomLeftRadius: '2.5rem',
                                    borderTopLeftRadius: '0',
                                    borderBottomRightRadius: '0',
                                    aspectRatio: '3/4',
                                    transitionDelay: showAll ? `${index * 80}ms` : '0ms'
                                }}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                {/* Blue Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-blue-900/70 via-blue-900/80 to-transparent" />

                                {/* Name and Role */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 uppercase tracking-wide text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-white/90 text-sm md:text-base font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center mt-6">
                    {!showAll ? (
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-white px-10 py-3 rounded-full cursor-pointer   font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body hover:scale-105 transform"
                            style={{ backgroundColor: '#00346C' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
                        >
                            See More
                        </button>
                    ) : (
                        <button
                            onClick={handleSeeLess}
                            className="text-white px-10 py-3 rounded-full cursor-pointer  font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body hover:scale-105 transform"
                            style={{ backgroundColor: '#00346C' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
                        >
                            See Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
