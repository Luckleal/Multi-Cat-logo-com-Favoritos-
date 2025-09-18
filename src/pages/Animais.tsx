import React, { useMemo } from "react";
import dados from "../data/dados.json";
import Card from "../components/card";
import type { DataItem } from "../types";

const Animais: React.FC = () => {
  const items = useMemo<DataItem[]>(
    () => dados.animais.map(a => ({ kind: "animal", ...a })),
    []
  );

  return (
    <section style={{ padding: "1rem" }}>
      <h2>Animais</h2>
      <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {items.map(i => <Card key={i.id} item={i} />)}
      </div>
    </section>
  );
};

export default Animais;
