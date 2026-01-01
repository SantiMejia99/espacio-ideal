import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  language: "EN" | "ES";
}

const Navigation = ({ language }: NavigationProps) => {
  const nav = {
    EN: {
      home: "HOME",
      products: "PRODUCTS",
      about: "ABOUT US",
    },
    ES: {
      home: "INICIO",
      products: "PRODUCTOS",
      about: "SOBRE NOSOTROS",
    },
  };

  const description = {
    EN: {
      leading: "LEADING ARCHITECTURE FIRM, SPECIALIZING ON",
      detail: "DETAIL AND EXPERIENCE.",
      location: "CALI, COLOMBIA",
    },
    ES: {
      leading: "FIRMA DE ARQUITECTURA LÍDER ESPECIALIZADA EN",
      detail: "DETALLE Y EXPERIENCIA.",
      location: "CALI, COLOMBIA",
    },
  };

  const products = {
    EN: [
      {
        title: "Furniture",
        href: "/products/furniture",
        description: "Contemporary furniture pieces for modern spaces",
      },
      {
        title: "Lighting",
        href: "/products/lighting",
        description: "Sophisticated lighting solutions",
      },
      {
        title: "Decor",
        href: "/products/decor",
        description: "Carefully selected decorative elements",
      },
    ],
    ES: [
      {
        title: "Muebles",
        href: "/products/furniture",
        description:
          "Piezas de mobiliario contemporáneo para espacios modernos",
      },
      {
        title: "Iluminación",
        href: "/products/lighting",
        description: "Soluciones de iluminación sofisticadas",
      },
      {
        title: "Decoración",
        href: "/products/decor",
        description: "Elementos decorativos cuidadosamente seleccionados",
      },
    ],
  };

  return (
    <nav className="fixed top-8 left-8 right-8 z-50 px-8 py-6 bg-white/95 backdrop-blur-sm rounded-lg">
      <div className="flex justify-between items-start">
        {/* Left Side - Logo and Description */}
        <div className="flex gap-8">
          {/* Logo */}
          <Link to="/" className="hover:opacity-60 transition-opacity">
            <img
              src="/Branding/espacio-logo.webp"
              alt="Espacio Ideal Logo"
              className="h-4 w-auto"
            />
          </Link>

          {/* Description Text */}
          <div className="text-sm gap-4 text-black">
            <span>
              {description[language].leading} {description[language].detail}
            </span>
            <span className="flex items-center gap-2">
              {description[language].location}
              <span className="inline-block">🇨🇴</span>
            </span>
          </div>
        </div>

        {/* Right Side - Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {/* Home */}
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="text-sm font-normal hover:opacity-60 transition-opacity bg-transparent">
                  {nav[language].home}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Products Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-normal bg-transparent hover:bg-transparent hover:opacity-60 data-[state=open]:bg-transparent p-0 h-auto">
                {nav[language].products}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-600 gap-3 p-4">
                  {products[language].map((product) => (
                    <li key={product.href}>
                      <Link to={product.href}>
                        <NavigationMenuLink className="text-sm font-normal hover:opacity-60 transition-opacity bg-transparent">
                          <div className="text-sm font-normal leading-none">
                            {product.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {product.description}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className="text-sm font-normal hover:opacity-60 transition-opacity bg-transparent">
                  {nav[language].about}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
