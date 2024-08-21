"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LK from "../../public/LKblack.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getActiveStyle = (path: string) => {
    return pathname === path
      ? "border border-blue-500 text-blue-500 px-4 py-2 hover:bg-blue-50 rounded-md flex items-center transition duration-300 ease-in-out"
      : "text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out";
  };

  return (
    <div className="bg-gray-100">
      <nav className="py-4 px-6">
        <header className="font-['Concert_One',_cursive]">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-52 py-4">
            <div className="flex items-center justify-between">
              {/* Left Navigation (hidden on mobile) */}
              <nav className="hidden md:flex space-x-8 items-center">
                <Link href="/" className={getActiveStyle("/")}>
                  Home
                </Link>
                <Link href="/about" className={getActiveStyle("/about")}>
                  About
                </Link>
                <Link href="/contact" className={getActiveStyle("/contact")}>
                  Contact
                </Link>
              </nav>

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src={LK}
                  alt="LK"
                  className="object-cover w-full h-auto"
                  width={100}
                  height={50}
                />
              </Link>

              {/* Right Navigation (hidden on mobile) */}
              <nav className="hidden md:flex space-x-8 items-center z-1000">
                <div className="relative group">
                  <button className="text-gray-600 hover:text-gray-800 flex items-center transition duration-300 ease-in-out">
                    Model Photoshoots
                    <svg
                      className="w-4 h-4 ml-1 transition duration-300 ease-in-out"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute hidden pt-2 group-hover:block transition-all duration-300 ease-in-out z-20">
                    <div className="w-40 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
                      <Link
                        href="/model-banks"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 ease-in-out"
                      >
                        Model Banks
                      </Link>
                      <Link
                        href="/beautician"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 ease-in-out"
                      >
                        Beautician
                      </Link>
                      <Link
                        href="/events"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 ease-in-out"
                      >
                        Events
                      </Link>
                      <Link
                        href="/photographers"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300 ease-in-out"
                      >
                        Photographers
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/events" className={getActiveStyle("/events")}>
                  Events
                </Link>
                <Link
                  href="/photographers"
                  className={getActiveStyle("/photographers")}
                >
                  Photographers
                </Link>
              </nav>

              {/* Hamburger menu for mobile */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6 stroke-blue-500 transition duration-300 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 overflow-hidden transition-all duration-500 ease-in-out">
                <div
                  className={`${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } transition-all duration-500 ease-in-out`}
                >
                  <Link
                    href="/"
                    className={`block py-2 ${getActiveStyle("/")}`}
                  >
                    Home
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="/about"
                    className={`block py-2 ${getActiveStyle("/about")}`}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className={`block py-2 ${getActiveStyle("/contact")}`}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/model-photoshoots"
                    className="block py-2 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
                  >
                    Model Photoshoots
                  </Link>
                  <Link
                    href="/events"
                    className={`block py-2 ${getActiveStyle("/events")}`}
                  >
                    Events
                  </Link>
                  <Link
                    href="/photographers"
                    className={`block py-2 ${getActiveStyle("/photographers")}`}
                  >
                    Photographers
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
}

export default Header;
