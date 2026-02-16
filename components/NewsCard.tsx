"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface NewsCardProps {
  imageUrl: string;
  title: string;
  ctaText: string;
}

export function NewsCard({ imageUrl, title, ctaText }: NewsCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden cursor-pointer transition-all duration-500 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#059669]/20"
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
      </div>
      
      {/* Emerald overlay bar */}
      <div className="absolute bottom-0 left-0 right-0 px-8 py-10" style={{ 
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
      }}>
        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
            <h3 className="uppercase tracking-[0.05em] mb-3 text-white font-black text-2xl leading-tight">
            {title}
            </h3>
            <div className="flex items-center gap-3 text-sm group/cta text-[#059669]">
            <span className="font-bold tracking-widest text-[10px] uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-[#059669] group-hover:text-white transition-all duration-300">
                {ctaText}
            </span>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
