import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Layout/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  return (
    <Router>
      {/* Navigation fixed across all pages */}
      <Navigation language={language} />

      <Routes>
        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
