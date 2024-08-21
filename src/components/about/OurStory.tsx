"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../about/useScrollAnimation';

export default function OurStory() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/About.jpg"
            alt="LK Model Zone Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4 text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            LK Model Zone was founded with a passion for showcasing the best talent in the modeling industry. Our journey began in 2020, and since then, we have been dedicated to connecting models, photographers, and clients in a seamless and professional manner.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4 text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            With years of experience in the fashion and photography industries, our team understands the unique challenges and opportunities that come with modeling. We strive to create a platform that not only showcases beautiful imagery but also supports the careers of aspiring and established models alike.
          </motion.p>
        </motion.div>
      </div>
      <motion.hr
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-gray-300 mb-8 mt-8"
      />
    </motion.div>
  );
}
