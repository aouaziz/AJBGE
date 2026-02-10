"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const navItems = [
  { label: 'Accueil', href: '#' },
  { label: 'Le Club', href: '#club' },
  { label: 'Adhésion', href: '#adhesion' },
  { label: 'Boutique', href: '#boutique' },
  { label: 'Médias', href: '#medias' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'FR' | 'AR'>('FR');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(headerRef.current, { opacity: 1 });
      return;
    }

    gsap.from(headerRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.5,
      ease: "power2.out",
    });
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="AJBGE Logo" 
                width={40} 
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                AJBGE
              </span>
              <span className={`block text-xs ${isScrolled ? 'text-gray-500' : 'text-gray-500'}`}>
                Association Jeunesse Ben Guerir Échecs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 link-underline ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-emerald-600' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'FR' ? 'AR' : 'FR')}
              className={`hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {lang}
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* CTA Button */}
            <Link
              href="#adhesion"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-button hover:shadow-button-hover"
            >
              Devenir Membre
            </Link>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[380px] bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <span className="font-bold text-lg text-gray-900">Menu</span>
                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-600">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <nav className="flex-1 py-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-4 border-t border-gray-100 space-y-3">
                    <Link
                      href="#adhesion"
                      className="block w-full py-3 px-4 text-center text-white bg-emerald-600 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Devenir Membre
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
