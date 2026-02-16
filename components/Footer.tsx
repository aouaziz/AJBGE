"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white border-t border-white/10 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-[#059669]/20 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter uppercase">AJBGE</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Association Jeunesse Ben Guerir Échecs. Cultivating strategic minds and fostering excellence since 1924.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#059669] hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#059669] hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#059669] hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#059669]">Navigation</h4>
            <ul className="space-y-3 text-neutral-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#059669]">Contact</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#059669] shrink-0" />
                <span>Ben Guerir, Morocco</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#059669] shrink-0" />
                <span>+212 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#059669] shrink-0" />
                <span>contact@ajbge.ma</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-widest uppercase text-[#059669]">Join the Legacy</h4>
            <p className="text-neutral-400 text-sm">
                Subscribe to receive tournament updates and exclusive chess insights.
            </p>
            <div className="flex flex-col gap-3">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#059669] transition-colors"
                />
                <button className="bg-[#059669] text-white text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-[#047857] transition-all shadow-lg hover:shadow-[#059669]/20">
                    Subscribe
                </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} AJBGE. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};
