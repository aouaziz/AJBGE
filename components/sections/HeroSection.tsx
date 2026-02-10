"use client";

import { useRef } from 'react';
import { Trophy, Users, Calendar, Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stats = [
  { icon: Users, value: '250+', label: 'Membres' },
  { icon: Calendar, value: '15', label: 'Ans d\'Excellence' },
  { icon: Award, value: '50+', label: 'Tournois' },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chessPieceRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      gsap.set([".hero-badge", ".hero-title", ".hero-description", ".hero-cta", ".hero-stat", ".hero-visual"], { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power2.out",
        duration: 0.6 
      } 
    });

    tl.from(".hero-badge", { opacity: 0, y: 15, delay: 0.1 })
      .from(".hero-title", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
      .from(".hero-description", { opacity: 0, y: 15 }, "-=0.5")
      .from(".hero-cta", { opacity: 0, y: 15 }, "-=0.4")
      .from(".hero-stat", { opacity: 0, y: 15, stagger: 0.08 }, "-=0.3")
      .from(".hero-visual", { opacity: 0, scale: 0.95, duration: 0.7 }, "-=0.5");

    // Float animation for chess piece - smoother on mobile
    if (chessPieceRef.current) {
      gsap.to(chessPieceRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-emerald-50/30">
      {/* Chess Pattern Background */}
      <div className="absolute inset-0 chess-pattern pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="hero-badge">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                Club d&apos;Echecs Historique
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              L&apos;excellence échiquéenne au{' '}
              <span className="text-emerald-600">cœur de Ben Guerir</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-description text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
              Rejoignez l&apos;AJBGE et faites partie d&apos;une communauté passionnée 
              par l&apos;intelligence stratégique et le partage des savoirs.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#adhesion"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-emerald-600 rounded-xl shadow-button btn-shine hover:scale-105 active:scale-95 transition-transform"
              >
                Devenir Membre
              </a>
              <a
                href="#club"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-emerald-600 hover:text-emerald-600 transition-colors hover:scale-105 active:scale-95"
              >
                Découvrir le Club
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-2 sm:pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Chess Piece */}
          <div className="hero-visual hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Chess Piece Image */}
              <div ref={chessPieceRef} className="relative z-10">
                <img
                  src="/HERO.jpeg"
                  alt="Chess Knight"
                  className="w-64 lg:w-80 h-auto drop-shadow-2xl rounded-2xl object-cover"
                />
              </div>
              
              {/* Decorative squares */}
              <div className="absolute -bottom-4 -left-4 w-20 lg:w-24 h-20 lg:h-24 border-2 border-emerald-200 rounded-lg opacity-50" />
              <div className="absolute -top-4 -right-4 w-12 lg:w-16 h-12 lg:h-16 bg-emerald-100 rounded-lg opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
