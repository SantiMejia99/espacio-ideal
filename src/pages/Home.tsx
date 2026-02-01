import Navigation from "@/components/Navigation";
import BottomHome from "@/components/layout/BottomHome";
import ProjectAccordion from "@/components/layout/ProjectAccordion";
import ThreeDHero from "@/components/layout/ThreeDHero";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      <main>
        {/* FIRST SCREEN */}
        <section className="relative min-h-svh w-full flex flex-col">
          <ThreeDHero />
          <BottomHome />
        </section>

        {/* SECOND SCREEN */}
        <section className="min-h-screen w-full flex flex-col bg-white pt-20">
          <ProjectAccordion />
        </section>
      </main>
    </div>
  );
};

export default Home;
