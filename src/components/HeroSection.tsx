import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/vinu.jpg",
  "/nethmi.jpg",
  // Add more images as needed
];

const descriptions = [
  {
    title: "Vinu Udani Siriwardana",
    content:
      "Vinu Udani Siriwardana is a Sri Lankan actress, model, and TV presenter. In 2012 she participated in the 'Derana Veet Miss Sri Lanka for Miss World 2012' pageant and succeeded in becoming the joint winner for the title 'Derana Veet Miss Sri Lanka for Miss World 2012' with Sumudu Prasadini.",
    author: "Mahen Muditha",
    date: "October 12, 2023",
  },
  {
    title: "Nethmi Poornima",
    content:
      "Nethmi Poornima is a rising star in the Sri Lankan modeling industry. Known for her elegant poise and versatile looks, she has quickly become a favorite among fashion designers and photographers alike.",
    author: "Lakshitha Edirisinghe",
    date: "November 15, 2023",
  },
  // Add more descriptions as needed
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="w-full bg-gray-100 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-0">
        {/* Left Section: Image Slideshow */}
        <div className="bg-gray-100 flex items-center justify-center overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="object-cover w-full h-full"
                width={1280}
                height={500}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
        </div>

        {/* Right Section: Text */}
        <div className="bg-blue-500 flex items-center justify-center p-8 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:w-[90%] sm:text-center lg:text-justify">
                <h1 className="text-5xl font-bold mb-4 text-white">
                  {descriptions[currentIndex].title}
                </h1>
                <h5 className="text-2xl mb-4 text-white text-justify">
                  {descriptions[currentIndex].content}
                </h5>
                <p className="text-lg text-lk-blue-100">
                  By {descriptions[currentIndex].author}
                </p>
                <p className="text-lg text-lk-blue-100">
                  {descriptions[currentIndex].date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full"
        >
          <FaChevronLeft className="text-blue-500 text-2xl" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full"
        >
          <FaChevronRight className="text-blue-500 text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
