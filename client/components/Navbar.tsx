import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 md:px-6 py-4 md:py-3 bg-white border-t border-b border-[#F1F1F3] md:border-0 md:shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <picture>
            <source srcSet="/images/fyndae-logo.webp" type="image/webp" />
            <img
              src="/images/fyndae-logo.png"
              alt="Fyndae Logo"
              width={90}
              height={30}
              loading="eager"
              className="w-20 md:w-[90px] h-auto"
            />
          </picture>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center h-full">
          <Link
            to="/"
            className="text-gray-800 font-medium text-base hover:text-green-600 transition-colors flex items-center h-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 font-medium text-base hover:text-green-600 transition-colors flex items-center h-full"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 font-medium text-base hover:text-green-600 transition-colors flex items-center h-full"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 h-full">
          <button className="hidden lg:flex px-6 py-2.5 items-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium text-base hover:bg-gray-50 transition-colors whitespace-nowrap h-full">
            Search Database
          </button>
          <Link
            to="/login"
            className="flex px-4 lg:px-6 py-2.5 items-center gap-2 rounded-lg bg-green-70 text-white font-medium text-sm lg:text-base hover:bg-green-70/90 transition-colors whitespace-nowrap h-full"
          >
            Register / Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 text-[#262626] hover:bg-gray-100 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={34} strokeWidth={1.5} />
          ) : (
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.25 9.5625C4.25 8.9757 4.7257 8.5 5.3125 8.5H28.6875C29.2743 8.5 29.75 8.9757 29.75 9.5625C29.75 10.1493 29.2743 10.625 28.6875 10.625H5.3125C4.7257 10.625 4.25 10.1493 4.25 9.5625ZM4.25 17C4.25 16.4132 4.7257 15.9375 5.3125 15.9375H28.6875C29.2743 15.9375 29.75 16.4132 29.75 17C29.75 17.5868 29.2743 18.0625 28.6875 18.0625H5.3125C4.7257 18.0625 4.25 17.5868 4.25 17ZM15.9375 24.4375C15.9375 23.8507 16.4132 23.375 17 23.375H28.6875C29.2743 23.375 29.75 23.8507 29.75 24.4375C29.75 25.0243 29.2743 25.5 28.6875 25.5H17C16.4132 25.5 15.9375 25.0243 15.9375 24.4375Z"
                fill="#262626"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 pt-6 border-t border-gray-200 flex flex-col gap-4 bg-gray-50 rounded-lg p-4">
          <Link
            to="/"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/about"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="px-4 py-3 text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <button className="w-full px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium text-base leading-[150%] hover:bg-gray-50 transition-colors">
              Search Database
            </button>
            <Link
              to="/login"
              className="w-full px-6 py-3 rounded-lg bg-green-70 text-white font-medium text-base leading-[150%] hover:bg-green-70/90 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Register / Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
