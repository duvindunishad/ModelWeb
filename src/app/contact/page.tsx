"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-blue-500 relative overflow-hidden"
      style={{ backgroundColor: "#3b82f6" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 bg-gray-100"
        style={{ height: "30%" }}
      ></div>
      <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-screen">
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
            className="text-3xl md:text-4xl font-bold mb-6 text-lk-blue-50"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-24 h-1 bg-lk-blue-100 rounded-lg mx-auto mb-8"
          />
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-lk-blue-600"
        >
          <p className="text-xl text-white mb-12 text-center max-w-3xl mx-auto">
            We&apos;d love to hear from you! Whether you have a question about
            our services, need support, or just want to say hello, use the form
            below to send us a message. We&apos;ll get back to you as soon as
            possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row"
        >
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-2/3 p-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Send us a Message
            </h2>
            <form action="#" method="POST" className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                />
              </div>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0066FF] resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-1/3 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                MESSAGE
              </motion.button>
            </form>
          </div>
          {/* Right Side: Contact Info */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-between rounded-r-lg shadow-lg">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <FaPhoneAlt className="mr-3 text-blue-300" />
                  <span>
                    <strong>Hotline:</strong> 076 760 1577
                    <br />
                    <span className="text-sm text-blue-200">
                      (Viber & WhatsApp available)
                    </span>
                  </span>
                </li>
                <li className="flex items-center text-white">
                  <FaEnvelope className="mr-3 text-blue-300" />
                  <span>
                    <strong>Email:</strong> modelsend@gmail.com
                  </span>
                </li>
                <li className="flex items-center text-white">
                  <MdLocationOn className="mr-3 text-blue-300 text-xl" />
                  <span>
                    <strong>Address:</strong> 123 Model Street,
                    <br />
                    Colombo 01, Sri Lanka
                  </span>
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/lkmodelzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 hover:scale-110 transition-colors duration-300 border-2 border-lk-blue-200"
                >
                  <FaFacebookF className="text-white" />
                </a>
                <a
                  href="https://www.twitter.com/lkmodelzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 p-2 rounded-full hover:bg-blue-300 hover:scale-110 transition-colors duration-300 border-2 border-lk-blue-200"
                >
                  <FaTwitter className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-colors duration-300 border-2 border-lk-blue-200"
                >
                  <FaInstagram className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 hover:scale-110 transition-colors duration-300 border-2 border-lk-blue-200"
                >
                  <FaLinkedinIn className="text-white" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
