import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="px-6 md:px-20 py-6">
          <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-8">
          <div className="lg:w-[330px] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <picture>
                <source srcSet="/images/fyndae-logo.webp" type="image/webp" />
                <img 
                  src="/images/fyndae-logo.png"
                  alt="Fyndae Logo"
                  width={90}
                  height={30}
                  className="w-[90px] h-auto"
                  loading="lazy"
                />
              </picture>
              <p className="text-base text-[#3F3E4D] leading-relaxed">
                Helping you recover what matters most. We connect people, technology and community to securely track, verify and recover missing items.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Facebook className="w-6 h-6 text-[#0A463D] fill-[#0A463D]" />
              </a>
              <a href="https://x.com/FyndaeInfo" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Twitter className="w-6 h-6 text-[#0A463D] fill-[#0A463D]" />
              </a>
              <a href="https://www.instagram.com/fyndae_world/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Instagram className="w-6 h-6 text-[#0A463D]" strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/company/fyndae01" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-6 h-6 text-[#0A463D] fill-[#0A463D]" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Youtube className="w-6 h-6 text-[#0A463D] fill-[#0A463D]" />
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-semibold text-[#0A0814]">Navigation</h3>
              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Home</Link>
                <a href="/#features" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Features</a>
                <a href="/#about" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">About Us</a>
                <a href="mailto:Info@fyndae.com" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Contact</a>
              </nav>
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-semibold text-[#0A0814]">Company</h3>
              <nav className="flex flex-col gap-4">
                <a href="/#how-it-works" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">How It Works</a>
                <Link to="/login" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Report An Item</Link>
                <Link to="/login" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Join The Community</Link>
                <a href="/#faq" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">FAQ</a>
              </nav>
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="text-xl font-semibold text-[#0A0814]">Legal</h3>
              <nav className="flex flex-col gap-4">
                <Link to="/privacy-policy" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Privacy Policy</Link>
                <Link to="/terms-and-conditions" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Terms & Condition</Link>
                <Link to="/terms-and-conditions" className="text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">Reward Policy</Link>
              </nav>
            </div>

            <div className="flex flex-col gap-7">
              <h3 className="text-xl font-bold text-[#170F49]">Contacts us</h3>
              <div className="flex flex-col gap-0">
                <a href="mailto:Info@fyndae.com" className="flex items-center gap-1.5 text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">
                  <Mail className="w-5 h-5 text-[#117465]" strokeWidth={1.4} />
                  <span>Info@fyndae.com</span>
                </a>
              </div>
              <div className="flex flex-col gap-0">
                <a href="tel:+27782027076" className="flex items-center gap-1.5 text-base text-[#3F3E4D] hover:text-[#117465] transition-colors">
                  <Phone className="w-5 h-5 text-[#117465]" strokeWidth={1.4} />
                  <span>+27 78 202 7076</span>
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#117465] shrink-0 mt-1" strokeWidth={1.4} />
                <span className="text-base text-[#3F3E4D]">Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#EAEEF5] my-4"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-[#3F3E4D]">Copyright © 2025 Fyndae</p>
          <p className="text-sm text-[#3F3E4D] text-center md:text-right">
            All Rights Reserved | 
            <Link to="/terms-and-conditions" className="text-[#117465] hover:underline"> Terms and Conditions</Link> | 
            <Link to="/privacy-policy" className="text-[#117465] hover:underline"> Privacy Policy</Link>
          </p>
        </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
