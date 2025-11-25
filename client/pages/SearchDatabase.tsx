import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import VerificationSystem from "@/components/sections/VerificationSystem";
import { Check } from "lucide-react";

export default function SearchDatabase() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#117465] to-[#0A463D] py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 md:px-20 py-12 md:py-16 flex flex-col items-center gap-6">
            <h1 className="text-white font-semibold text-3xl md:text-5xl leading-[130%] text-center max-w-4xl">
              Our Verification Search System
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-[150%] text-center max-w-5xl">
              In today's connected world, opportunities and risks often travel together. Whether you are a company hiring remote workers, an embassy, school or organization processing applications or an individual preparing to meet someone new, protecting yourself with the right information is essential. Our platform offers a secure, private and reliable second layer of safety protection. By running a quick search, you can verify whether a person, business or entity has ever been flagged in our database.
            </p>
          </div>
        </div>
      </section>



      {/* Why This Matters Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center gap-12 md:gap-16">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 max-w-3xl">
              <h2 className="text-black font-semibold text-3xl md:text-5xl leading-[140%] tracking-[-0.02em] text-center">
                Why This Matters
              </h2>
              <p className="text-[#21242C] text-lg md:text-xl leading-[150%] text-center">
                Explore answers about joining the community, submitting leads and recovering lost items securely through Fyndae.
              </p>
            </div>

            {/* Cards */}
            <div className="w-full flex flex-col gap-6">
              <div className="w-full p-6 md:p-10 flex flex-col gap-4 rounded-lg border border-[#B7BECD] bg-[#F7F7F8]">
                <h3 className="text-[#21242C] font-semibold text-xl md:text-2xl leading-[150%] text-center">
                  Companies & Recruiters:
                </h3>
                <p className="text-[#383D48] text-base md:text-lg leading-[150%] text-center">
                  Avoid costly mistakes when hiring internationally, within or outside your country by ensuring candidates are legitimate and trustworthy.
                </p>
              </div>

              <div className="w-full p-6 md:p-10 flex flex-col gap-4 rounded-lg border border-[#B7BECD] bg-[#F7F7F8]">
                <h3 className="text-[#21242C] font-semibold text-xl md:text-2xl leading-[150%] text-center">
                  Embassies & Government Agencies:
                </h3>
                <p className="text-[#383D48] text-base md:text-lg leading-[150%] text-center">
                  Strengthen due diligence by cross-checking applicants against a database of reported entities.
                </p>
              </div>

              <div className="w-full p-6 md:p-10 flex flex-col gap-4 rounded-lg border border-[#B7BECD] bg-[#F7F7F8]">
                <h3 className="text-[#21242C] font-semibold text-xl md:text-2xl leading-[150%] text-center">
                  Individuals:
                </h3>
                <p className="text-[#383D48] text-base md:text-lg leading-[150%] text-center">
                  Before going on a date, making a deal or engaging with someone you've only met online, take a simple step to protect your safety.
                </p>
              </div>

              <div className="w-full p-6 md:p-10 flex flex-col gap-4 rounded-lg border border-[#B7BECD] bg-[#F7F7F8]">
                <h3 className="text-[#21242C] font-semibold text-xl md:text-2xl leading-[150%] text-center">
                  Everyday People & Organizations:
                </h3>
                <p className="text-[#383D48] text-base md:text-lg leading-[150%] text-center">
                  When police reports are inaccessible, incomplete or unavailable, our system provides a second layer of protection, collecting reports that may never reach official records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Protects You Section */}
      <section className="w-full bg-gradient-to-b from-[#117465] to-[#0A463D] py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col items-center gap-5 text-center">
              <h2 className="font-semibold text-3xl md:text-5xl leading-[140%] tracking-[-0.02em]">
                <span className="text-white">How It </span>
                <span className="text-[#E5FDC5]">Protects </span>
                <span className="text-white">You</span>
              </h2>
              <p className="text-white text-lg md:text-xl leading-[150%] max-w-4xl">
                People who've lost valuable items with a network of community helpers ready to act.
                Track progress, stay informed and trust our secure escrow system to reward verified leads when your item is found.
              </p>
            </div>

            {/* Cards Container */}
            <div className="w-full p-2.5 rounded-[10px] border border-[#B8D5D1] bg-[#419084]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {/* Card 1 */}
                <div className="bg-white rounded-[10px] p-6 md:p-8 flex flex-col gap-4">
                  <h3 className="text-[#21242C] font-bold text-lg leading-[150%] tracking-[-0.03em] text-center">
                    Early Warning System:
                  </h3>
                  <p className="text-[#383D48] text-sm md:text-base leading-[150%] tracking-[-0.03em] text-center">
                    Helps you spot red flags before you commit to a person, partnership or opportunity.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-[10px] p-6 md:p-8 flex flex-col gap-4">
                  <h3 className="text-[#21242C] font-bold text-lg leading-[150%] tracking-[-0.03em] text-center">
                    Access Beyond Police Records:
                  </h3>
                  <p className="text-[#383D48] text-sm md:text-base leading-[150%] tracking-[-0.03em] text-center">
                    Our system rather complements and not replaces law enforcement, offering insights from reports that may not have reached the police or were not formally recorded.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-[10px] p-6 md:p-8 flex flex-col gap-4">
                  <h3 className="text-[#21242C] font-bold text-lg leading-[150%] tracking-[-0.03em] text-center">
                    Peace of Mind:
                  </h3>
                  <p className="text-[#383D48] text-sm md:text-base leading-[150%] tracking-[-0.03em] text-center">
                    Whether it's business or personal, you'll feel confident knowing you've taken proactive steps to safeguard yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center gap-12 md:gap-20">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 max-w-3xl">
              <h2 className="text-black font-semibold text-3xl md:text-5xl leading-[140%] tracking-[-0.02em] text-center">
                Our Pricing
              </h2>
              <p className="text-[#21242C] text-lg md:text-xl leading-[150%] text-center">
                Explore answers about joining the community, submitting leads and recovering lost items securely through Fyndae.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* One Time Access */}
              <div className="flex flex-col gap-10 p-6 md:p-10 rounded-3xl border border-[#B5B5BC] bg-[#F7F7F8]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#21242C] font-bold text-2xl md:text-3xl leading-[150%] tracking-[-0.02em] text-center">
                    One Time Access
                  </h3>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-[#21242C] font-medium text-lg leading-[150%] text-center">
                    Available Features
                  </p>
                  
                  <div className="flex flex-col gap-5 px-0 md:px-8">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        1-time access to the database
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        Instant search results
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        No subscription required
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        Best for single verifications
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                  <p className="text-[#21242C] font-bold text-4xl md:text-5xl leading-[140%]">
                    $5
                  </p>
                  <button className="w-full px-6 py-3 rounded-lg border border-[#117465] bg-[#F7F7F8] text-[#117465] font-medium text-base leading-[150%] hover:bg-[#117465] hover:text-white transition-colors">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Monthly Plan - Highlighted */}
              <div className="flex flex-col gap-10 p-6 md:p-10 rounded-3xl border border-[#B5B5BC] bg-gradient-to-b from-[#117465] to-[#0A463D]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold text-2xl md:text-3xl leading-[150%] tracking-[-0.02em] text-center">
                    Monthly Plan
                  </h3>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-white font-medium text-lg leading-[150%] text-center">
                    Available Features
                  </p>
                  
                  <div className="flex flex-col gap-5 px-0 md:px-8">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5FDC5] flex-shrink-0">
                        <Check className="w-4 h-4 text-[#117465]" strokeWidth={3} />
                      </div>
                      <p className="text-white text-sm leading-[130%]">
                        Access to the database for 30 days
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5FDC5] flex-shrink-0">
                        <Check className="w-4 h-4 text-[#117465]" strokeWidth={3} />
                      </div>
                      <p className="text-white text-sm leading-[130%]">
                        50 verification searches per month
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5FDC5] flex-shrink-0">
                        <Check className="w-4 h-4 text-[#117465]" strokeWidth={3} />
                      </div>
                      <p className="text-white text-sm leading-[130%]">
                        Smart alerts & notifications
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5FDC5] flex-shrink-0">
                        <Check className="w-4 h-4 text-[#117465]" strokeWidth={3} />
                      </div>
                      <p className="text-white text-sm leading-[130%]">
                        Highest value plan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                  <p className="text-white font-bold text-4xl md:text-5xl leading-[140%]">
                    $15<span className="text-lg font-normal">/month</span>
                  </p>
                  <button className="w-full px-6 py-3 rounded-lg bg-[#E5FDC5] text-[#21242C] font-medium text-lg leading-[150%] hover:bg-[#d5edb5] transition-colors">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Weekly Plan */}
              <div className="flex flex-col gap-10 p-6 md:p-10 rounded-3xl border border-[#B5B5BC] bg-[#F7F7F8]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#21242C] font-bold text-2xl md:text-3xl leading-[150%] tracking-[-0.02em] text-center">
                    Weekly Plan
                  </h3>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-[#21242C] font-medium text-lg leading-[150%] text-center">
                    Available Features
                  </p>
                  
                  <div className="flex flex-col gap-5 px-0 md:px-8">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        Access to the database for 7 days
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        20 verification searches per week
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        Alerts on search updates
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#117465] flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#383D48] text-sm leading-[130%]">
                        Priority support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                  <p className="text-[#21242C] font-bold text-4xl md:text-5xl leading-[140%]">
                    $20<span className="text-lg font-normal">/week</span>
                  </p>
                  <button className="w-full px-6 py-3 rounded-lg border border-[#117465] bg-[#F7F7F8] text-[#117465] font-medium text-base leading-[150%] hover:bg-[#117465] hover:text-white transition-colors">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification System Section */}
      <VerificationSystem 
        title="How It Works"
        description="Fyndae offers a paid verification lookup system allowing users to securely search our database"
        className="bg-[#F7F7F8]"
        ctaLink="/search-entities"
      />

      <Footer />
    </div>
  );
}
