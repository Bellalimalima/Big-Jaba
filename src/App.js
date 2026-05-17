import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex flex-col bg-jabáBeige">
        {/* Header fixo sobre o vídeo */}
        <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center p-6 text-white">
          <nav className="space-x-6 text-lg flex">
            <Link
              to="/"
              className="hover:text-jabáYellow hover:underline underline-offset-4 decoration-jabáYellow transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="hover:text-jabáYellow hover:underline underline-offset-4 decoration-jabáYellow transition duration-300"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="hover:text-jabáYellow hover:underline underline-offset-4 decoration-jabáYellow transition duration-300"
            >
              Sobre
            </Link>
            <Link
              to="/contact"
              className="hover:text-jabáYellow hover:underline underline-offset-4 decoration-jabáYellow transition duration-300"
            >
              Contato
            </Link>
          </nav>
        </header>

        {/* Rotas */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 text-center p-4">
          <p>&copy; 2026 Big Jabá. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
