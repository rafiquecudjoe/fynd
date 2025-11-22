export default function ImpactSection() {
  const stats = [
    {
      number: "500+",
      title: "Lost Items Reported",
      description:
        "People trust FYNDAE every day to alert others when something important goes missing.",
    },
    {
      number: "270+",
      title: "Successful Recoveries",
      description:
        "Meaningful wins powered by collaboration between users, communities and responders.",
    },
    {
      number: "100+",
      title: "Active Community Members",
      description:
        "A growing network of people who verify leads, share sightings and help recover items.",
    },
    {
      number: "24/7",
      title: "Real-Time Reporting",
      description:
        "Lost items don't wait and neither do we. At Fyndae, we are on top of your missing items 24/7",
    },
    {
      number: "98%",
      title: "Satisfaction Rate",
      description:
        "Our users express confidence in our reporting and recovery process with how easy it is to submit a case",
    },
    {
      number: "350+",
      title: "Happy Clients",
      description:
        "Individuals and organizations who have successfully recovered their items and verified identities through our platform.",
    },
  ];

  return (
    <section className="w-full bg-[#117465] mt-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 pb-12 md:pb-16">
      <div className="flex flex-col items-center gap-12 md:gap-16">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[140%] tracking-[-2px]">
            <span className="text-white">Our </span>
            <span className="text-[#E5FDC5]">Impact</span>
            <span className="text-white"> In Numbers</span>
          </h2>
          <p className="text-[#F4F7FB] text-lg md:text-xl leading-[150%] max-w-[1054px]">
            Every report, every sighting, every recovery tells a story and
            together, they reveal the strength of our growing community. These
            numbers reflect how far we've come and how committed we are to
            helping people find what matters most.
          </p>
        </div>

        <div className="w-full p-4 md:p-5 rounded-2xl border border-[#B8D5D1] bg-[#419084]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#F1F1F3] p-8 flex flex-col gap-6"
              >
                <div className="flex flex-col justify-center items-center gap-2.5">
                  <div className="text-[#21242C] text-[40px] md:text-[48px] font-bold leading-[140%]">
                    {stat.number}
                  </div>
                  <h3 className="text-[#0A0814] text-center text-lg md:text-xl font-semibold leading-[150%]">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-[#3F3E4D] text-center text-base leading-[150%]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
