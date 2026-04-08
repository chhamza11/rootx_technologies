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
        { name: "Mr. Zeeshan Niazi", image: "/team/zeehan.png", role: "Chief technology officer (CTO)" },
        { name: "Ali Ahmad", image: "/team/ali.png", role: "Business developer" },
    ];

    const handleSeeLess = () => {
        setShowAll(false);
        setTimeout(() => {
            if (headingRef.current) {
                const headerOffset = 100;
                const elementPosition = headingRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                const startPosition = window.pageYOffset;
                const distance = offsetPosition - startPosition;
                const duration = 400;
                let start = null;
                const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                const animation = (currentTime) => {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                };
                requestAnimationFrame(animation);
            }
        }, 50);
    };

    const MemberCard = ({ member }) => (
        <div
            className="relative overflow-hidden shadow-xl hover:shadow-2xl"
            style={{
                borderTopRightRadius: '2.5rem',
                borderBottomLeftRadius: '2.5rem',
                borderTopLeftRadius: '0',
                borderBottomRightRadius: '0',
                aspectRatio: '3/4',
                width: '280px',
                flexShrink: 0,
            }}
        >
            <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="280px"
            />
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-blue-900/70 via-blue-900/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-base md:text-xl font-bold mb-1 uppercase tracking-wide text-white">
                    {member.name}
                </h3>
                <p className="text-white/90 text-xs md:text-sm font-medium">
                    {member.role}
                </p>
            </div>
        </div>
    );

    // Duplicate for seamless loop
    const loopItems = [...teamMembers, ...teamMembers];

    // card width + gap = 280 + 24 = 304px per card
    // total width of one set = 9 * 304 = 2736px
    const totalWidth = teamMembers.length * 304;

    return (
        <section id="team-section" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            {/* CSS keyframe for smooth infinite scroll */}
            <style>{`
                @keyframes teamScroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-${totalWidth}px); }
                }
                .team-track {
                    display: flex;
                    gap: 24px;
                    width: max-content;
                    will-change: transform;
                    animation: teamScroll ${teamMembers.length * 3}s linear infinite;
                }
                .team-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div ref={headingRef} className="mb-12 md:mb-16">
                    <div className="inline-block mb-4 sm:mb-6">
                        <span className="px-4 sm:px-6 py-2 sm:py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black transition-all duration-300">
                            Our Team
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-black leading-tight">
                        Meet Our Team Members!
                    </h2>
                </div>

                {/* MOBILE: pure 2-col grid */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {teamMembers.slice(0, 4).map((member, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden shadow-xl"
                                style={{
                                    borderTopRightRadius: '2.5rem',
                                    borderBottomLeftRadius: '2.5rem',
                                    borderTopLeftRadius: '0',
                                    borderBottomRightRadius: '0',
                                    aspectRatio: '3/4',
                                }}
                            >
                                <Image src={member.image} alt={member.name} fill className="object-cover"
                                    sizes="50vw" />
                                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-blue-900/70 via-blue-900/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                                    <h3 className="text-xs font-bold mb-0.5 uppercase tracking-wide text-white">{member.name}</h3>
                                    <p className="text-white/90 text-xs font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Expandable remaining members - same animation as navbar mobile menu */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAll ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {teamMembers.slice(4).map((member, index) => (
                                <div
                                    key={index + 4}
                                    className={`relative overflow-hidden shadow-xl transition-all duration-500 ease-in-out transform ${showAll ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                                    style={{
                                        borderTopRightRadius: '2.5rem',
                                        borderBottomLeftRadius: '2.5rem',
                                        borderTopLeftRadius: '0',
                                        borderBottomRightRadius: '0',
                                        aspectRatio: '3/4',
                                        transitionDelay: showAll ? `${index * 60}ms` : '0ms'
                                    }}
                                >
                                    <Image src={member.image} alt={member.name} fill className="object-cover"
                                        sizes="50vw" />
                                    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-blue-900/70 via-blue-900/80 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                                        <h3 className="text-xs font-bold mb-0.5 uppercase tracking-wide text-white">{member.name}</h3>
                                        <p className="text-white/90 text-xs font-medium">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DESKTOP: pure CSS infinite scroll */}
                <div className="hidden md:block overflow-hidden mb-8">
                    <div className="team-track">
                        {loopItems.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>

                {/* Buttons - mobile only */}
                <div className="flex justify-center mt-6 md:hidden">
                    {!showAll ? (
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-white px-10 py-3 rounded-full cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body hover:scale-105 transform"
                            style={{ backgroundColor: '#00346C' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
                        >
                            See More
                        </button>
                    ) : (
                        <button
                            onClick={handleSeeLess}
                            className="text-white px-10 py-3 rounded-full cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body hover:scale-105 transform"
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
