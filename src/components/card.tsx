import React from "react";
import type { DataItem } from "../types";
import { getDisplayTitle, getDisplaySubtitle } from "../types";
import { useFavorites } from "../context/FavoritesContext";

type CardProps = { item: DataItem };

const Card: React.FC<CardProps> = ({ item }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(item.id);

  return (
    <div style={{
      border: "1px solid #b4b8beff", borderRadius: 12, padding: "0.9rem",
      display: "grid", gap: "0.25rem",
      backgroundColor: "#0d1624ff",
      boxShadow: "0 2px 6px #939fb3ff"

    }}>
      <span style={{ fontSize: 12, opacity: 0.7, textTransform: "uppercase" }}>{item.kind}</span>
      <strong style={{ fontSize: 18 }}>{getDisplayTitle(item)}</strong>
      <span style={{ opacity: 0.8 }}>{getDisplaySubtitle(item)}</span>

      <button
        onClick={() => toggleFavorite(item)}
        style={{
          marginTop: ".5rem",
          border: "none",
          borderRadius: 8,
          padding: ".5rem .75rem",
          background: fav ? "#f59e0b" : "#25365bff",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        {fav ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
      </button>
    </div>
  );
};

export default Card;
