import { Link } from "react-router-dom";

interface FooterProps {
  language: "EN" | "ES";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    EN: {
      tagline: "Creating thoughtful, forward-thinking spaces",
      navigation: {
        aboutUs: "About Us",
        approach: "Approach",
        expertise: "Expertise",
        projects: "Projects",
        sustainability: "Sustainability",
        careers: "Careers",
        news: "News",
      },
      social: {
        instagram: "Instagram",
        linkedin: "LinkedIn",
      },
      contact: {
        cali: "CALI",
        address: "Carrera 20A. No.23-70, Cali, Colombia",
        phone: "+57 310 425 1070",
      },
      footer: {
        cookiePreferences: "Cookie Preferences",
        privacyPolicy: "Privacy Policy",
        websiteBy: "Website by",
        designBy: "Sago Made",
      },
    },
    ES: {
      tagline: "Creando espacios reflexivos y con visión de futuro",
      navigation: {
        aboutUs: "Sobre Nosotros",
        approach: "Enfoque",
        expertise: "Experiencia",
        projects: "Proyectos",
        sustainability: "Sostenibilidad",
        careers: "Carreras",
        news: "Noticias",
      },
      social: {
        instagram: "Instagram",
        linkedin: "LinkedIn",
      },
      contact: {
        cali: "CALI",
        address: "Carrera 20A. No.23-70, Cali, Colombia",
        phone: "+57 310 425 1070",
      },
      footer: {
        cookiePreferences: "Preferencias de Cookies",
        privacyPolicy: "Política de Privacidad",
        websiteBy: "Sitio web por",
        designBy: "Sago Made",
      },
    },
  };

  const t = content[language];

  return (
    <footer className="w-full bg-neutral-50 border-t border-neutral-200">
      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Logo & Tagline */}
          <div className="lg:col-span-3">
            <Link
              to="/"
              className="inline-block mb-6 hover:opacity-70 transition-opacity"
            >
              <img
                src="/Branding/espacio-logo.webp"
                alt="Espacio Ideal Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              {t.tagline}
            </p>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="lg:col-span-3">
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

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-3">
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

          {/* Far Right Column - Social & Contact Button */}
          <div className="lg:col-span-3 flex flex-col justify-between">
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

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
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
