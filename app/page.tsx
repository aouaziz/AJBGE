import { Navbar } from '../components/Navbar';
import { HeroContent } from '../components/Hero';
import { SponsorStrip } from '../components/SponsorStrip';
import { ShopNewsSection } from '../components/ShopNewsSection';
import { PresidentsMessage } from '../components/PresidentsMessage';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <main className="relative w-full min-h-screen bg-black font-sans selection:bg-white selection:text-black overflow-x-hidden">

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Hero Section with Depth Effect */}
      <section className="relative w-full h-screen">
        <HeroContent />
      </section>
      
      <SponsorStrip />

      {/* Divider */}
      <div className="max-w-[1800px] mx-auto px-8">
         <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* Shop and News Section */}
      <ShopNewsSection />

      {/* Divider */}
      <div className="max-w-[1800px] mx-auto px-8">
         <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* President's Message Section */}
      <PresidentsMessage />

      {/* Footer / Copyright Section */}
      <Footer />
    </main>
  );
}
