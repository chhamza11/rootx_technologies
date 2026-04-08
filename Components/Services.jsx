"use client";
import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Transform your digital presence with high-performance, scalable websites built using cutting-edge technologies. We create responsive, SEO-optimized web solutions that drive engagement, enhance user experience, and accelerate your business growth in the competitive digital landscape."
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Bring your ideas to life with powerful native and cross-platform mobile applications. Our expert team delivers feature-rich, intuitive apps for iOS and Android that provide exceptional user experiences, seamless performance, and help you connect with your audience wherever they are."
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Elevate your brand with stunning, user-centric designs that captivate and convert. We craft beautiful, intuitive interfaces backed by thorough research and testing, ensuring every interaction delights your users while driving measurable results and strengthening your brand identity."
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Amplify your online presence with data-driven digital marketing strategies tailored to your goals. From SEO and social media to content marketing and paid advertising, we help you reach your target audience, build meaningful connections, and achieve sustainable growth in the digital space."
    }
  ];

  const handleServiceClick = (index) => {
    setActiveService(index);
  };

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          {/* Our Services Badge */}
          <div className="inline-block mb-6">
            <span className="px-6 py-2.5 border-1 border-black rounded-full text-sm font-body font-semibold text-black">
              Our Services
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-black leading-tight">
            Services We Can
            <br />
            Help You With !
          </h2>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:items-stretch md:h-[320px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(index)}
              className={`cursor-pointer transition-all duration-500 ease-in-out overflow-hidden relative ${
                activeService === index
                  ? "flex-1 md:flex-[2.5] text-white rounded-3xl"
                  : "flex-none md:flex-[0.4] text-white hover:opacity-90 rounded-[40px]"
              }`}
              style={{ backgroundColor: '#00346C' }}
            >
              {/* Background Image for Active Card */}
              {activeService === index && (
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `url('/ff bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
              
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                {/* Number and Title - Top Section */}
                <div className="flex-shrink-0">
                  <div className={`flex items-start gap-3 font-body ${activeService === index ? '' : 'justify-start'}`}>
                    <span
                      className={`font-medium transition-all duration-500 text-white ${
                        activeService === index 
                          ? "text-5xl md:text-6xl lg:text-7xl" 
                          : "text-4xl md:text-6xl lg:text-7xl"
                      }`}
                    >
                      {service.id}
                    </span>
                    {/* Title */}
                    <h3
                      className={`font-semibold font-body mt-1 md:mt-2 transition-all duration-500 ${
                        activeService === index 
                          ? "text-2xl md:text-3xl lg:text-4xl opacity-100 block" 
                          : "text-xl opacity-100 block md:opacity-0 md:hidden"
                      }`}
                      style={{ color: '#ffffff' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`flex-shrink-0 mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                    activeService === index
                      ? "max-h-[400px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-base md:text-lg leading-relaxed font-normal mt-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
