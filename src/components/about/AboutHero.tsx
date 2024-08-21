"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-lk-blue-600"
      >
        About LK Model Zone
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-24 h-1 bg-lk-blue-300 rounded-lg mx-auto mb-8"
      />
    </motion.div>
  );
}
