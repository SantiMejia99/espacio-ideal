import Navigation from "@/components/Navigation";
import BottomHome from "@/components/layout/BottomHome";
import ProjectAccordion from "@/components/layout/ProjectAccordion";
import ThreeDHero from "@/components/layout/ThreeDHero";

const Home = () => {
  return (
    // Add snap-y and snap-mandatory if you want that "locked" scrolling feel
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* FIRST SCREEN: Hero + Bottom elements */}
        <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
          <div className="grow">
            <ThreeDHero />
          </div>

          {/* If BottomHome is meant to sit at the foot of screen 1 */}
          <div className="absolute bottom-0 w-full">
            <BottomHome />
          </div>
        </section>

        {/* SECOND SCREEN: The Project Accordion */}
        <section className="min-h-screen w-full flex flex-col bg-white pt-20">
          <ProjectAccordion />
        </section>
      </main>
    </div>
  );
};

export default Home;
