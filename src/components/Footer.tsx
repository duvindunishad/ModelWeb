import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#363636] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <h3 className="font-bold mb-4">INFORMATION</h3>
    <ul className="space-y-2">
      <li>About Us</li>
      <li>Latest Update photoshoots</li>
      <li>Event</li>
      <li>Help Center</li>
    </ul>
          </div>
          <div>
          <h3 className="font-bold mb-4">OUR SERVICES</h3>
    <ul className="space-y-2">
      <li>Model Bank</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Help Center</li>
    </ul>
          </div>
          <div>
          <h3 className="font-bold mb-4">LEGAL</h3>
    <ul className="space-y-2">
      <li>FAQ</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Help Center</li>
    </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-white hover:text-pink-400"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-blue-400"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4">
        <p className="text-sm">
          Copyright © 2024 LK Model Zone. All rights reserved. Designed and
          Developed by
          <a href="#" className="text-yellow-400 ml-1">
            LK Model Zone Team
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
