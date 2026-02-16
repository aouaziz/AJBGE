"use client";

import React from 'react';
import { motion } from 'motion/react';

export const HeroContent = () => {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <img 
          src="Hero.jpg"
          alt="Chess Strategy Background" 
          className="w-full h-full object-cover brightness-90"
          style={{ objectPosition: 'center 25%' }}
        />
        {/* Left-side Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
        {/* Bottom Shadow for seamless transition */}

      </div>
    
      <div className="relative w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 max-w-[1800px] mx-auto pt-16">
        {/* Alignment Container */}
        <div className="flex flex-col items-start max-w-4xl z-10">
          
          {/* Animated Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-medium uppercase mb-6 tracking-tighter">
              INTELLIGENCE <br/>
              <span className="text-white font-light">AND LEGACY</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-2xl font-light tracking-widest uppercase mb-10 border-l-4 border-[#059669] pl-6 max-w-lg">
              L'Élite des Échecs à Ben Guerir
            </p>
          </motion.div>

          {/* Call to Action - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <button className="px-10 py-4 md:px-12 md:py-5 bg-[#059669] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 transform hover:scale-105 rounded-[5px] hover:bg-[#047857]">
              <span className="flex items-center gap-3">
                Join the Club
                <span>→</span>
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </>
  );
};
