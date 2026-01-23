import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/LanguageContext";

const About = () => {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    EN: {
      title: "About Us",
      subtitle: "Architecture & Design Excellence",
      intro:
        "Espacio Ideal is a leading architecture firm based in Cali, Colombia, specializing in detail-oriented design and exceptional client experiences.",
      mission: {
        title: "Our Mission",
        text: "We believe in creating spaces that not only meet functional requirements but also inspire and elevate the human experience. Every project is an opportunity to blend form, function, and beauty.",
      },
      values: {
        title: "Our Values",
        items: [
          { label: "Excellence", text: "We pursue perfection in every detail" },
          {
            label: "Innovation",
            text: "We embrace new ideas and technologies",
          },
          {
            label: "Sustainability",
            text: "We design with the environment in mind",
          },
          { label: "Collaboration", text: "We work closely with our clients" },
        ],
      },
      contact: {
        title: "Get in Touch",
        location: "Cali, Colombia",
        cta: "Contact Us",
      },
      backHome: "Back to Home",
    },
    ES: {
      title: "Sobre Nosotros",
      subtitle: "Excelencia en Arquitectura y Diseño",
      intro:
        "Espacio Ideal es una firma de arquitectura líder con sede en Cali, Colombia, especializada en diseño orientado al detalle y experiencias excepcionales para el cliente.",
      mission: {
        title: "Nuestra Misión",
        text: "Creemos en crear espacios que no solo cumplan con los requisitos funcionales, sino que también inspiren y eleven la experiencia humana. Cada proyecto es una oportunidad para combinar forma, función y belleza.",
      },
      values: {
        title: "Nuestros Valores",
        items: [
          {
            label: "Excelencia",
            text: "Buscamos la perfección en cada detalle",
          },
          { label: "Innovación", text: "Abrazamos nuevas ideas y tecnologías" },
          {
            label: "Sostenibilidad",
            text: "Diseñamos pensando en el medio ambiente",
          },
          {
            label: "Colaboración",
            text: "Trabajamos estrechamente con nuestros clientes",
          },
        ],
      },
      contact: {
        title: "Contáctanos",
        location: "Cali, Colombia",
        cta: "Contáctanos",
      },
      backHome: "Volver al Inicio",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 px-8 pb-20 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            {content[language].title}
          </h1>
          <p className="text-xl text-gray-600">{content[language].subtitle}</p>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg leading-relaxed text-gray-700">
            {content[language].intro}
          </p>
        </div>

        <Separator className="my-12" />

        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            {content[language].mission.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {content[language].mission.text}
          </p>
        </div>

        <Separator className="my-12" />

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {content[language].values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content[language].values.items.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Contact */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            {content[language].contact.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6 flex items-center justify-center gap-2">
            {content[language].contact.location}
            <span className="inline-block w-5 h-3">🇨🇴</span>
          </p>
          <Button size="lg">{content[language].contact.cta}</Button>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button asChild variant="link">
            <Link to="/">&larr; {content[language].backHome}</Link>
          </Button>
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
