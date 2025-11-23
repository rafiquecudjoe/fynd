import Navbar from "@/components/Navbar";
import ContactSection from "@/components/about/ContactSection";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      <Navbar />
      <ContactSection />
      <FAQ />
      <Footer />
    </div>
  );
}
