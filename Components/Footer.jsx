"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-8 sm:pt-10 md:pt-12 pb-4 px-4 sm:px-6 lg:px-8">
      {/* Centered Footer Container with Rounded Corners */}
      <div className="relative max-w-6xl mx-auto bg-blue-950 rounded-3xl sm:rounded-[3rem] text-white py-8 sm:py-10 md:py-12 px-6 sm:px-8 lg:px-12 shadow-2xl">
        {/* Top Section - Logo on Left, Social Icons on Right */}
        <div className="flex justify-between items-center mb-8 sm:mb-10">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-5.png"
              alt="RootX Technologies"
              width={200}
              height={60}
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/rootxtechnologies1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-950 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/rootx-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-950 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rootx_technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-950 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white mb-6 sm:mb-8"></div>

        {/* Middle Section - Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 text-left sm:text-left">
          {/* Phone */}
          <div className="flex items-center justify-start sm:justify-start gap-3 group">
            <div className="flex-shrink-0">
              <svg 
                className="w-5 h-5 text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            <Link 
              href="tel:+923355123111" 
              className="text-sm sm:text-base font-body font-medium text-white  transition-colors duration-300"
            >
              +92-335-5123 111
            </Link>
          </div>

          {/* Address */}
          <div className="flex items-center justify-start sm:justify-center gap-2 group">
            <div className="flex-shrink-0">
              <svg 
                className="w-5 h-5 text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>
            <p className="text-sm sm:text-base text-white font-body  transition-colors duration-300">
              Office M8, 1st Floor, City Star Plaza, Lahore
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-start sm:justify-end gap-3 group">
            <div className="flex-shrink-0">
              <svg 
                className="w-5 h-5 text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <Link 
              href="mailto:info@rootxtechnologies.com" 
              className="text-sm sm:text-base text-white transition-colors duration-300"
            >
              info@rootxtechnologies.com
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white mb-6 sm:mb-8"></div>

        {/* Bottom Section - Copyright & Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
          {/* Copyright */}
          <p className="text-white font-medium font-body text-left sm:text-left">
            © 2026 RootX Technologies. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6 sm:gap-8">
            <Link 
              href="/terms" 
              className="text-white font-semibold font-body hover:text-white transition-colors duration-300 hover:underline"
            >
              Terms & Condition
            </Link>
            <Link 
              href="/privacy" 
              className="text-white font-semibold font-body hover:text-white transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
