import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: "EN" | "ES";
  onToggle: () => void;
}

const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      aria-label="Toggle language"
      className="relative w-16 h-8 rounded-full bg-white p-1 hover:bg-white"
    >
      {/* Centered moving pill */}
      <div
        className={`absolute top-1/2 h-7 w-9 -translate-y-1/2 rounded-full bg-black transition-all duration-300 ease-in-out ${
          language === "EN"
            ? "left-1/4 -translate-x-1/2"
            : "left-3/4 -translate-x-1/2"
        }`}
      />

      {/* EN label */}
      <span
        className={`absolute left-1/4 -translate-x-1/2 z-10 text-[12px] font-bold transition-colors duration-300 ${
          language === "EN" ? "text-white" : "text-black"
        }`}
      >
        EN
      </span>

      {/* ES label */}
      <span
        className={`absolute left-3/4 -translate-x-1/2 z-10 text-[12px] font-bold transition-colors duration-300 ${
          language === "ES" ? "text-white" : "text-black"
        }`}
      >
        ES
      </span>
    </Button>
  );
};

export default LanguageToggle;
