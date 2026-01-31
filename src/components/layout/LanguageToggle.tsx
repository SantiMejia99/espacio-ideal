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
      // Added responsive width/height and kept your original base size
      className="relative w-16 h-8 sm:w-20 sm:h-10 rounded-full bg-white p-1 hover:bg-white border border-slate-200"
    >
      {/* Centered moving pill */}
      <div
        className={`absolute top-1/2 h-[calc(100%-8px)] w-[calc(50%-4px)] -translate-y-1/2 rounded-full bg-black transition-all duration-300 ease-in-out ${
          language === "EN"
            ? "left-1/4 -translate-x-1/2"
            : "left-3/4 -translate-x-1/2"
        }`}
      />

      {/* EN label */}
      <span
        className={`absolute left-1/4 -translate-x-1/2 z-10 text-[10px] sm:text-[12px] font-bold transition-colors duration-300 ${
          language === "EN" ? "text-white" : "text-black"
        }`}
      >
        EN
      </span>

      {/* ES label */}
      <span
        className={`absolute left-3/4 -translate-x-1/2 z-10 text-[10px] sm:text-[12px] font-bold transition-colors duration-300 ${
          language === "ES" ? "text-white" : "text-black"
        }`}
      >
        ES
      </span>
    </Button>
  );
};

export default LanguageToggle;
