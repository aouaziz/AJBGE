"use client";

import React from 'react';
import { motion } from 'motion/react';

export const SponsorStrip = () => {
  const sponsors = [
    { name: "OCP Group", industry: "Phosphate & Fertilizer" },
    { name: "Maroc Telecom", industry: "Telecommunications" },
    { name: "Attijariwafa Bank", industry: "Banking & Finance" },
    { name: "Royal Air Maroc", industry: "Airlines" },
    { name: "BCP", industry: "Banking" },
    { name: "Afriquia", industry: "Energy & Gas" },
    { name: "ONCF", industry: "Railway" },
    { name: "Bank of Africa", industry: "Finance" },
    { name: "Cosumar", industry: "Sugar Industry" },
  ];

  // Double the array for seamless infinite loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="absolute bottom-0 left-0 w-full z-30 py-10 overflow-hidden">
      <motion.div 
        className="flex items-center"
        animate={{
          x: [0, -1800], // Adjusted for the width of text logos
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // Slower, more premium movement
            ease: "linear",
          },
        }}
      >
        {duplicatedSponsors.map((sponsor, idx) => (
          <div 
            key={`${sponsor.name}-${idx}`} 
            className="flex-shrink-0 px-10 flex flex-col items-center justify-center group cursor-pointer"
          >
            <div className="flex items-center justify-center transition-all duration-500">
              <span className="text-sm font-black tracking-widest text-white uppercase group-hover:text-white/100 transition-all duration-500">
                {sponsor.name.split(' ')[0]}
                <span className="text-white/30 font-bold ml-1">
                  {sponsor.name.split(' ').slice(1).join(' ')}
                </span>
              </span>
            </div>
            <span className="mt-1 text-[6px] font-bold uppercase tracking-[0.3em] text-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
              {sponsor.industry}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
