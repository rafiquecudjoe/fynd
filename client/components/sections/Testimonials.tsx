import { Star, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-4 sm:px-6">
        <div className="md:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-15">
            {/* Header */}
            <div className="flex flex-col items-center justify-center gap-4 md:gap-5 text-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[140%] tracking-[-2px] md:tracking-tight">
                <span className="text-[#0A0814]">Real Stories From The </span>
                <span className="text-[#117465]">Fyndae</span>
                <span className="text-[#0A0814]"> Community</span>
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-[#21242C] leading-[130%] md:leading-relaxed max-w-4xl">
                Don't take our word for it. Hear it from the people who trusted
                us and got their missing items back
              </p>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col gap-5 md:gap-5 mt-6 md:mt-12">
              {/* Mobile: Video + Card Stack */}
              <div className="flex flex-col gap-5 md:hidden">
                {/* Video Card */}
                <div className="w-full h-[393px] rounded-[20px] bg-gradient-to-br from-[#117465] to-[#117465] flex items-center justify-center relative overflow-hidden">
                  <picture>
                    <source
                      srcSet="/images/lerato-testimonial.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/lerato-testimonial.png"
                      alt="Lerato D testimonial video"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                  <button className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white hover:bg-gray-100 transition-colors relative z-10">
                    <Play className="w-7 h-7 text-[#117465] fill-[#117465] ml-1" />
                  </button>
                </div>

                {/* Testimonial Card */}
                <div className="bg-[#F7F7F8] rounded-[20px] p-10 flex flex-col justify-center gap-6 relative">
                  {/* Quote Icon */}
                  <svg
                    className="w-10 h-7 absolute right-7 top-7 opacity-100"
                    viewBox="0 0 40 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4065_718)">
                      <path
                        d="M8.48735 18.7635C7.73161 22.928 6.47698 25.9193 5.47673 27.7721C5.08651 28.4963 5.88424 29.3024 6.59305 28.8857C14.963 23.9871 18.6331 16.8413 19.09 11.1117C19.4827 6.1684 16.1263 1.07877 11.0386 0.151127C5.94845 -0.774035 1.07564 2.61657 0.151957 7.72853C-0.816183 13.086 2.94524 18.2327 8.48735 18.7635Z"
                        fill="#117465"
                      />
                      <path
                        d="M29.3716 18.7642C28.6159 22.9286 27.3612 25.9199 26.361 27.7727C25.9708 28.497 26.7685 29.3031 27.4773 28.8864C35.8473 23.9877 39.5173 16.8419 39.9742 11.1124C40.3669 6.16906 37.0105 1.07943 31.9228 0.151783C26.8352 -0.77586 21.9599 2.61723 21.0387 7.72671C20.0705 13.0842 23.832 18.2309 29.3741 18.7617L29.3716 18.7642Z"
                        fill="#117465"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4065_718">
                        <rect width="40" height="29" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-[#0A463D] text-[#0A463D]"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-[#100E21] leading-[150%]">
                      My work laptop was stolen and I was devastated. A friend
                      told me about Fyndae and I gave it a shot. Within two
                      days, I got an anonymous tip that led to it's recovery. I
                      am still amazed. This is the real game changer.
                    </p>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-base font-semibold text-[#1D1D1D] leading-[150%]">
                      Lerato D. CapeTown
                    </h4>
                    <p className="text-sm text-[#3F3E4D] leading-[130%]">
                      Fyndae User
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop: Side by Side */}
              <div className="hidden md:flex flex-col lg:flex-row items-start gap-5">
                <div className="w-full lg:w-[353px] h-[393px] rounded-[20px] bg-gradient-to-br from-[#117465] to-[#117465] flex items-center justify-center relative overflow-hidden">
                  <picture>
                    <source
                      srcSet="/images/lerato-testimonial.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/lerato-testimonial.png"
                      alt="Lerato D testimonial video"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                  <button className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white hover:bg-gray-100 transition-colors relative z-10">
                    <Play className="w-7 h-7 text-[#117465] fill-[#117465] ml-1" />
                  </button>
                </div>

                <div className="flex-1 bg-[#F7F7F8] rounded-[20px] p-10 flex flex-col justify-center gap-6 min-h-[393px] relative">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-[#0A463D] text-[#0A463D]"
                        />
                      ))}
                    </div>
                    <p className="text-xl text-[#100E21] leading-relaxed">
                      My work laptop was stolen and I was devastated. A friend
                      told me about Fyndae and I gave it a shot. Within two
                      days, I got an anonymous tip that led to it's recovery. I
                      am still amazed. This is the real game changer.
                    </p>
                  </div>

                  <div className="w-full h-px bg-[#FCFCFE]"></div>

                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-xl font-semibold text-[#1D1D1D]">
                      Lerato D. CapeTown
                    </h4>
                    <p className="text-base text-[#3F3E4D]">Fyndae User</p>
                  </div>

                  <svg
                    className="w-[78px] h-14 absolute right-8 top-8 opacity-30"
                    viewBox="0 0 78 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    display="none"
                  >
                    <path
                      d="M16.5464 36.2329C15.0727 44.2747 12.6262 50.0509 10.6757 53.6288C9.91479 55.0273 11.4704 56.5839 12.8525 55.7793C29.174 46.3198 36.3306 32.521 37.2215 21.457C37.9873 11.9113 31.4423 2.08307 21.5214 0.291764C11.5956 -1.49476 2.0936 5.05263 0.29241 14.924C-1.59546 25.2695 5.73931 35.208 16.5464 36.2329Z"
                      fill="#117465"
                    />
                    <path
                      d="M57.2682 36.2332C55.7945 44.2749 53.3479 50.0512 51.3975 53.629C50.6365 55.0276 52.1921 56.5842 53.5743 55.7796C69.8957 46.3201 77.0523 32.5213 77.9433 21.4573C78.709 11.9116 72.1641 2.08336 62.2431 0.292055C52.3221 -1.49926 42.8153 5.05292 41.019 14.9195C39.1311 25.265 46.4659 35.2034 57.273 36.2284L57.2682 36.2332Z"
                      fill="#117465"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-5 md:mt-8">
              <button className="flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-[#CFE3E0] hover:bg-[#CFE3E0]/20 transition-colors">
                <ChevronLeft className="w-8 h-8 text-[#CFE3E0]" />
              </button>
              <button className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0A463D] hover:bg-[#117465] transition-colors">
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
