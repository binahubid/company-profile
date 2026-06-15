import { HomeHero } from "./_sections/home-hero";
import { AboutCarouselSection } from "./_sections/about-carousel-section";
import { ServicesSection } from "./_sections/services-section";
import { HumanCoreValuesSection } from "@/components/human-core-values";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA] text-[#4A4C54] min-h-screen font-sans antialiased">
      <div className="relative z-0">
        <HomeHero />
      </div>
      <div className="relative z-10 bg-[#F5F7FA]">
        <AboutCarouselSection />
        <HumanCoreValuesSection />
        <ServicesSection />
      </div>
      {/* <PainPointQuizPopup /> */}
    </div>
  );
}
