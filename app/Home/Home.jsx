"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutUs from "@/Components/AboutUs";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
import TechStack from "@/Components/TechStack";
import TeamMembers from "@/Components/TeamMembers";
import Testimonials from "@/Components/Testimonials";
import ContactUs from "@/Components/ContactUs";

export default function Home() {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
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

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Build Innovative
              <br />
              <span className="text-black">Tech Innovation</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto mb-10 leading-relaxed font-normal px-4 font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional software house specializing in custom web development and mobile
              app solutions. We transform your ideas into powerful digital products with
              cutting-edge technology and expert craftsmanship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-row items-center justify-center gap-3 sm:gap-6 mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/Contact"
                  className="w-38 sm:w-48 text-center text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-lg shadow-lg hover:shadow-xl font-body inline-block"
                  style={{ backgroundColor: '#00346C' }}
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  className="w-38 sm:w-48 text-center bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold border-2 border-black transition-all duration-300 text-sm sm:text-lg shadow-md hover:shadow-lg font-body inline-block"
                  style={{ backgroundColor: '#ffffff' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00346C';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#00346C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#000000';
                    e.currentTarget.style.borderColor = '#000000';
                  }}
                >
                  Our Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Download PDF Button - Bottom Right */}
        <motion.div 
          className="absolute bottom-8 right-8 z-10 hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/download-pdf"
              className="flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 font-body"
              style={{ 
                backgroundColor: '#00346C',
                boxShadow: '0 0 20px rgba(0, 52, 108, 0.5)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 52, 108, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 52, 108, 0.5)'}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              Download PDF
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Download PDF Button */}
        {/* <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 md:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/download-pdf"
              className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-bold transition-all duration-300 text-sm font-body"
              style={{ 
                backgroundColor: '#00346C',
                boxShadow: '0 0 15px rgba(0, 52, 108, 0.5)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 52, 108, 0.8)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 52, 108, 0.5)'}
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              Download PDF
            </Link>
          </motion.div>
        </motion.div> */}
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Team Members Section */}
      <TeamMembers />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
}
