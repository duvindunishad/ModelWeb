"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../about/useScrollAnimation";

export default function OurServices() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="mt-5 bg-gradient-to-r py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-lk-blue-600"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-lk-blue-300 rounded-lg mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-center text-gray-700 leading-relaxed mb-12"
          >
            At LK Model Zone, we offer a comprehensive range of services to
            support models and industry professionals. Our key services include:
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row items-start justify-between gap-12"
          >
            <motion.ul className="space-y-6 text-gray-700 md:w-1/2">
              <ServiceItem delay={0.8} isVisible={isVisible}>
                Professional photoshoot coordination and management
              </ServiceItem>
              <ServiceItem delay={1.0} isVisible={isVisible}>
                Model portfolio development and optimization
              </ServiceItem>
              <ServiceItem delay={1.2} isVisible={isVisible}>
                Casting calls and job opportunity notifications
              </ServiceItem>
              <ServiceItem delay={1.4} isVisible={isVisible}>
                Industry networking events and workshops
              </ServiceItem>
              <ServiceItem delay={1.6} isVisible={isVisible}>
                Career guidance and mentorship programs
              </ServiceItem>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="md:w-1/2 flex justify-center items-center"
            >
              <Image
                src="/Services.jpg" // Replace with your actual image path
                alt="Our Services for the Modeling Industry"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.hr
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="border-gray-300 mt-12"
      />
    </motion.section>
  );
}

function ServiceItem({
  children,
  delay,
  isVisible,
}: {
  children: React.ReactNode;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start space-x-3"
    >
      <motion.svg
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2, delay: delay + 0.1 }}
        className="flex-shrink-0 w-5 h-5 text-lk-blue-300 mt-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </motion.svg>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {children}
      </motion.span>
    </motion.li>
  );
}
