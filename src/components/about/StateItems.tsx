"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';

interface StatItemProps {
  count: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ count, label, delay, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
    transition={{ duration: 0.5, delay }}
    className="text-center p-4"
  >
    <motion.p
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: delay + 0.2 }}
      className="text-4xl font-bold text-gray-600"
    >
      {count}
    </motion.p>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: delay + 0.4 }}
      className="text-gray-600 mt-2"
    >
      {label}
    </motion.p>
  </motion.div>
);

const StatisticsDisplay: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    { count: "800+", label: "Modeling, Creative & Production Agencies" },
    { count: "3,000+", label: "Brands & Magazines Professionals" },
    { count: "30,000+", label: "Accredited Models & Artists" },
    { count: "1.1m+", label: "Monthly Visitors" },
    { count: "2m+", label: "Social Followers" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 mt-5"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-lk-blue-600"
        >
          Our Reach
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-1 bg-lk-blue-300 rounded-lg mx-auto mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} count={stat.count} label={stat.label} delay={0.2 * index} isVisible={isVisible} />
          ))}
        </div>
      </div>
      <motion.hr
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="border-gray-300 mt-8"
      />
    </motion.section>
  );
};

export default StatisticsDisplay;
