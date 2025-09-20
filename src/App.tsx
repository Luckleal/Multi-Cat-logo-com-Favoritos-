import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animais from "./pages/Animais";
import Livros from "./pages/Livros";
import Pessoas from "./pages/Pessoas";
import FavoritosPage from "./pages/FavoritosPage";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/animais" replace />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/pessoas" element={<Pessoas />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="*" element={<p style={{ padding: "1rem" }}>Página não encontrada.</p>} />
      </Routes>
    </div>
  );
};

export default App;
