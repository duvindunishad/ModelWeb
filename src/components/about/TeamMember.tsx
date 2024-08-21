"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../about/useScrollAnimation';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

export default function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="font-semibold"
      >
        {name}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
        className="text-gray-600"
      >
        {role}
      </motion.p>
    </motion.div>
  );
}
