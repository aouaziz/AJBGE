import { Navbar } from '../components/Navbar';
import { HeroContent } from '../components/Hero';
import { SponsorStrip } from '../components/SponsorStrip';
import { ShopNewsSection } from '../components/ShopNewsSection';

export default function App() {
  return (
    <main className="relative w-full min-h-screen bg-black font-sans selection:bg-white selection:text-black overflow-x-hidden">

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Hero Section with Depth Effect */}
      <section className="relative w-full h-screen">
        <HeroContent />
        <SponsorStrip />
      </section>

      {/* Shop and News Section */}
      <ShopNewsSection />

      {/* Footer / Copyright Section */}
      <footer className="relative border-t border-white/5 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#059669]/5" />
        <div className="relative px-8 py-16 md:px-16 lg:px-24 xl:px-32 max-w-[1800px] mx-auto text-center">
            <div className="mb-6">
              <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-50">
                <path d="M16 56H48V52H44L42 44H22L20 52H16V56ZM22 40H42L44 32H40L38 28C38 28 36 24 32 24C28 24 26 28 26 28L24 32H20L22 40ZM28 20C28 18.9 28.9 18 30 18H34C35.1 18 36 18.9 36 20V22H38C38 38 40 20 40 18C40 16 38 14 36 14H32L30 12L28 14H24C22 14 20 16 20 18C20 20 22 22 22 22H24V20C24 20 26 18 28 18V20Z" fill="#059669"/>
              </svg>
            </div>
            <p className="text-[11px] text-white/30 font-bold tracking-[0.15em] uppercase">
              © 2026 AJBGE — L'Excellence Aux Échecs Depuis 1924
            </p>
        </div>
      </footer>

    </main>
  );
}

