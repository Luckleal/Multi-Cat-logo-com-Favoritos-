import React from "react";
import { NavLink } from "react-router-dom";

type NavLinkStyleProps = { isActive: boolean; isPending: boolean };

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <NavLink
        to="/animais"
        style={({ isActive }: NavLinkStyleProps) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black",
        })}
      >
        Animais
      </NavLink>

      <NavLink
        to="/livros"
        style={({ isActive }: NavLinkStyleProps) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black",
        })}
      >
        Livros
      </NavLink>

      <NavLink
        to="/pessoas"
        style={({ isActive }: NavLinkStyleProps) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "black",
        })}
      >
        Pessoas
      </NavLink>
    </nav>
  );
};

export default Navbar;
