import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full border border-[#262626] bg-[#0A463D] py-10 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-4 sm:px-6">
        <div className="md:px-6 lg:px-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url('/images/cdn/cta-background.png')", 
          backgroundSize: "100px 100px", 
          backgroundRepeat: "repeat" 
        }}
      />
      
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3.5 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[140%] tracking-[-2px] md:tracking-tight">
            <span className="text-white">Ready To Find What's </span>
            <span className="text-[#E5FDC5]">Missing?</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-white max-w-[1100px] leading-[130%] md:leading-relaxed">
            Every recovery starts with one action. Report your missing item with confidence or join our community and play a meaningful role in reconnecting people with what they've lost. Fyndae ensures safety, transparency and support at every stage of the journey.
          </p>
        </div>

        {/* Button */}
        <Button asChild className="bg-[#F7F7F8] hover:bg-white text-[#0D0B1A] border-[0.5px] border-[#B7BECD] px-6 py-3 text-sm md:text-lg font-medium rounded-lg leading-[150%]">
          <a href="/login">Get Started</a>
        </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
