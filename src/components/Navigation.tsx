import { useState } from "react";
import { Link } from "react-router-dom";
import navigationInfo from "@/pages/info/navigationInfo.json";
import { useLanguage } from "@/components/LanguageContext";

const Navigation = () => {
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use the imported JSON data
  const nav = navigationInfo.nav;
  const description = navigationInfo.description;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-8 left-0 right-0 mx-8 z-50 px-8 py-6 bg-transparent">
        <div className="flex items-start w-full">
          {/* Left Side - Logo and Description */}
          <div className="flex gap-8 items-start">
            {/* Logo */}
            <Link to="/" className="hover:opacity-60 transition-opacity">
              <img
                src="/Branding/espacio-logo.webp"
                alt="Espacio Ideal Logo"
                className="h-4 w-auto"
              />
            </Link>

            {/* Description Text */}
            <div className="text-sm gap-4 text-black leading-none!">
              <span>
                {description[language].leading} {description[language].detail}
              </span>
              <span className="flex items-center gap-2">
                {description[language].location}
                <span className="inline-block">🇨🇴</span>
              </span>
            </div>
          </div>

          {/* Right Side - Navigation Menu */}
          <div className="ml-auto flex gap-8 text-sm font-normal leading-none!">
            {/* Home */}
            <Link
              to="/"
              className="text-sm font-normal hover:opacity-60 transition-opacity"
            >
              {nav[language].home}
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="text-sm font-normal hover:opacity-60 transition-opacity"
            >
              {nav[language].about}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="text-sm font-normal hover:opacity-60 transition-opacity"
            >
              {nav[language].contact}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Logo */}
            <div className="flex flex-col gap-1">
              <Link to="/" className="hover:opacity-60 transition-opacity">
                <img
                  src="/Branding/espacio-logo.webp"
                  alt="Espacio Ideal Logo"
                  className="h-5 w-auto"
                />
              </Link>
            </div>

            {/* Right Side - Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-neutral-100 transition-colors rounded"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : ""
                }`}
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 bg-white border-t border-neutral-200">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-normal hover:opacity-60 transition-opacity"
            >
              {nav[language].home}
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-normal hover:opacity-60 transition-opacity"
            >
              {nav[language].about}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-normal hover:opacity-60 transition-opacity"
            >
              {nav[language].contact}
            </Link>

            {/* Location */}
            <div className="pt-4 mt-4 border-t border-neutral-200 text-xs text-neutral-500 flex items-center gap-2">
              {description[language].location}
              <span className="inline-block">🇨🇴</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
