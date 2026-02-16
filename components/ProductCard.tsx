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
      className="group relative overflow-hidden bg-white cursor-pointer transition-all duration-500 border border-gray-100 hover:border-gray-200 rounded-xl"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        <img
          src={imageUrl}
          alt={name}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay gradient for text contrast if needed, but keeping it clean for now */}
      </div>
      
      {/* Product Info */}
      <div className="bg-white p-6 border-t border-gray-100">
        <h3 className="uppercase tracking-[0.1em] mb-2 text-gray-900 font-extrabold text-xs">
          {name}
        </h3>
        <p className="text-gray-500 text-xs mb-6 leading-relaxed font-medium line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-2xl font-black tracking-tight text-[#059669]">
            {price}
          </span>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#059669] text-white px-5 py-2.5 flex items-center gap-2 transition-all hover:bg-[#047857] rounded-[5px]"
            style={{ fontSize: '10px', letterSpacing: '0.05em', fontWeight: 800 }}
          >
            <ShoppingCart className="size-3.5" />
            <span>AJOUTER</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
