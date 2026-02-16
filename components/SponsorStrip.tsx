"use client";

import React from 'react';
import { motion } from 'motion/react';

export const SponsorStrip = () => {
  const sponsors = [
    { 
      name: "OCP Group", 
      logoUrl: "https://www.start-up.ma/wp-content/uploads/2023/10/OCP-Group-l-Start-Up-1-1-1-1-1-1-1.png",
      height: 200 
    },
    { 
      name: "Chess.com", 
      logoUrl: "https://logowik.com/content/uploads/images/chesscom2309.logowik.com.webp",
      height: 150 
    },
     { 
      name: "OCP Group", 
      logoUrl: "https://www.start-up.ma/wp-content/uploads/2023/10/OCP-Group-l-Start-Up-1-1-1-1-1-1-1.png",
      height: 200 
    },
    { 
      name: "Chess.com", 
      logoUrl: "https://logowik.com/content/uploads/images/chesscom2309.logowik.com.webp",
      height: 150 
    },
    // Repeats for effect
    { 
      name: "OCP Group", 
      logoUrl: "https://www.start-up.ma/wp-content/uploads/2023/10/OCP-Group-l-Start-Up-1-1-1-1-1-1-1.png",
      height: 200 
    },
    { 
      name: "Chess.com", 
      logoUrl: "https://logowik.com/content/uploads/images/chesscom2309.logowik.com.webp",
      height: 150 
    },
  ];

  // Double the array for seamless infinite loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="w-full bg-white  border-b border-gray-100 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="max-w-[1800px] mx-auto px-8">
        
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex items-center gap-24"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedSponsors.map((sponsor, idx) => (
              <div 
                key={`${sponsor.name}-${idx}`} 
                className="flex-shrink-0 group cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 scale-95 hover:scale-105"
              >
                <img 
                  src={sponsor.logoUrl} 
                  alt={sponsor.name}
                  style={{ height: `${sponsor.height}px`, width: 'auto' }}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
