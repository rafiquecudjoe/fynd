import Navbar from "@/components/Navbar";
import HeroSection from "@/components/about/HeroSection";
import GlobalCrisisSection from "@/components/about/GlobalCrisisSection";
import ImpactSection from "@/components/about/ImpactSection";
import JourneySection from "@/components/about/JourneySection";
import ValuesSection from "@/components/about/ValuesSection";
import Footer from "@/components/sections/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      <Navbar />
      <HeroSection />
      <GlobalCrisisSection />
      <JourneySection />
      <ValuesSection />
      <ImpactSection />
      <Footer />
    </div>
  );
}
