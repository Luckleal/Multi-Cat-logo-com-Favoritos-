import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import Card from "../components/card";

const FavoritosPage: React.FC = () => {
  const { favorites, clearFavorites } = useFavorites();

  return (
    <section style={{ padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Favoritos</h2>
        {favorites.length > 0 && (
          <button
            onClick={clearFavorites}
            style={{ border: "1px solid #e5e7eb", padding: ".5rem .75rem", borderRadius: 8, cursor: "pointer" }}
          >
            Limpar favoritos
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <p style={{ opacity: 0.7 }}>Você ainda não favoritou nada.</p>
      ) : (
        <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
          {favorites.map(i => <Card key={i.id} item={i} />)}
        </div>
      )}
    </section>
  );
};

export default FavoritosPage;
