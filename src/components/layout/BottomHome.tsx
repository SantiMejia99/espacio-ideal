import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import LocalTime from "@/components/layout/LocalTime";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLanguage } from "@/components/LanguageContext";

const BottomHome = () => {
  const { language, toggleLanguage } = useLanguage(); // use context
  const [showChevron, setShowChevron] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (isVisible) {
          setIsVisible(false);
          timeoutId = setTimeout(() => {
            setShowChevron(false);
          }, 600);
        }
      } else {
        clearTimeout(timeoutId);
        setShowChevron(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 50);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  return (
    <div className="fixed bottom-8 left-0 right-0 px-4 sm:px-8 mx-0 sm:mx-8 z-40">
      {/* Bottom bar with time and language toggle */}
      <div className="flex justify-between items-end text-xs">
        <LocalTime />
        <LanguageToggle language={language} onToggle={toggleLanguage} />
      </div>

      {/* Centered ChevronDown - hidden on mobile and fades on scroll */}
      {showChevron && (
        <div
          className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-0 flex-col items-center animate-bounce cursor-pointer transition-opacity duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleScrollDown}
        >
          <ChevronDown className="w-8 h-8" />
        </div>
      )}
    </div>
  );
};

export default BottomHome;
