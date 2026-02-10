import { HeroSection } from '@/components/sections/HeroSection';
import { SponsorsSection } from '@/components/sections/SponsorsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { MembershipSection } from '@/components/sections/MembershipSection';
import { ShopSection } from '@/components/sections/ShopSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <MembershipSection />
      <ShopSection />
      <NewsSection />
      <CTASection />
    </main>
  );
}
