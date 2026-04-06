"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

export default function TechStack() {
  const [emblaRef1] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })]
  );

  const [emblaRef2] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [AutoScroll({ playOnInit: true, speed: 0.75, direction: 'backward', stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })]
  );

  const row1Technologies = [
    { name: "React", icon: "/stack/react.svg" },
    { name: "Node.js", icon: "/stack/nodejs.svg" },
    { name: "Flutter", icon: "/stack/flutter.webp" },
    { name: "Docker", icon: "/stack/docker.webp" },
    { name: "MongoDB", icon: "/stack/mongodb.svg" },
    { name: "Android", icon: "/stack/Android.webp" },
    { name: "React Native", icon: "/stack/react-native.webp" },
    { name: "MySQL", icon: "/stack/mysql.svg" },
  ];

  const row2Technologies = [
    { name: "iOS", icon: "/stack/ios.webp" },
    { name: "Figma", icon: "/stack/figma.webp" },
    { name: "Git", icon: "/stack/git.webp" },
    { name: "PHP", icon: "/stack/php.svg" },
    { name: "Java", icon: "/stack/Java.webp" },
    { name: "Kubernetes", icon: "/stack/kubernetes.webp" },
    { name: "Jira", icon: "/stack/Jira.webp" },
    { name: "Slack", icon: "/stack/slack.webp" },
  ];

  const TechCard = ({ tech }) => (
    <div className="flex-shrink-0 mx-2 md:mx-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 md:px-7 md:py-4 transition-all duration-300 hover:border-gray-400 hover:shadow-md group">
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
          <Image
            src={tech.icon}
            alt={tech.name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-base md:text-lg font-bold text-gray-800 whitespace-nowrap font-body">
          {tech.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] flex-shrink-0 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="px-5 py-2 border border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black tracking-wide">
                Tech Stack
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-black leading-tight mb-4"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our Technology
              <br />
              <span className="text-black">Stack</span>
            </motion.h2>

            {/* Divider */}
           

            <motion.p
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5 font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We leverage the latest and most powerful technologies to build scalable, high-performance digital solutions tailored to your business needs.
            </motion.p>

            

            {/* Stats row */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                { number: "15+", label: "Technologies" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-3xl font-bold font-heading" >{stat.number}</p>
                  <p className="text-sm text-gray-500 font-body">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Scrolling Rows */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[60%] overflow-hidden space-y-5"
          >
            {/* Row 1 - Left to Right */}
            <div className="relative overflow-hidden py-1">
              <div className="embla" ref={emblaRef1}>
                <div className="embla__container flex">
                  {[...row1Technologies, ...row1Technologies, ...row1Technologies].map((tech, index) => (
                    <div key={`row1-${index}`} className="embla__slide flex-[0_0_auto]">
                      <TechCard tech={tech} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 - Right to Left */}
            <div className="relative overflow-hidden py-1">
              <div className="embla" ref={emblaRef2}>
                <div className="embla__container flex">
                  {[...row2Technologies, ...row2Technologies, ...row2Technologies].map((tech, index) => (
                    <div key={`row2-${index}`} className="embla__slide flex-[0_0_auto]">
                      <TechCard tech={tech} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
