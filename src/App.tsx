import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Footer from "./components/Footer";

function AppRoutes() {
  const { language } = useLanguage();

  return (
    <>
      <Navigation language={language} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer language={language} />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;
