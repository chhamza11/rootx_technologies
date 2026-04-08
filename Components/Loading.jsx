"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loading() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out animation
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 1500);

        return () => clearTimeout(fadeTimer);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Main Loading Content */}
            <div className="flex flex-col items-center justify-center">
                {/* Logo with Rotating Circle - Top Middle */}
                <div className="relative flex items-center justify-center mb-12">
                    {/* Rotating Circle */}
                    <div
                        className="absolute w-28 h-28 sm:w-36 sm:h-36 border-[3px] border-transparent rounded-full animate-spin"
                        style={{
                            borderTopColor: '#00346C',
                            borderRightColor: '#00346C',
                            animationDuration: '1s'
                        }}
                    ></div>

                    {/* Logo */}
                    <div className="relative w-14 h-14 sm:w-18 sm:h-18">
                        <Image
                            src="/logo-3.png"
                            alt="RootX Technologies"
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 56px, 72px"
                            priority
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}
