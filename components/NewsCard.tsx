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
      className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-[#059669]/20"
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-neutral-900">
        <img
          src={imageUrl}
          alt={title}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75"
          loading="lazy"
        />
      </div>
      
      {/* Emerald overlay bar */}
      <div className="absolute bottom-0 left-0 right-0 px-8 py-10" style={{ 
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 100%)',
        backdropFilter: 'blur(12px)'
      }}>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#059669] to-transparent opacity-50" />
        <h3 className="uppercase tracking-[0.15em] mb-3" style={{ 
          color: '#FFFFFF', 
          fontWeight: 800, 
          fontSize: '14px'
        }}>
          {title}
        </h3>
        <div className="flex items-center gap-3 text-sm group/cta" style={{ color: '#059669' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 700 }}>{ctaText}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </motion.div>
  );
}
