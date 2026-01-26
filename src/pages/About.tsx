import Navigation from "@/components/Navigation";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLanguage } from "@/components/LanguageContext";

const About = () => {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    EN: {
      founder: {
        name: "Alberto Mejia.",
        title: "(Founder & Architect)",
        bio1: "Alberto blends business sense with creative instinct, using both to build brands that actually connect. With a background in marketing, design, and leadership, he's known for spotting clarity in the chaos — then charting the course forward.",
        bio2: "He's most in his element collaborating with smart, curious people and shaping work that feels as good as it looks. When he's not deep in the details, you'll probably find him on a basketball court — with a tight handle and a smooth jumper.",
      },
      contact: {
        title: "Contact",
        email: "alberto.mejia@espacioideal.com",
        phone: "+ 51 519 258 2365",
      },
      services: {
        title: "Services",
        list: [
          "Architecture",
          "Interior Design",
          "Industrial Design",
          "Custom Pieces",
          "Space",
          "Creative & Art Direction",
          "Concept & Strategy",
          "Consultancy & Research",
        ],
      },
      awards: {
        title: "Awards",
        list: [
          "Rising Talent Award (Paris, FR)",
          "Archiproducts Design (Milan, ITA)",
          "Wirtschaftspreis (Sindelfingen, GER)",
          "Deutscher Designer (Frankfurt, GER)",
          "German Design (Frankfurt, GER)",
          "Ein&Zwanzig Award (Frankfurt, GER)",
          "AED Neuland (Stuttgart, GER)",
          "Mia Seeger (Stuttgart, GER)",
          "Interprint (Łódź, POL)",
          "Paradyz (Łódź, POL)",
        ],
      },
      office: {
        title: "Office",
        address: "Carrera 20A. No. 23-70, Cali Colombia",
      },
      tagline: {
        main: "We design with weight.",
        sub1: "Architecture",
        sub2: "Interior",
        sub3: "without compromise.",
      },
    },
    ES: {
      founder: {
        name: "Alberto Mejia.",
        title: "(Fundador y Arquitecto)",
        bio1: "Alberto combina sentido de negocios con instinto creativo, usando ambos para construir marcas que realmente conectan. Con experiencia en marketing, diseño y liderazgo, es conocido por encontrar claridad en el caos — y luego trazar el camino a seguir.",
        bio2: "Está en su elemento colaborando con personas inteligentes y curiosas, dando forma a trabajos que se sienten tan bien como se ven. Cuando no está en los detalles, probablemente lo encuentres en una cancha de baloncesto — con un buen manejo y un tiro suave.",
      },
      contact: {
        title: "Contacto",
        email: "alberto.mejia@espacioideal.com",
        phone: "+ 51 519 258 2365",
      },
      services: {
        title: "Servicios",
        list: [
          "Arquitectura",
          "Diseño de Interiores",
          "Diseño Industrial",
          "Piezas Personalizadas",
          "Espacio",
          "Dirección Creativa y de Arte",
          "Concepto y Estrategia",
          "Consultoría e Investigación",
        ],
      },
      awards: {
        title: "Premios",
        list: [
          "Rising Talent Award (París, FR)",
          "Archiproducts Design (Milán, ITA)",
          "Wirtschaftspreis (Sindelfingen, GER)",
          "Deutscher Designer (Frankfurt, GER)",
          "German Design (Frankfurt, GER)",
          "Ein&Zwanzig Award (Frankfurt, GER)",
          "AED Neuland (Stuttgart, GER)",
          "Mia Seeger (Stuttgart, GER)",
          "Interprint (Łódź, POL)",
          "Paradyz (Łódź, POL)",
        ],
      },
      office: {
        title: "Oficina",
        address: "Carrera 20A. No. 23-70, Cali Colombia",
      },
      tagline: {
        main: "Diseñamos con peso.",
        sub1: "Arquitectura",
        sub2: "Interior",
        sub3: "sin compromisos.",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 sm:pt-24 md:pt-30 lg:pt-36 pb-20">
        {/* Three Column Layout for Desktop, Single Column for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 px-4 sm:px-8 mx-0 sm:mx-8">
          {/* First Column - Introductory Text */}
          <div className="space-y-4 text-[15px] leading-relaxed">
            <p>
              The upholstered wall hook creates a reduced, horizontal storage
              platform and offers the possibility to attach objects to a wall
              using a quick, charming gesture.
            </p>
            <p>
              Starting point for the project is the idea of up-cycling and
              reusing materials in a cross-disciplinary manner. Geometric cut
              out shapes that arise in the production process and would usually
              not find valuable application in the industry are used as base to
              create the minimalist object. Haus Otto's ready-made core form is
              combined with the strong colour palette and signature textiles by{" "}
              <span className="underline">Simone Wild</span>. Valuing
              sustainable and fair production methods, the velvet cover is
              manufactured in Germany by a social business, working with refugee
              women.
            </p>
            <p>
              The upholstered wall hook creates a reduced, horizontal storage
              platform and offers the possibility to attach objects to a wall
              using a quick, charming gesture. Starting point for the project is
              the idea of up-cycling and reusing materials in a
              cross-disciplinary manner. Geometric cut out shapes that arise in
              the production process and would usually not find valuable
              application in the industry. The upholstered wall hook creates a
              reduced, horizontal storage platform and offers the possibility to
              attach objects to a wall using a quick, charming gesture.
            </p>
          </div>

          {/* Second Column - About & Contact */}
          <div className="space-y-12">
            {/* About Section */}
            <div>
              <div className="border-t border-black pt-4 mb-6">
                <h2 className="text-sm font-medium mb-8">About</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-normal">
                    {content[language].founder.name}
                  </h3>
                  <span className="text-sm">
                    {content[language].founder.title}
                  </span>
                </div>
                <div className="border-t border-black"></div>
              </div>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed">
                <p>{content[language].founder.bio1}</p>
                <p>{content[language].founder.bio2}</p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <div className="border-t border-black pt-4 mb-6">
                <h2 className="text-sm font-medium">
                  {content[language].contact.title}
                </h2>
              </div>
              <div className="space-y-2 text-[15px]">
                <p>{content[language].contact.email}</p>
                <p>{content[language].contact.phone}</p>
              </div>
            </div>
          </div>

          {/* Third Column - Services, Awards, Office */}
          <div className="space-y-12">
            {/* Services Section */}
            <div>
              <div className="border-t border-black pt-4 mb-6">
                <h2 className="text-sm font-medium">
                  {content[language].services.title}
                </h2>
              </div>
              <div className="space-y-1 text-[15px]">
                {content[language].services.list.map((service, index) => (
                  <p key={index}>{service}</p>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div>
              <div className="border-t border-black pt-4 mb-6">
                <h2 className="text-sm font-medium">
                  {content[language].awards.title}
                </h2>
              </div>
              <div className="space-y-1 text-[15px]">
                {content[language].awards.list.map((award, index) => (
                  <p key={index}>{award}</p>
                ))}
              </div>
            </div>

            {/* Office Section */}
            <div>
              <div className="border-t border-black pt-4 mb-6">
                <h2 className="text-sm font-medium">
                  {content[language].office.title}
                </h2>
              </div>
              <p className="text-[15px]">{content[language].office.address}</p>
            </div>
          </div>
        </div>
        {/* Venn Diagram - Full Width Below Columns */}
        <div className="mt-20 px-4 sm:px-8 mx-0 sm:mx-8">
          <svg
            viewBox="0 0 800 400"
            className="w-full max-w-3xl mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Circle - Design */}
            <circle
              cx="280"
              cy="200"
              r="180"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            {/* Right Circle - Function */}
            <circle
              cx="520"
              cy="200"
              r="180"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            {/* Intersection - filled black */}
            <path
              d="M 400 20 A 180 180 0 0 1 400 380 A 180 180 0 0 1 400 20 Z"
              fill="black"
            />

            {/* Labels */}
            <text
              x="220"
              y="210"
              fontSize="18"
              fontFamily="system-ui, -apple-system, sans-serif"
              textAnchor="middle"
            >
              Design.
            </text>
            <text
              x="400"
              y="210"
              fontSize="18"
              fontFamily="system-ui, -apple-system, sans-serif"
              textAnchor="middle"
              fill="white"
            >
              Us.
            </text>
            <text
              x="580"
              y="210"
              fontSize="18"
              fontFamily="system-ui, -apple-system, sans-serif"
              textAnchor="middle"
            >
              Function.
            </text>
          </svg>
        </div>
        {/* Tagline - Full Width Below Diagram */}
        <div className="mt-20 px-4 sm:px-8 mx-0 sm:mx-8">
          <h2 className="text-4xl lg:text-6xl font-normal leading-tight text-right max-w-5xl ml-auto">
            {content[language].tagline.main}
            <br />
            <span className="italic">
              {content[language].tagline.sub1}
            </span> and{" "}
            <span className="italic">{content[language].tagline.sub2}</span>{" "}
            {content[language].tagline.sub3}
          </h2>
        </div>
      </main>

      {/* Language Toggle - Fixed Bottom Right */}
      <div className="fixed bottom-8 right-8 z-40">
        <LanguageToggle language={language} onToggle={toggleLanguage} />
      </div>
    </div>
  );
};

export default About;
