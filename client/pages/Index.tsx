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
const VerificationSystem = lazy(
  () => import("@/components/sections/VerificationSystem"),
);
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
        <div className="w-full bg-gradient-to-br from-[#117465] via-[#0A463D] to-[#0A463D] md:bg-gradient-to-br md:from-[#117465] md:to-[#0A463D]">
          <Navbar />
          <div className="max-w-[1440px] mx-auto px-6 md:px-4 lg:px-6 py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="flex flex-col lg:flex-row items-stretch gap-16 md:gap-4 lg:gap-6">
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[640px] md:mx-0 mx-auto">
                  <div className="space-y-10 md:space-y-8 lg:space-y-12">
                    <div className="space-y-4 md:space-y-3 lg:space-y-4">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-semibold leading-[140%] tracking-[-0.083em] md:tracking-[-0.04em] text-center md:text-left">
                        <span className="text-white">Your </span>
                        <span className="text-[#E5FDC5]">Trusted Platform</span>
                        <span className="text-white">
                          {" "}
                          To Recover Lost Items and Verify Information
                        </span>
                      </h1>
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white leading-[130%] md:leading-[150%] text-center md:text-left">
                        From locating lost items to confirming the identity or
                        credibility of people and organizations, Fyndae gives
                        you the information you need to move confidently and
                        securely.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-3 lg:gap-4 xl:gap-6 justify-center md:justify-start">
                      <Link
                        to="/login"
                        className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#B7BECD] bg-[#F7F7F8] text-[#0D0B1A] font-medium text-sm md:text-base lg:text-lg leading-[150%] hover:bg-white transition-colors text-center"
                      >
                        Join The Community
                      </Link>
                      <Link
                        to="/login"
                        className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#E5FDC5] text-[#21242C] font-medium text-sm md:text-base lg:text-lg leading-[150%] hover:bg-[#E5FDC5]/90 transition-colors text-center"
                      >
                        Report An Item
                      </Link>
                    </div>
                  </div>

                  <div className="mt-10 md:mt-12 lg:mt-16 space-y-2 flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="flex items-center py-2 px-2 gap-[-14px] rounded-full border border-[#262626] bg-[#1A1A1A]">
                        <OptimizedImage
                          src="/images/cdn/avatar-1.png"
                          alt="Community member 1"
                          width={100}
                          height={100}
                          priority={true}
                          className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#8690A2]"
                        />
                        <OptimizedImage
                          src="/images/cdn/avatar-2.png"
                          alt="Community member 2"
                          width={100}
                          height={100}
                          priority={true}
                          className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#8690A2] -ml-3.5 md:-ml-3"
                        />
                        <OptimizedImage
                          src="/images/cdn/avatar-3.png"
                          alt="Community member 3"
                          width={100}
                          height={100}
                          priority={true}
                          className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#8690A2] -ml-3.5 md:-ml-3"
                        />
                        <OptimizedImage
                          src="/images/cdn/avatar-4.png"
                          alt="Community member 4"
                          width={100}
                          height={100}
                          priority={true}
                          className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-[#8690A2] -ml-3.5 md:-ml-3"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="text-base md:text-xl font-medium text-white leading-[150%] tracking-[-0.03em]">
                        100+ Active Community Members
                      </h3>
                      <p className="text-sm md:text-base text-white leading-[130%] md:leading-[150%]">
                        Trusted by 100+ active community members helping recover
                        lost items
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-h-[403px] md:min-h-[300px] lg:min-h-[400px] xl:min-h-[744px] rounded-3xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
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
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1440 160"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,80 Q360,140 720,80 T1440,80 L1440,160 L0,160 Z"
                fill="#ffffff"
              />
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
