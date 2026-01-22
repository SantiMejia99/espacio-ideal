import { useState } from "react";
import Navigation from "@/components/Navigation";
import BottomHome from "@/components/layout/BottomHome";
import ProjectAccordion from "@/components/layout/ProjectAccordion";
import ThreeDHero from "@/components/layout/ThreeDHero";

const Home = () => {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        {/* Navigation */}
        <Navigation language={language} />
        {/* Hero Section - Add your hero content here */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 mx-0 sm:mx-8">
          {/* Project Section */}
          <ThreeDHero />
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              {language === "EN"
                ? "Welcome to Espacio Ideal"
                : "Bienvenido a Espacio Ideal"}
            </h1>
            <p className="text-xl text-neutral-600">
              {language === "EN"
                ? "Creating thoughtful, forward-thinking spaces"
                : "Creando espacios reflexivos y con visión de futuro"}
            </p>
          </div>
        </section>

        {/* Add more sections here as needed */}
      </main>

      {/* Bottom Home Component (includes fixed bottom bar, projects, and footer) */}
      <BottomHome language={language} onLanguageToggle={toggleLanguage} />

      {/* Project Section */}
      <ProjectAccordion />
    </div>
  );
};

export default Home;
