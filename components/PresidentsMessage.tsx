"use client";

import React from 'react';
import { motion } from 'motion/react';

export const PresidentsMessage = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-32" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#059669]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#059669]" />
              <span className="text-[#059669] text-xs font-black tracking-[0.25em] uppercase">
                President's Message
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              Leading with <br />
              <span className="italic text-[#059669]">Vision & Strategy</span>
            </h2>

            <div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg">
              <p>
                "Chess is more than just a game; it is a discipline that shapes character and sharpens the mind. At AJBGE, we are committed to fostering a community of critical thinkers and strategic leaders."
              </p>
              <p>
                "Our legacy is built on the dedication of our members and the support of our partners. Together, we continue to push the boundaries of excellence in Ben Guerir and beyond."
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col gap-2">
                {/* Signature Placeholder */}
                <span className="font-handwriting text-3xl text-gray-800 transform -rotate-2 block mb-2 font-serif italic">
                  Abderrahmane  
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Abderrahmane  </h4>
                  <p className="text-[#059669] text-xs font-bold uppercase tracking-widest mt-1">President, AJBGE</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Portrait Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl skew-y-1 group">
               {/* Placeholder Portrait - Using a high quality Unsplash image for now */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="President Portrait" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              
              {/* Quote on Image */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                 <div className="w-10 h-1 bg-[#059669] mb-4" />
                 <p className="font-serif italic text-lg opacity-90">"Checkmate is just the beginning."</p>
              </div>
            </div>
            
            {/* Decorative Border Box */}
            <div className="absolute -inset-4 border-2 border-[#059669]/20 rounded-lg -z-10 translate-x-4 translate-y-4" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
