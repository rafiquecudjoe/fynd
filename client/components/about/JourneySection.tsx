export default function JourneySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-[#100E21] text-[32px] md:text-[48px] font-semibold leading-[130%] tracking-[-0.96px]">
            Our Journey
          </h2>
          <p className="text-[#100E21] text-lg md:text-xl leading-[150%]">
            FYNDAE began with a simple belief — that no one should feel
            helpless or alone when something important goes missing. What
            started as a small idea grew into a movement powered by trust,
            collaboration and community-driven impact. Every report, every
            lead, and every recovered item has shaped who we are today.
            We're building more than a platform; we're creating a safety net
            that connects people, amplifies voices and restores hope one
            recovery at a time.
          </p>
        </div>
        <div className="flex-1">
          <picture>
            <source srcSet="/images/our_journey_graphic.webp" type="image/webp" />
            <img
              src="/images/our_journey_graphic.png"
              alt="Team collaboration"
              className="w-full h-auto object-cover rounded-xl"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
      </div>
    </section>
  );
}
