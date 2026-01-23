import { useState } from "react";
import { ArrowDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import projectsData from "@/pages/info/accordionProjects.json";
import type { Project } from "@/types/project";

const PROJECTS: Project[] = projectsData as Project[];

const ProjectAccordion = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="relative mt-20 mb-40 px-4 sm:px-8 mx-0 sm:mx-8 pb-40">
      {/* Hover Image Preview - Only on medium screens and above */}
      {hoveredProject && (
        <div className="hidden md:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition-opacity duration-300">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg shadow-2xl flex items-center justify-center">
            <p className="text-white text-lg md:text-2xl font-bold text-center px-4 md:px-8">
              {hoveredProject}
            </p>
          </div>
        </div>
      )}

      <Accordion type="single" collapsible>
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
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex-1 font-normal text-black/40 text-left">
                Client / Collaborator
              </div>
              <div className="flex-1 font-normal text-black/40 text-left">
                Case
              </div>
              <div className="flex-[0.5] md:flex-[0.25] font-normal text-black/40 text-left">
                Year
              </div>
              <div className="flex-[0.5] md:flex-[0.25] text-black/40 text-right">
                View More
              </div>
            </div>
          </AccordionTrigger>
        </AccordionItem>

        {/* Project Rows */}
        {PROJECTS.map((project, index) => (
          <AccordionItem
            value={`${project.client}-${project.year}`}
            key={index}
            className={`border-y border-black/20 group py-2 transition-opacity duration-300 ${
              hoveredProject === null
                ? "opacity-100"
                : hoveredProject === project.client
                  ? "opacity-100"
                  : "opacity-20"
            }`}
            onMouseEnter={() => setHoveredProject(project.client)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <AccordionTrigger className="hover:no-underline py-4 text-sm [&>svg]:hidden">
              <div className="flex flex-col md:flex-row w-full">
                <div className="flex-1 font-semibold text-left">
                  {project.client}
                </div>
                <div className="flex-1 text-left">{project.case}</div>
                <div className="flex-[0.5] md:flex-[0.25] text-left">
                  {project.year}
                </div>
                <div className="flex-[0.5] md:flex-[0.25] text-right">
                  <ArrowDown className="h-5 w-5 inline-block transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="bg-neutral-50 py-6 px-4 sm:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-black/60 mb-1">Client</p>
                  <p className="text-black">{project.client}</p>
                </div>
                <div>
                  <p className="font-semibold text-black/60 mb-1">
                    Collaborator
                  </p>
                  <p className="text-black">{project.collaborator}</p>
                </div>
                <div>
                  <p className="font-semibold text-black/60 mb-1">Case Type</p>
                  <p className="text-black">{project.case}</p>
                </div>
                <div>
                  <p className="font-semibold text-black/60 mb-1">Year</p>
                  <p className="text-black">{project.year}</p>
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
