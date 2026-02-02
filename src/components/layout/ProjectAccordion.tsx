"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/pages/info/accordionProjects.json";
import { useLanguage } from "@/components/LanguageContext";
import { AnimatedTooltip } from "../ui/animated-tooltip";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */
interface TeamMember {
  name: string;
  title: string;
  image: string;
}

interface Project {
  id: string;
  title: string;
  client: string;
  year: string | number;
  category: string;
  description_col1: string;
  description_col2: string;
  team_members: TeamMember[];
  accordionimages: string[];
  displayimage: string;
}

interface ProjectsData {
  [key: string]: Project[];
}

/* -------------------------------------------------------------------------- */
/* Internal Auto-Carousel Component                                           */
/* -------------------------------------------------------------------------- */
const AutoCarousel = ({ accordionimages }: { accordionimages: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!accordionimages || accordionimages.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % accordionimages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [accordionimages]);

  if (!accordionimages || accordionimages.length === 0) {
    return <div className="w-full h-full bg-neutral-100 rounded-sm" />;
  }

  return (
    <div className="relative w-full h-64 md:h-full min-h-75 overflow-hidden rounded-sm bg-neutral-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={accordionimages[index]}
          src={accordionimages[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Main Component                                                             */
/* -------------------------------------------------------------------------- */
const ProjectAccordion = () => {
  const { language } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedValue, setExpandedValue] = useState<string>("");

  // Select the correct array of projects based on the current language
  // Fallback to "EN" if the language key isn't found
  const currentProjects: Project[] =
    (projectsData as ProjectsData)[language] ||
    (projectsData as ProjectsData)["EN"];

  const handlePointerEnter = (id: string) => {
    setHoveredId(id);
  };

  const handlePointerLeave = () => {
    setHoveredId(null);
  };

  const activeProject = currentProjects.find((p) => p.id === hoveredId);

  // Localization labels for static text
  const labels = {
    EN: {
      client: "Client / Collaborator",
      category: "Category",
      year: "Year",
      view: "View More",
      overview: "Project Overview",
      team: "Project Team",
      details: "Details",
      cta: "Book Design Assessment",
    },
    ES: {
      client: "Cliente / Colaborador",
      category: "Categoría",
      year: "Año",
      view: "Ver Más",
      overview: "Resumen del Proyecto",
      team: "Equipo",
      details: "Detalles",
      cta: "Agendar Evaluación",
    },
  };

  const text = labels[language as keyof typeof labels] || labels["EN"];

  return (
    <section className="relative mt-20 mb-40 px-4 sm:px-8 mx-0 sm:mx-8 pb-40">
      {/* Floating Hover Image Preview */}
      <AnimatePresence>
        {hoveredId && activeProject && hoveredId !== expandedValue && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
          >
            <div className="w-180 h-auto overflow-hidden relative">
              <img
                src={activeProject.displayimage}
                alt={activeProject.client}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Accordion
        type="single"
        collapsible
        value={expandedValue}
        onValueChange={setExpandedValue}
      >
        {/* Header Row */}
        <AccordionItem
          value="header"
          className="border-b border-black/20 pb-2"
          disabled
        >
          <AccordionTrigger
            className="hover:no-underline py-4 text-sm pointer-events-none [&>svg]:hidden"
            disabled
          >
            <div className="flex flex-col md:flex-row w-full text-sm font-medium text-black/40">
              <div className="flex-1 text-left">{text.client}</div>
              <div className="flex-1 text-left">{text.category}</div>
              <div className="flex-[0.5] md:flex-[0.25] text-left">
                {text.year}
              </div>
              <div className="flex-[0.5] md:flex-[0.25] text-right">
                {text.view}
              </div>
            </div>
          </AccordionTrigger>
        </AccordionItem>

        {/* Project Rows */}
        {currentProjects.map((project) => (
          <AccordionItem
            value={project.id}
            key={project.id}
            className={`border-y border-black/20 group/item py-2 transition-opacity duration-500 ease-in-out ${
              hoveredId === null ||
              hoveredId === project.id ||
              expandedValue === project.id
                ? "opacity-100"
                : "opacity-10"
            }`}
            onPointerEnter={() => handlePointerEnter(project.id)}
            onPointerLeave={handlePointerLeave}
          >
            <AccordionTrigger className="hover:no-underline py-4 text-sm [&>svg]:hidden">
              <div className="flex flex-col md:flex-row w-full items-start md:items-center">
                <div className="w-full md:flex-1 font-bold text-left text-base md:text-base transition-transform duration-300 group-hover/item:translate-x-0.5 flex justify-between md:block">
                  {project.client}
                  <ArrowDown className="h-5 w-5 md:hidden inline-block transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </div>
                <div className="flex-1 text-left text-neutral-600">
                  {project.category}
                </div>
                <div className="flex-[0.5] md:flex-[0.25] text-left text-neutral-600">
                  {project.year}
                </div>
                <div className="flex-[0.5] md:flex-[0.25] justify-end hidden md:flex">
                  <ArrowDown className="h-5 w-5 inline-block transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="bg-white py-10 px-1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-sm leading-relaxed">
                {/* Column 1: Description A & Button */}
                <div className="flex flex-col space-y-8 text-left">
                  <div>
                    <span className="block text-sm font-regular text-neutral-400 mb-4">
                      {text.overview}
                    </span>
                    <p className="text-neutral-700">
                      {project.description_col1}
                    </p>
                  </div>
                  <div>
                    <InteractiveHoverButton>{text.cta}</InteractiveHoverButton>
                  </div>
                </div>

                {/* Column 2: Description B & Team */}
                <div className="flex flex-col space-y-8 text-left">
                  <div>
                    <span className="block text-sm font-regular text-neutral-400 mb-4">
                      {text.details}
                    </span>
                    <p className="text-neutral-700">
                      {project.description_col2}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-row justify-start w-full">
                      <AnimatedTooltip
                        items={
                          project.team_members?.map((member, i) => ({
                            ...member,
                            id: i,
                            designation: member.title,
                          })) ?? []
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Column 3: Auto-Playing Image Carousel */}
                <div className="h-full">
                  <AutoCarousel accordionimages={project.accordionimages} />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ProjectAccordion;
