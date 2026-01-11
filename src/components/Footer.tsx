import { Link } from "react-router-dom";

interface FooterProps {
  language: "EN" | "ES";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    EN: {
      description: {
        part1: "We are an",
        architecture: "architecture",
        part2: "firm dedicated to",
        creating: "creating thoughtful",
        part3:
          ", forward-thinking spaces that seamlessly combine form and function. Our team excels in",
        innovative: "innovative design",
        part4:
          ", meticulous planning, and delivering projects that meet the highest standards of",
        quality: "quality and sustainability",
        part5: ". We bring creative vision, and a commitment to",
        excellence: "excellence",
        part6: ".",
      },
      links: {
        catalogue: "Catalogue",
        styleGuides: "Style Guides",
        licenses: "Licenses",
      },
      designBy: "Design by",
    },
    ES: {
      description: {
        part1: "Somos una firma de",
        architecture: "arquitectura",
        part2: "dedicada a",
        creating: "crear espacios reflexivos",
        part3:
          " y con visión de futuro que combinan perfectamente forma y función. Nuestro equipo sobresale en",
        innovative: "diseño innovador",
        part4:
          ", planificación meticulosa y entrega de proyectos que cumplen con los más altos estándares de",
        quality: "calidad y sostenibilidad",
        part5: ". Aportamos visión creativa y un compromiso con la",
        excellence: "excelencia",
        part6: ".",
      },
      links: {
        catalogue: "Catálogo",
        styleGuides: "Guías de Estilo",
        licenses: "Licencias",
      },
      designBy: "Diseño por",
    },
  };

  const desc = content[language].description;
  const links = content[language].links;

  return (
    <footer className="relative w-full text-white overflow-hidden m-0 p-0">
      {/* SVG defines footer height */}
      <div className="w-full aspect-1920/420">
        <div
          className="
        w-full h-full
        bg-[url('/Branding/espacio-footer.svg')]
        bg-no-repeat
        bg-bottom
        bg-contain
        mb-0
      "
        />
      </div>

      {/* Content layered on top */}
      <div className="absolute inset-0 px-4 sm:px-8 py-12 sm:py-16 flex flex-col justify-end">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex flex-col w-full lg:w-1/6">
            <Link to="/" className="hover:opacity-60 transition-opacity">
              <img
                src="/Branding/espacio-logo.webp"
                alt="Espacio Ideal Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-xs mt-3">© 2025</p>
          </div>

          {/* Center */}
          <div className="flex flex-col space-y-4 w-full lg:w-1/3">
            <p className="text-xs leading-relaxed">
              {desc.part1} <em>{desc.architecture}</em> {desc.part2}{" "}
              <em>{desc.creating}</em>
              {desc.part3} <em>{desc.innovative}</em>
              {desc.part4} <em>{desc.quality}</em>
              {desc.part5} <em>{desc.excellence}</em>
              {desc.part6}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <Link to="/catalogue" className="underline">
                {links.catalogue}
              </Link>
              <Link to="/style-guides" className="underline">
                {links.styleGuides}
              </Link>
              <Link to="/licenses" className="underline">
                {links.licenses}
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col w-full lg:w-1/3 items-start lg:items-end text-xs space-y-1.5">
            <a href="tel:+573104251070">+57 310 425 1070</a>
            <a href="mailto:alberto.mejia@espacioideal.com">
              alberto.mejia@espacioideal.com
            </a>
            <a href="mailto:espacio.ideal@gerencias.com">
              espacio.ideal@gerencias.com
            </a>
            <p className="mt-3 lg:text-right">
              Carrera 20A. No.23-70, Cali, Colombia
            </p>
            <p className="mt-3">
              {content[language].designBy} <strong>Sago Made</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
