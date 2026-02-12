"use client";

import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
}

export function ProductCard({ imageUrl, name, price, description }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden bg-black cursor-pointer transition-all duration-500 border border-white/5 hover:border-[#059669]/50 hover:shadow-2xl hover:shadow-[#059669]/20"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-neutral-900">
        <img
          src={imageUrl}
          alt={name}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
          loading="lazy"
        />
      </div>
      
      {/* Product Info */}
      <div className="bg-black p-8 border-t border-white/5">
        <h3 className="uppercase tracking-[0.2em] mb-3" style={{ 
          color: '#FFFFFF', 
          fontWeight: 800, 
          fontSize: '12px'
        }}>
          {name}
        </h3>
        <p className="text-white/50 text-xs mb-6 leading-relaxed font-medium">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span style={{ 
            fontSize: '28px', 
            fontWeight: 900, 
            letterSpacing: '-0.02em',
            color: '#059669'
          }}>
            {price}
          </span>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#059669] text-white px-6 py-3 flex items-center gap-2 transition-all hover:bg-[#047857] shadow-lg shadow-[#059669]/20 group/btn"
            style={{ fontSize: '10px', letterSpacing: '0.15em', fontWeight: 800 }}
          >
            <ShoppingCart className="size-4" />
            <span>AJOUTER</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
