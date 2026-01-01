import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Layout/Navigation";
import Hero from "@/components/Layout/Hero";
import LanguageToggle from "@/components/Layout/LanguageToggle";
import LocalTime from "@/components/Layout/LocalTime";

const Home = () => {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  return (
    <div className="min-h-screen w-full bg-transparent">
      {/* Navigation */}
      <Navigation language={language} />

      {/* Hero Section */}
      <Hero />

      {/* Bottom Section - Fixed */}
      <div className="fixed bottom-8 left-8 right-8 px-8 z-40">
        <div className="flex justify-between items-end text-xs">
          {/* Local Time */}
          <LocalTime />

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center animate-bounce cursor-pointer">
            <ChevronDown className="w-8 h-8" />
          </div>

          {/* Language Toggle */}
          <LanguageToggle language={language} onToggle={toggleLanguage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
