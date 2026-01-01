import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Hero = () => {
  const chairRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroTextRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });

      if (chairRef.current) {
        gsap.from(chairRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        });

        gsap.to(chairRef.current, {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        gsap.to(chairRef.current, {
          rotation: 3,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen h-screen w-full flex items-center justify-center px-8">
      {/* Language Switch */}
      <div className="absolute top-8 right-8 flex items-center gap-6 text-sm font-semibold">
        <button
          onClick={() => setLanguage("EN")}
          className={`transition-colors duration-300 ${
            language === "EN" ? "text-white" : "text-black"
          }`}
        >
          EN
        </button>

        <button
          onClick={() => setLanguage("ES")}
          className={`transition-colors duration-300 ${
            language === "ES" ? "text-white" : "text-black"
          }`}
        >
          ES
        </button>
      </div>

      {/* Hero Text */}
      <div ref={heroTextRef} className="text-center relative z-10">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
          <div className="overflow-hidden">
            <div>ESPACIO</div>
          </div>
        </h1>
      </div>

      {/* Chair Image */}
      <div
        ref={chairRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=300&fit=crop"
          alt="Wassily Chair"
          className="w-64 md:w-96 h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};
export default Hero;
