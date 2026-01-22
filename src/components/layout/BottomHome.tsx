import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import LocalTime from "@/components/layout/LocalTime";
import LanguageToggle from "@/components/layout/LanguageToggle";

interface BottomHomeProps {
  language: "EN" | "ES";
  onLanguageToggle: () => void;
}

const BottomHome = ({ language, onLanguageToggle }: BottomHomeProps) => {
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
        // Scrolled down - start fade out
        if (isVisible) {
          setIsVisible(false);
          // Wait for animation to complete before unmounting
          timeoutId = setTimeout(() => {
            setShowChevron(false);
          }, 600);
        }
      } else {
        // Scrolled back to top - show chevron again
        clearTimeout(timeoutId);
        setShowChevron(true);
        // Small delay to ensure element is mounted before fading in
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
    <>
      {/* Bottom Section - Fixed */}
      <div className="fixed bottom-8 left-0 right-0 px-4 sm:px-8 mx-0 sm:mx-8 z-40">
        <div className="flex justify-between items-end text-xs">
          <LocalTime />
          <LanguageToggle language={language} onToggle={onLanguageToggle} />
        </div>

        {/* Centered ChevronDown - Absolutely positioned, hidden on mobile and after scroll */}
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
    </>
  );
};

export default BottomHome;
