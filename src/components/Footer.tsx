import { Link } from "react-router-dom";
import footerInfo from "@/pages/info/footerInfo.json";
import { useLanguage } from "@/components/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const t = footerInfo[language];

  return (
    <footer className="w-full bg-neutral-50 border-t border-neutral-200">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-8 mx-0 sm:mx-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Half */}
          <div className="flex-1 flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Logo & Tagline */}
            <div className="flex-1 shrink-0">
              <Link
                to="/"
                className="inline-block mb-6 hover:opacity-70 transition-opacity"
              >
                <img
                  src="/Branding/espacio-logo.webp"
                  alt="Espacio Ideal Logo"
                  className="h-10 sm:h-12 lg:h-14 w-auto"
                />
              </Link>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                {t.tagline}
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1">
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/about"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.navigation.aboutUs}
                </Link>
                <Link
                  to="/approach"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.navigation.approach}
                </Link>
                <Link
                  to="/expertise"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.navigation.expertise}
                </Link>
                <Link
                  to="/projects"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.navigation.projects}
                </Link>
                <Link
                  to="/sustainability"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.navigation.sustainability}
                </Link>
                <Link
                  to="/careers"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.navigation.careers}
                </Link>
                <Link
                  to="/news"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.navigation.news}
                </Link>
              </nav>
            </div>
          </div>

          {/* Right Half */}
          <div className="flex-1 flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-2">
                    {t.contact.cali}
                  </p>
                  <p className="text-sm text-neutral-900 mb-1">
                    {t.contact.address}
                  </p>
                  <a
                    href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    {t.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Contact Button */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex flex-col space-y-3 mb-8 lg:mb-0">
                <a
                  href="https://instagram.com/espacioideal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.social.instagram}
                </a>
                <a
                  href="https://linkedin.com/company/espacioideal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {t.social.linkedin}
                </a>
              </div>

              <Link
                to="/contact"
                className="inline-block bg-neutral-900 text-white text-sm px-8 py-3 hover:bg-neutral-700 transition-colors text-center"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="px-4 sm:px-8 mx-0 sm:mx-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-500">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <button className="hover:text-neutral-900 transition-colors">
                {t.footer.cookiePreferences}
              </button>
              <Link
                to="/privacy"
                className="hover:text-neutral-900 transition-colors"
              >
                {t.footer.privacyPolicy}
              </Link>
            </div>
            <p className="tracking-wider">
              {t.footer.websiteBy}{" "}
              <span className="font-semibold">{t.footer.designBy}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
