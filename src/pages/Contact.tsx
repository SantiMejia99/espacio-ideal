import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageContext";

const Products = () => {
  // Use the global language context
  const { language, toggleLanguage } = useLanguage();

  const content = {
    EN: {
      title: "Our Products",
      subtitle:
        "Curated collection of architectural furniture and design pieces",
      categories: [
        {
          title: "Furniture",
          description: "Contemporary furniture pieces for modern spaces",
          link: "/products/furniture",
        },
        {
          title: "Lighting",
          description: "Sophisticated lighting solutions",
          link: "/products/lighting",
        },
        {
          title: "Decor",
          description: "Carefully selected decorative elements",
          link: "/products/decor",
        },
      ],
      backHome: "Back to Home",
    },
    ES: {
      title: "Nuestros Productos",
      subtitle:
        "Colección curada de muebles arquitectónicos y piezas de diseño",
      categories: [
        {
          title: "Muebles",
          description:
            "Piezas de mobiliario contemporáneo para espacios modernos",
          link: "/products/furniture",
        },
        {
          title: "Iluminación",
          description: "Soluciones de iluminación sofisticadas",
          link: "/products/lighting",
        },
        {
          title: "Decoración",
          description: "Elementos decorativos cuidadosamente seleccionados",
          link: "/products/decor",
        },
      ],
      backHome: "Volver al Inicio",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation uses global language */}
      <Navigation />

      <main className="pt-32 px-4 sm:px-8 pb-20 max-w-7xl mx-0 sm:mx-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            {content[language].title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content[language].categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to={category.link}>
                    {language === "EN" ? "View Collection" : "Ver Colección"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

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

export default Products;
