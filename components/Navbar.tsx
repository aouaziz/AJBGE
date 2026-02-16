"use client";

import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sponsors', href: '#' },
    { name: 'Recouvrements', href: '#' },
    { name: 'Shops', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 bg-transparent">
      <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1800px] mx-auto w-full">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img 
          src="logo.png"
          alt="AJBGE Logo" 
          className="h-10 w-auto object-contain" 
        />
        <span className="text-white text-lg font-black tracking-tighter">AJBGE</span>
      </div>

      {/* Center: Links */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-[12px] text-white font-black uppercase tracking-widest hover:text-white/70 transition-colors duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Contact Us Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-7 py-2 rounded-[5px] bg-[#059669] text-white text-[12px] font-bold tracking-widest hover:bg-[#047857] transition-all uppercase"
      >
        Inscription
      </motion.button>
      </div>
    </nav>
  );
};
