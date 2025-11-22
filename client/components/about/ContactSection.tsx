import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#117465] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-8 md:pt-12 pb-12 md:pb-16 flex flex-col items-center gap-6">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white text-[32px] md:text-[48px] font-semibold leading-[130%]">
            Get In Touch
          </h2>
        </div>
        <p className="text-white/90 text-center text-base md:text-lg leading-[150%] max-w-[737px]">
          Feel free to reach out to us using the form below and one of our
          dedicated team member will respond to your inquiries promptly.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm px-6 md:px-16 py-10 md:py-12 flex flex-col items-center gap-8 md:gap-10">
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <label className="text-[#0A0814] text-lg font-semibold leading-[150%]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="px-5 py-5 rounded-md border border-[#B7BECD] bg-[#F7F7F8] text-[#3F3E4D] text-base leading-[150%] outline-none focus:ring-2 focus:ring-[#117465]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#0A0814] text-lg font-semibold leading-[150%]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="px-5 py-5 rounded-md border border-[#B7BECD] bg-[#F7F7F8] text-[#3F3E4D] text-base leading-[150%] outline-none focus:ring-2 focus:ring-[#117465]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <label className="text-[#0A0814] text-lg font-semibold leading-[150%]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="px-5 py-5 rounded-md border border-[#B7BECD] bg-[#F7F7F8] text-[#3F3E4D] text-base leading-[150%] outline-none focus:ring-2 focus:ring-[#117465]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#0A0814] text-lg font-semibold leading-[150%]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="px-5 py-5 rounded-md border border-[#B7BECD] bg-[#F7F7F8] text-[#3F3E4D] text-base leading-[150%] outline-none focus:ring-2 focus:ring-[#117465]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[#0A0814] text-lg font-semibold leading-[150%]">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              className="px-5 py-5 rounded-md border border-[#B7BECD] bg-[#F7F7F8] text-[#3F3E4D] text-base leading-[150%] outline-none focus:ring-2 focus:ring-[#117465]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[#0A0814] text-lg font-semibold leading-[150%]">
              Message
            </label>
            <textarea
              placeholder="Enter Message"
              rows={6}
              className="px-5 py-5 rounded-md border border-[#B7BECD] bg-[#F7F7F8] text-[#3F3E4D] text-base leading-[150%] outline-none focus:ring-2 focus:ring-[#117465] resize-none"
            />
          </div>

          <button className="px-6 py-3 bg-white rounded-lg text-[#117465] text-lg font-medium leading-[150%] hover:bg-white/90 transition-colors w-fit">
            Send Your Message
          </button>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm px-6 md:px-16 py-10 flex flex-wrap items-start gap-6">
        <div className="flex-1 min-w-[200px] flex items-center justify-center gap-3.5 px-8 py-8 rounded-lg border border-white/20 bg-white/5">
          <div className="flex items-center justify-center p-3 rounded-md border border-white/20">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/90 text-center text-base leading-[150%]">
            support@fyndae.com
          </span>
        </div>

        <div className="flex-1 min-w-[200px] flex items-center justify-center gap-3.5 px-8 py-8 rounded-lg border border-white/20 bg-white/5">
          <div className="flex items-center justify-center p-3 rounded-md border border-white/20">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/90 text-center text-base leading-[150%]">
            +234 - 898 -853 -99
          </span>
        </div>

        <div className="flex-1 min-w-[200px] flex items-center justify-center gap-3.5 px-8 py-8 rounded-lg border border-white/20 bg-white/5">
          <div className="flex items-center justify-center p-3 rounded-md border border-white/20">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/90 text-center text-base leading-[150%]">
            Johannesburg, South Africa
          </span>
        </div>

        <div className="flex items-center justify-center gap-3.5 px-8 py-8 rounded-lg border border-white/20 bg-white/5">
          <div className="flex items-start gap-2.5">
            <div className="flex items-center justify-center p-3 rounded-md border border-white/20">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center justify-center p-3 rounded-md border border-white/20">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center justify-center p-3 rounded-md border border-white/20">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
