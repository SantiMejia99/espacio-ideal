import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const chairRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

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
        // Chair initial animation
        gsap.from(chairRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        });

        // Chair floating animation (Y-axis)
        gsap.to(chairRef.current, {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        // Chair rotation animation
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
    <section className="relative min-h-screen h-screen w-full flex items-center justify-center">
      {/* Container with same mx-16 as ProjectAccordion */}
      <div className="mx-16 w-full">
        {/* Integrated Hero Title with Image */}
        <div
          ref={heroTextRef}
          className="flex items-center justify-center w-full"
        >
          <h1 className="font-bold tracking-tight leading-none inline-flex items-center justify-center whitespace-nowrap text-[min(18vw,calc((100vw-8rem)*0.22))]">
            {/* Text Part 1: ESP */}
            <span className="inline-block">ESP</span>

            {/* Chair Image */}
            <span
              ref={chairRef}
              className="inline-flex items-center justify-center shrink-0 mx-[min(2vw,calc((100vw-8rem)*0.025))]"
            >
              <img
                src="/Temporary/placeholder-chair.png"
                alt="Wassily Chair"
                className="h-[min(23vw,calc((100vw-8rem)*0.3))] w-auto object-contain drop-shadow-2xl"
                style={{ transformOrigin: "center center" }}
              />
            </span>

            {/* Text Part 2: CIO */}
            <span className="inline-block">CIO</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
