import React from "react";
import { Link, NavLink } from "react-router-dom";

const linkBase: React.CSSProperties = { textDecoration: "none", padding: "0.5rem 0.75rem", color: "#dadfedff" };
const activeStyle: React.CSSProperties = { fontWeight: 700, borderBottom: "2px solid #a8aebcff" };

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", borderBottom: "1px solid #e5e7eb" }}>
      <Link to="/" style={{ ...linkBase, fontWeight: 800 }}>Catálogo</Link>
      <div style={{ display: "flex", gap: "0.25rem" }}>
        <NavLink to="/animais"  style={({ isActive }) => ({ ...linkBase, ...(isActive ? activeStyle : {}) })}>Animais</NavLink>
        <NavLink to="/livros"   style={({ isActive }) => ({ ...linkBase, ...(isActive ? activeStyle : {}) })}>Livros</NavLink>
        <NavLink to="/pessoas"  style={({ isActive }) => ({ ...linkBase, ...(isActive ? activeStyle : {}) })}>Pessoas</NavLink>
        <NavLink to="/favoritos"style={({ isActive }) => ({ ...linkBase, ...(isActive ? activeStyle : {}) })}>Favoritos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
