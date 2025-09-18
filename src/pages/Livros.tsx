import React, { useMemo } from "react";
import dados from "../data/dados.json";
import Card from "../components/card";
import type { DataItem } from "../types";

const LivrosPage: React.FC = () => {
  const items = useMemo<DataItem[]>(
    () => dados.livros.map(l => ({ kind: "livro", ...l })),
    []
  );

  return (
    <section style={{ padding: "1rem" }}>
      <h2>Livros</h2>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {items.map(i => <Card key={i.id} item={i} />)}
      </div>
    </section>
  );
};

export default LivrosPage;
