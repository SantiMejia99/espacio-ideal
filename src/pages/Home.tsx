import Navigation from "@/components/Navigation";
import BottomHome from "@/components/layout/BottomHome";
import ProjectAccordion from "@/components/layout/ProjectAccordion";
import ThreeDHero from "@/components/layout/ThreeDHero";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <ThreeDHero />

        {/* Add more sections here as needed */}
      </main>

      {/* Bottom Home Component */}
      <BottomHome />

      {/* Project Section */}
      <ProjectAccordion />
    </div>
  );
};

export default Home;
