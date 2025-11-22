export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#117465] to-[#0A463D] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Column - Badge + Heading */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-5">
            <div className="inline-flex px-4 py-2 items-center gap-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm w-fit">
              <span className="text-white font-medium text-sm leading-[140%] tracking-wide">
                Welcome To Fyndae
              </span>
            </div>
            <h1 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[120%] text-white tracking-tight">
              Where Cybersecurity Meets{" "}
              <span className="text-[#E5FDC5]">Excellence!</span>
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="flex-1">
            <p className="text-white/90 text-base md:text-lg leading-[160%]">
              Fyndae is a human security and trust intelligence platform created
              to protect people, property and peace of mind. In a world where
              trust is often uncertain, belongings get lost and personal or
              professional engagements require verification, Fyndae serves as a
              digital layer of safety built around community-powered intelligence
              and verified identity interactions. We help individuals and
              organizations recover lost items, verify people before hiring or
              partnering and build trustworthy engagements with confidence.
              Through our reward-driven ecosystem, users are incentivized to
              report, help locate and return lost items transforming everyday
              communities into powerful networks of recovery and protection. Our
              verification engine allows employers, landlords, gig platforms,
              embassies, buyers and everyday people to conduct trust checks on
              individuals before entering into any form of engagement.
            </p>
          </div>
        </div>
        
        <div className="w-full mt-8 -mb-8 md:-mb-12">
          <img
            src="/images/hero_image.png"
            alt="Fyndae team working"
            className="w-full h-auto object-cover rounded-t-2xl"
          />
        </div>
      </div>
    </section>
  );
}
