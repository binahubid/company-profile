import { PainPointSection } from "./_sections/pain-point-section";
import { HomeHero } from "./_sections/home-hero";
import { AboutCarouselSection } from "./_sections/about-carousel-section";
import { GallerySection } from "./_sections/gallery-section";
import { ServicesSection } from "./_sections/services-section";
import { HumanCoreValuesSection } from "@/components/human-core-values";
import { MarqueeSection } from "./_sections/marquee-section";
import { CTASection } from "./_sections/cta-section";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA] text-[#4A4C54] min-h-screen font-sans antialiased">
      <div className="relative w-full">
        <PainPointSection />
        <HomeHero />
        <AboutCarouselSection />
      </div>
      <GallerySection />
      <HumanCoreValuesSection />
      <ServicesSection />
      <MarqueeSection />
      <CTASection />
    </div>
  );
}
