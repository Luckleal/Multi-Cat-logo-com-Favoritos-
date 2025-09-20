import React, { createContext, useContext, useMemo, useState } from "react";
import type { DataItem } from "../types";

// Tipo do contexto (sem any)
type FavoritesContextType = {
  favorites: DataItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (item: DataItem) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
 
  const [favorites, setFavorites] = useState<DataItem[]>([]);


  const isFavorite = (id: string) => favorites.some(f => f.id === id);


  const toggleFavorite = (item: DataItem) => {
    setFavorites(prev =>
      prev.some(f => f.id === item.id)
        ? prev.filter(f => f.id !== item.id)
        : [item, ...prev]
    );
  };

  const removeFavorite = (id: string) =>
    setFavorites(prev => prev.filter(f => f.id !== id));

  const clearFavorites = () => setFavorites([]);

 
  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorite, removeFavorite, clearFavorites }),
    [favorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};


export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites deve ser usado dentro de <FavoritesProvider>");
  return ctx;
}
