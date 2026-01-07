import { ChevronDown } from "lucide-react";
import Hero from "@/components/layout/Hero";
import LanguageToggle from "@/components/layout/LanguageToggle";
import LocalTime from "@/components/layout/LocalTime";
import ProjectAccordion from "@/components/layout/ProjectAccordion";

interface HomeProps {
  language: "EN" | "ES";
  setLanguage: (lang: "EN" | "ES") => void;
}

const Home = ({ language, setLanguage }: HomeProps) => {
  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ES" : "EN");
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section - Now starts at top */}
      <Hero />

      {/* Bottom Section - Fixed */}
      <div className="fixed bottom-8 left-8 right-8 px-8 z-40">
        <div className="flex justify-between items-end text-xs">
          <LocalTime />

          <div className="flex flex-col items-center animate-bounce cursor-pointer">
            <ChevronDown className="w-8 h-8" />
          </div>

          <LanguageToggle language={language} onToggle={toggleLanguage} />
        </div>
      </div>

      {/* Project Section */}
      <ProjectAccordion />
    </div>
  );
};

export default Home;
