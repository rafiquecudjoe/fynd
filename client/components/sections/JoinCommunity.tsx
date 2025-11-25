import { Lock, Users, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JoinCommunity() {
  return (
    <section className="w-full bg-gradient-to-b from-[#117465] to-[#0A463D] py-10 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-4 sm:px-6">
        <div className="md:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-15">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4 md:gap-5 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[140%] tracking-[-2px] md:tracking-tight">
            <span className="text-white">Become Part of Our </span>
            <span className="text-[#E5FDC5]">Trusted </span>
            <span className="text-white">Community</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-white leading-[130%] md:leading-relaxed max-w-4xl">
            Join thousands of community members who provide timely information, support their neighborhoods and help reunite people with lost possessions and loved ones while earning verified rewards
          </p>
        </div>

        {/* Community Cards Container */}
        <div className="bg-[#419084] border-[0.5px] border-[#B8D5D1] rounded-2xl p-4 md:p-5">
          <div className="flex flex-col gap-2.5 md:gap-5 md:grid md:grid-cols-1 lg:grid-cols-3">
            <CommunityCard
              icon={<Lock className="w-8 h-8 md:w-9 md:h-9 text-[#383D48]" />}
              title="Join our private network"
              description="Join our exclusive community heroes dedicated to finding what's lost safely, anonymously while getting paid for it."
              isMobile={true}
            />
            <CommunityCard
              icon={<Users className="w-8 h-8 md:w-9 md:h-9 text-[#383D48]" />}
              title="Get added to a community  "
              description="Our platform places you in the right community circle based on your location safely and privately."
              isMobile={true}
            />
            <CommunityCard
              icon={<Bell className="w-7 h-7 md:w-8 md:h-8 text-[#383D48]" />}
              title="Get missing item alerts"
              description="We'll notify you when something is missing around your location. If you spot it, report it and we pay you"
              isMobile={true}
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button asChild className="bg-[#F7F7F8] hover:bg-white text-[#0D0B1A] border-[0.5px] border-[#B7BECD] px-6 py-3 text-sm md:text-lg font-medium rounded-lg leading-[150%]">
            <a href="/login">Join Our Community</a>
          </Button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isMobile?: boolean;
}

function CommunityCard({ icon, title, description, isMobile = false }: CommunityCardProps) {
  return (
    <div className="bg-white border border-[#F1F1F3] rounded-2xl p-6 md:p-7 flex flex-col gap-6 min-h-[251px]">
      <div className="flex flex-col items-center justify-center gap-2.5 text-center">
        <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-[#E5FDC5]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#0A0814] leading-[150%]">{title}</h3>
      </div>
      <p className="text-sm text-[#383D48] text-center leading-[130%]">
        {description}
      </p>
    </div>
  );
}
