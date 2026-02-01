import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export function InteractiveHoverButton({
  children,
  className,
  href,
  ...props
}: InteractiveHoverButtonProps) {
  const button = (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold bg-(--ihb-bg)",
        className,
      )}
      style={
        {
          "--ihb-bg": "white",
          "--ihb-primary": "black",
          "--ihb-foreground": "white",
          ...((props as any).style || {}),
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Default layer */}
      <div className="flex items-center gap-2 p-2 px-6">
        <div className="bg-(--ihb-primary) h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="text-(--ihb-primary) transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* Hover layer */}
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="text-(--ihb-foreground)">{children}</span>
        <ArrowRight className="h-4 w-4 text-(--ihb-foreground)" />
      </div>
    </button>
  );

  if (!href) return button;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      {button}
    </a>
  );
}
