"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative w-full text-white py-10 sm:py-12 md:py-14 px-6 sm:px-10 lg:px-16 overflow-hidden" style={{ backgroundColor: '#00346C' }}>

      {/* Top-left circular glow */}
      <div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgba(255,255,255,0.22)',
          filter: 'blur(90px)',
        }}
      />

      {/* Bottom-right circular glow */}
      <div
        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgba(255,255,255,0.22)',
          filter: 'blur(120px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Grid - 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10 sm:mb-12">

          {/* Column 1 - Logo + Contact Info */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div>
              <Image
                src="/New Logo White.png"
                alt="RootX Technologies"
                width={180}
                height={55}
                className="h-12 sm:h-14 w-auto"
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-2">
              {/* Phone */}
              <a href="tel:+923355123111" className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300 group">
                <svg className="w-4 h-4 flex-shrink-0 text-white group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm sm:text-base font-body">+92-335-5123 111</span>
              </a>

              {/* Email */}
              <a href="mailto:info@rootxtechnologies.com" className="flex items-center gap-3 text-white hover:text-white transition-colors duration-300 group">
                <svg className="w-4 h-4 flex-shrink-0 text-white group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base font-body">info@rootxtechnologies.com</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-white">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base font-body">Office M8, 1st Floor, City Star Plaza, Lahore</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col  gap-4 md:mx-25">
            <h3 className="text-white text-left" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: '22.4px', letterSpacing: '0px' }}>Quick Links</h3>
            <nav className="flex flex-col gap-3 text-center items-start">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-base text-white font-body transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Newsletter + Social */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: '22.4px', letterSpacing: '0px' }}>Subscribe to News Letter</h3>

            {/* Email Input + Button */}
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                required
                className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm font-body focus:outline-none focus:border-white/50 transition-colors duration-300"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-5 py-2.5 bg-white text-black rounded-full text- font-semibold cursor-pointer font-body  transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/rootxtechnologies1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
              >
                <svg className="w-4 h-4 text-white group-hover:text-blue-950 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rootx_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
              >
                <svg className="w-4 h-4 text-white group-hover:text-blue-950 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/rootx-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
              >
                <svg className="w-4 h-4 text-white group-hover:text-blue-950 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-white text-md font-body">
            © 2026 RootX Technologies. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 justify-start">
            <Link href="/terms" className="text-white hover:text-white text-md font-semibold font-body transition-colors duration-300 hover:underline">
              Terms & Condition
            </Link>
            <Link href="/privacy" className="text-white hover:text-white text-md font-semibold font-body transition-colors duration-300 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>  );
}
