"use client";

import React from 'react';
import { motion } from 'motion/react';
import { NewsCard } from './NewsCard';
import { ProductCard } from './ProductCard';

export const ShopNewsSection = () => {
  const newsItems = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1729100170683-9b4b0dcdaa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGhhbmRzJTIwbW92aW5nJTIwcGllY2VzJTIwd29vZGVuJTIwYm9hcmQlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDg3NDUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'FAITS SAILLANTS DU TOURNOI',
      ctaText: 'Revivre le Drame'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1678634695783-6f18db49ece0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGtpbmclMjBwaWVjZSUyMGRyYW1hdGljJTIwbGlnaHRpbmclMjBsaWJyYXJ5fGVufDF8fHx8MTc3MDg3MDYxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'GUIDES STRATÉGIQUES',
      ctaText: 'Améliorer Votre Jeu'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1740702322054-40e401501275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHBsYXllciUyMHBvcnRyYWl0JTIwdGhpbmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwODc0NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'PROFILS DE JOUEURS',
      ctaText: 'Rencontrer les Rivaux'
    }
  ];

  const products = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1697377345197-333543c9198f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGVzcyUyMGJvYXJkJTIwd29vZGVuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzA4NzU2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'ÉCHIQUIER GRAND MAÎTRE',
      price: '299€',
      description: 'Échiquier de tournoi en noyer et érable avec finition premium'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1754307159592-20f86ca8603d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHBpZWNlcyUyMGx1eHVyeSUyMG1hcmJsZXxlbnwxfHx8fDE3NzA4NzU2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'ENSEMBLE DE PIÈCES LUXE',
      price: '449€',
      description: 'Pièces exquises en buis ébonisé avec base en feutre'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1689663467430-71011b96d8a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2hlc3MlMjB0aW1lciUyMHdvb2RlbnxlbnwxfHx8fDE3NzA4NzU2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'PENDULE DIGITALE',
      price: '189€',
      description: 'Horloge de tournoi professionnelle avec contrôles multiples'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1722286055403-aa7e0d6cb685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGJvb2slMjB2aW50YWdlJTIwbGlicmFyeXxlbnwxfHx8fDE3NzA4NzU2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'MASTERCLASS OUVERTURES',
      price: '79€',
      description: 'Guide complet pour maîtriser les ouvertures classiques'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Shop Section */}
      <section className="relative px-8 py-32 md:px-16 lg:px-24 xl:px-32 max-w-[1800px] mx-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-[#059669]" />
            <span className="text-[#059669] text-[10px] font-extrabold tracking-[0.25em] uppercase">
              COLLECTION PREMIUM
            </span>
          </div>
          <h2 className="text-gray-900 uppercase mb-6 font-black leading-tight tracking-tight text-5xl md:text-7xl">
            BOUTIQUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#047857]">EXCLUSIVE</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium">
            Découvrez notre sélection d'équipements d'échecs premium pour les joueurs exigeants
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1800px] mx-auto px-8">
         <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* Club News & Features Section */}
      <section className="relative px-8 py-32 md:px-16 lg:px-24 xl:px-32 max-w-[1800px] mx-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-16 bg-[#059669]" />
            <span className="text-[#059669] text-[10px] font-extrabold tracking-[0.25em] uppercase">
              ÉDITORIAL
            </span>
          </div>
          <h2 className="text-gray-900 uppercase mb-6 font-black leading-tight tracking-tight text-5xl md:text-7xl">
            ACTUALITÉS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#047857]">REPORTAGES</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium">
            Plongez dans les dernières histoires, conseils et profils du monde des échecs
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              ctaText={item.ctaText}
            />
          ))}
        </div>

        {/* Chess Knight Logo Watermark */}
        <div className="absolute -bottom-20 right-8 md:right-32 opacity-3 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 56H48V52H44L42 44H22L20 52H16V56ZM22 40H42L44 32H40L38 28C38 28 36 24 32 24C28 24 26 28 26 28L24 32H20L22 40ZM28 20C28 18.9 28.9 18 30 18H34C35.1 18 36 18.9 36 20V22H38C38 38 40 20 40 18C40 16 38 14 36 14H32L30 12L28 14H24C22 14 20 16 20 18C20 20 22 22 22 22H24V20C24 20 26 18 28 18V20Z" fill="#059669"/>
          </svg>
        </div>
      </section>

      {/* Trust Quote / Footer Hint */}
      <section className="relative px-8 py-24 md:px-16 lg:px-24 xl:px-32 max-w-[1800px] mx-auto text-center">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block"
         >
            <span className="text-[10px] font-black tracking-[0.4em] text-[#059669] uppercase mb-8 block">L'Excellence Depuis 1924</span>
            <h3 className="text-white/30 text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
               "Les échecs sont le miroir de l'âme"
            </h3>
         </motion.div>
      </section>
    </div>
  );
};
