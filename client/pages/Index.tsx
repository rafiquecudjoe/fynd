import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";

// Critical above-the-fold components loaded immediately
import StatsSection from "@/components/StatsSection";

// Lazy load below-the-fold sections for better LCP
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const VerificationSystem = lazy(() => import("@/components/sections/VerificationSystem"));
const FeaturedPosts = lazy(() => import("@/components/sections/FeaturedPosts"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const JoinCommunity = lazy(() => import("@/components/sections/JoinCommunity"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

// Lightweight loading fallback
const SectionLoader = () => <div className="w-full h-20"></div>;

export default function Index() {
  return (
    <>
      <SEOHead 
        title="Fyndae - Find Lost Items in Cape Town, South Africa | Community Rewards Platform"
        description="Recover lost items in Cape Town & South Africa with Fyndae. Report missing phones, wallets, pets & more. Community-powered platform with verified rewards. Join 100+ active members. Available 24/7."
        keywords="lost and found Cape Town, find lost items South Africa, recover missing items, lost property Western Cape, lost phone Cape Town, lost wallet finder, missing pet South Africa, community rewards, verify information, lost item recovery, Fyndae"
        ogImage="https://fyndae.com/og-image.jpg"
      />
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <StructuredData type="LocalBusiness" />
      <StructuredData type="Service" />
      
      <div className="min-h-screen">
      {/* Top Part - Hero Section */}
      <div className="w-full bg-gradient-to-br from-[#117465] to-[#0A463D]">
        <Navbar />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6">
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-[640px]">
              <div className="space-y-8 sm:space-y-12">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-[140%] tracking-[-0.04em] text-white">
                    Your Trusted Platform To Recover Lost Items and Verify
                    Information
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-[150%]">
                    From locating lost items to confirming the identity or
                    credibility of people and organizations, Fyndae gives you
                    the information you need to move confidently and securely.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6">
                  <Link to="/login" className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white font-medium text-base sm:text-lg leading-[150%] hover:bg-white/20 transition-colors text-center">
                    Join The Community
                  </Link>
                  <Link to="/login" className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-white text-green-70 font-medium text-base sm:text-lg leading-[150%] hover:bg-white/90 transition-colors text-center">
                    Report An Item
                  </Link>
                </div>
              </div>

              <div className="mt-12 lg:mt-16 space-y-5">
                <div className="flex items-center">
                  <div className="flex items-center p-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                    <OptimizedImage
                      src="/images/cdn/avatar-1.png"
                      alt="Community member 1"
                      width={100}
                      height={100}
                      priority={true}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <OptimizedImage
                      src="/images/cdn/avatar-2.png"
                      alt="Community member 2"
                      width={100}
                      height={100}
                      priority={true}
                      className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                    />
                    <OptimizedImage
                      src="/images/cdn/avatar-3.png"
                      alt="Community member 3"
                      width={100}
                      height={100}
                      priority={true}
                      className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                    />
                    <OptimizedImage
                      src="/images/cdn/avatar-4.png"
                      alt="Community member 4"
                      width={100}
                      height={100}
                      priority={true}
                      className="w-12 h-12 rounded-full border-2 border-white -ml-3"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-medium text-white leading-[150%] tracking-[-0.03em]">
                    100+ Active Community Members
                  </h3>
                  <p className="text-base text-white/90 leading-[150%]">
                    Trusted by 100+ active community members helping recover
                    lost items
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[744px] rounded-2xl sm:rounded-3xl overflow-hidden">
            <OptimizedImage
              src="/images/cdn/hero-illustration.png"
              alt="Security and trust illustration showing community support and recovery"
              width={1306}
              height={744}
              priority={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        </div>
        {/* Curved Wave Separator */}
        <div className="relative w-full h-20 sm:h-24 md:h-32">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 Q360,140 720,80 T1440,80 L1440,160 L0,160 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Top Part - Sections */}
      <StatsSection />
      
      {/* Lazy load below-the-fold sections */}
      <Suspense fallback={<SectionLoader />}>
        <HowItWorksSection />
        <FeaturesSection />
        <VerificationSystem />
        <FeaturedPosts />
        <Testimonials />
        <JoinCommunity />
        <FAQ />
        <CTASection />
        <Footer />
      </Suspense>
      </div>
    </>
  );
}
