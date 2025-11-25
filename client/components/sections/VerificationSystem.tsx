import { Search, Shield, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VerificationSystemProps {
  title?: string;
  description?: string;
  className?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function VerificationSystem({
  title = "Our Verification System",
  description = "Fyndae offers a paid verification lookup system allowing users to securely search our database for key information about individuals, businesses and institutions to ensure users always have clarity before taking the next step.",
  className = "bg-white",
  ctaText = "Search Database",
  ctaLink = "/search-entities",
}: VerificationSystemProps) {
  return (
    <section className={`w-full py-8 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-4 sm:px-6">
        <div className="md:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout */}
            <div className="flex flex-col gap-12 md:hidden">
              {/* Header - Mobile */}
              <div className="flex flex-col gap-5 text-center">
                <h2 className="text-2xl font-semibold leading-[140%] tracking-[-2px] text-[#0A0814]">
                  {title}
                </h2>
                <p className="text-sm text-[#21242C] leading-[130%]">
                  {description}
                </p>
              </div>

              {/* Illustration Card - Mobile */}
              <div className="flex flex-col items-center gap-[13.412px] p-7 rounded-2xl border-[0.671px] border-[#419084] bg-gradient-to-b from-[#117465] to-[#0A463D] relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "url('/images/cdn/verification-pattern.png')",
                    backgroundSize: "67px 67px",
                    backgroundRepeat: "repeat",
                  }}
                ></div>
                <img
                  src="/images/cdn/verification-illustration.png"
                  alt="Verification illustration"
                  className="w-full max-w-[302px] h-auto object-contain relative z-10"
                />
              </div>

              {/* Verification Steps - Mobile */}
              <div className="flex flex-col gap-2.5 p-2.5 rounded-3xl bg-[#F7F7F8]">
                {/* Step 1 */}
                <div className="bg-white rounded-[10px] border-[0.5px] border-[#B7BECD] p-4 flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-md border-[0.5px] border-[#B7BECD] bg-[#F7F7F8]">
                      <Search className="w-7 h-7 text-[#0A463D]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#21242C] text-center leading-[150%]">
                      Submit a Search Request
                    </h3>
                  </div>
                  <p className="text-sm text-[#383D48] text-center leading-[130%]">
                    Choose what you want to verify — a person, business,
                    institution or an agency and enter the details. Our system
                    instantly begins scanning our database.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-[10px] border-[0.5px] border-[#B7BECD] p-4 flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-md border-[0.5px] border-[#B7BECD] bg-[#F7F7F8]">
                      <Shield className="w-7 h-7 text-[#0A463D]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#21242C] text-center leading-[150%]">
                      Secure Database Lookup
                    </h3>
                  </div>
                  <p className="text-sm text-[#383D48] text-center leading-[130%]">
                    Fyndae cross checks your request against verified records,
                    historical entries, documents and identity information
                    stored safely in our system.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-[10px] border-[0.5px] border-[#B7BECD] p-10 flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-md border-[0.5px] border-[#B7BECD] bg-[#F7F7F8]">
                      <FileCheck className="w-7 h-7 text-[#0A463D]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#21242C] text-center leading-[150%]">
                      Get a Verified Report
                    </h3>
                  </div>
                  <p className="text-sm text-[#383D48] text-center leading-[130%]">
                    Receive a clear, detailed verification result you can rely
                    on helping you make safe, informed decisions with complete
                    confidence.
                  </p>
                </div>
              </div>

              {/* Button - Mobile */}
              <div className="flex justify-center">
                <a href={ctaLink}>
                  <Button className="bg-[#117465] hover:bg-[#0A463D] text-white px-6 py-3 text-sm font-medium rounded-lg leading-[150%]">
                    {ctaText}
                  </Button>
                </a>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col lg:flex-row items-start gap-12 lg:gap-12">
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex flex-col gap-5 text-center">
                  <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#0A0814]">
                    {title}
                  </h2>
                  <p className="text-lg md:text-xl text-[#21242C] leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="w-full h-[407px] rounded-3xl border border-[#419084] bg-gradient-to-br from-[#0A463D] to-[#0A463D] p-10 flex items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "url('/images/cdn/verification-pattern.png')",
                      backgroundSize: "100px 100px",
                      backgroundRepeat: "repeat",
                    }}
                  ></div>
                  <img
                    src="/images/cdn/verification-illustration.png"
                    alt="Verification illustration"
                    className="w-full max-w-[450px] h-auto object-contain relative z-10"
                  />
                </div>
              </div>

              <div className="flex-1 bg-[#F7F7F8] rounded-xl p-2.5">
                <div className="flex flex-col gap-2.5">
                  <VerificationCard
                    icon={<Search className="w-7 h-7 text-[#0A463D]" />}
                    title="Submit a Search Request"
                    description="Choose what you want to verify — a person, business, institution or an agency and enter the details. Our system instantly begins scanning our database."
                  />
                  <VerificationCard
                    icon={<Shield className="w-7 h-7 text-[#0A463D]" />}
                    title="Secure Database Lookup"
                    description="Fyndae cross checks your request against verified records, historical entries, documents and identity information stored safely in our system."
                  />
                  <VerificationCard
                    icon={<FileCheck className="w-7 h-7 text-[#0A463D]" />}
                    title="Get a Verified Report"
                    description="Receive a clear, detailed verification result you can rely on  helping you make safe, informed decisions with complete confidence."
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 hidden md:flex justify-center">
              <a href={ctaLink}>
                <Button className="bg-[#117465] hover:bg-[#0A463D] text-white px-6 py-3 text-lg font-medium rounded-lg">
                  {ctaText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerificationCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-[10px] border border-[#B7BECD] p-10 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-md border border-[#B7BECD] bg-[#F7F7F8]">
          {icon}
        </div>
        <h3 className="flex-1 text-2xl font-semibold text-[#21242C]">
          {title}
        </h3>
      </div>
      <p className="text-base text-[#383D48] leading-relaxed">{description}</p>
    </div>
  );
}
