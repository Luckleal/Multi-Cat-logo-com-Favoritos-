import React, { useMemo } from "react";
import dados from "../data/dados.json";
import Card from "../components/card";
import type { DataItem } from "../types";

const PessoasPage: React.FC = () => {
  const items = useMemo<DataItem[]>(
    () => dados.pessoas.map(p => ({ kind: "pessoa", ...p })),
    []
  );

  return (
    <section style={{ padding: "1rem" }}>
      <h2>Pessoas</h2>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {items.map(i => <Card key={i.id} item={i} />)}
      </div>
    </section>
  );
};

export default PessoasPage;
