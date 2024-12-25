'use client'
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 w-full md:w-1/3 text-center md:text-left">
          <div className="flex justify-center ">
          <Link href={'/'}>
          <h1 className="justify-center items-center font-[1000] text-2xl md:text-4xl  mb-3 h-full"><span className="font-[1300] text-red-500"> &lt;/&gt; </span> Hrux<span className="font-[1300] text-red-500"> UI</span></h1>
          </Link>
          </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 w-full md:w-1/3 text-center">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" className="text-2xl hover:text-blue-500 transition">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-2xl hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-2xl hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-2xl hover:text-blue-600 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-sm">
          <p className="w-full md:w-auto text-center md:text-left">
            &copy; {new Date().getFullYear()} Hrushi&apos;s UI. All rights reserved.
          </p>
          <p className="w-full md:w-auto text-center md:text-right">
            Made by <a href="https://yourwebsite.com" className="hover:text-yellow-400 transition">Hrushi More</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
