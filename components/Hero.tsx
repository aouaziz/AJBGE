"use client";

import React from 'react';
import { motion } from 'motion/react';

export const HeroContent = () => {
  return (
    <>
          <div className="absolute inset-0 z-0">
            <img 
              src="HeroBG.png"
              alt="Dark Library Background" 
              className="w-full h-full object-cover brightness-100 scale-100"
              />
            {/* Bottom Shadow for Sponsor Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/6 to-transparent pointer-events-none" />
          </div>
    
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-16">
      {/* Headline Layer (z-10) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center w-full max-w-[98%] flex flex-col items-center justify-center"
        >
        <h1 className="text-white text-xl md:text-[180px] font-black uppercase">
          <span className="block mb-10">L'Élite des Échecs </span>
        </h1>
      </motion.div>

      {/* Call to Action - Positioned at the bottom, above the knight (z-30) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="absolute bottom-32 z-30"
      >
        <button className="px-12 py-5 rounded-full bg-[#059669] text-white text-xs md:text-sm font-black uppercase tracking-[0.3em] hover:bg-[#047857] transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(5,150,105,0.3)] group overflow-hidden relative">
          <span className="relative z-10">S'inscrire maintenant</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </motion.div>

      {/* Subject Layer (z-20) - Overlapping the text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <div className="relative w-[160px] md:w-[200px] mt-20">
          <img 
            src="knight.png"
            alt="Wooden Knight" 
            className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
        </div>
      </motion.div>
    </div>
    </>
  );
};
