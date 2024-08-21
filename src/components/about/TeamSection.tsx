"use client";

import React from "react";
import { motion } from "framer-motion";
import TeamMember from "./TeamMember";

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: "/Team1.jpg" },
  { name: "Jane Smith", role: "Creative Director", image: "/Team2.jpg" },
  { name: "Mike Johnson", role: "Lead Photographer", image: "/Team3.jpg" },
  { name: "Sarah Brown", role: "Marketing Manager", image: "/Team4.jpg" },
];

const MotionTeamMember = motion(TeamMember);

export default function TeamSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-lk-blue-600"
      >
        Meet Our Team
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-1 bg-lk-blue-300 rounded-lg mx-auto mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-lk-blue-600">
        {teamMembers.map((member, index) => (
          <MotionTeamMember
            key={index}
            {...member}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          />
        ))}
      </div>
    </motion.div>
  );
}
