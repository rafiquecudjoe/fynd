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
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-[800px] md:mx-0 mx-auto">
                  <div className="space-y-8 md:space-y-10">
                    <div className="space-y-8">
                      <h1 className="flex flex-col gap-4 text-3xl md:text-5xl lg:text-[48px] font-bold leading-[140%] tracking-[-2px] text-center md:text-left text-white py-2">
                        <span className="block">
                          Your <span className="text-[#E5FDC5]">Trusted Platform</span> To
                        </span>
                        <span className="block">
                          Recover Lost Items and
                        </span>
                        <span className="block">
                          Verify Information
                        </span>
                      </h1>
                      <p className="text-base md:text-lg text-white/80 leading-[160%] text-center md:text-left max-w-[540px]">
                        From locating lost items to confirming the identity or
                        credibility of people and organizations, Fyndae gives
                        you the information you need to move confidently and
                        securely.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center md:justify-start">
                      <Link
                        to="/login"
                        className="px-8 py-4 rounded-xl bg-[#F7F7F8] border border-[#B7BECD] text-[#0D0B1A] font-semibold text-base hover:bg-white transition-colors text-center"
                      >
                        Join The Community
                      </Link>
                      <Link
                        to="/login"
                        className="px-8 py-4 rounded-xl bg-[#E5FDC5] text-[#21242C] font-semibold text-base hover:bg-[#dbfcb0] transition-colors text-center"
                      >
                        Report An Item
                      </Link>
                    </div>
                  </div>

                  <div className="mt-12 md:mt-16 space-y-4 flex flex-col items-center md:items-start">
                    <div className="flex items-center p-2 rounded-full border border-[#262626] bg-[#1A1A1A] w-fit">
                      <div className="flex items-center pl-2">
                        <OptimizedImage
                          src="/images/cdn/avatar-1.png"
                          alt="Community member 1"
                          width={48}
                          height={48}
                          className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]"
                        />
                        <OptimizedImage
                          src="/images/cdn/avatar-2.png"
                          alt="Community member 2"
                          width={48}
                          height={48}
                          className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] -ml-4"
                        />
                        <OptimizedImage
                          src="/images/cdn/avatar-3.png"
                          alt="Community member 3"
                          width={48}
                          height={48}
                          className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] -ml-4"
                        />
                        <OptimizedImage
                          src="/images/cdn/avatar-4.png"
                          alt="Community member 4"
                          width={48}
                          height={48}
                          className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] -ml-4"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-center md:text-left">
                      <h3 className="text-lg font-bold text-white leading-[140%]">
                        100+ Active Community Members
                      </h3>
                      <p className="text-sm text-white/70 leading-[150%]">
                        Trusted by 100+ active community members helping recover lost items
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full max-w-[640px] lg:max-w-none">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <OptimizedImage
                    src="/images/cdn/hero-illustration.png"
                    alt="Security and trust illustration showing community support and recovery"
                    width={800}
                    height={800}
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A463D]/50 to-transparent pointer-events-none" />
                </div>
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
