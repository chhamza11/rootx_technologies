"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav className="relative bg-white border-b border-gray-200 font-navbar">
      {/* Background Image Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-22">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10 flex items-center gap-1">
            <Image
              src="/logo1.png"
              alt="RootX Technologies"
              width={100}
              height={100}
              className="h-44 w-44 md:h-55 md:w-55"
              priority
            />
            {/* <div className="flex flex-col leading-none">
              <span className="text-2xl md:text-4xl font-bold text-[#0f3460]">RootX</span>
              <span className="text-sm  text-gray-900 tracking-[0.3em] font-semibold mt-1">TECHNOLOGIES</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-blue-600 font-medium transition-all duration-300 text-sm lg:text-lg relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/Contact"
              className="text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-200 text-sm lg:text-base font-body"
              style={{ backgroundColor: '#00346C' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-10 p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200">
          {/* Background Image for Mobile Menu */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url('/bg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="relative space-y-2">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  href={link.href}
                  className={`block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-bold transition-all duration-300 transform ${
                    isMenuOpen 
                      ? "translate-x-0 opacity-100" 
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <Link
              href="/Contact"
              className={`block text-center text-white px-4 py-3 rounded-full font-bold transition-all duration-300 mt-4 transform font-body ${
                isMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-4 opacity-0"
              }`}
              style={{ 
                backgroundColor: '#00346C',
                transitionDelay: isMenuOpen ? `${navLinks.length * 50}ms` : '0ms'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
