import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/components/LanguageContext";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Contact } from "lucide-react";

function AppRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
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
