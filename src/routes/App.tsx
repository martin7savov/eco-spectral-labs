import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Analyses from "./pages/analyses";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/analyses" element={<Analyses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
