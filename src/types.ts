// Interfaces simples (tipos estáticos) – sem any
export interface Animal {
  id: string;
  nome: string;
  especie: string;
  idade?: number;
}

export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  ano?: number;
}

export interface Pessoa {
  id: string;
  nome: string;
  profissao?: string;
  idade?: number;
}

// União discriminada com "kind" para tratarmos tudo genericamente e com segurança
export type DataItem =
  | ({ kind: "animal" } & Animal)
  | ({ kind: "livro" } & Livro)
  | ({ kind: "pessoa" } & Pessoa);

// Helpers de apresentação (evitam ifs repetidos nos Cards)
export function getDisplayTitle(item: DataItem): string {
  switch (item.kind) {
    case "animal": return item.nome;
    case "livro":  return item.titulo;
    case "pessoa": return item.nome;
  }
}
export function getDisplaySubtitle(item: DataItem): string {
  switch (item.kind) {
    case "animal": return item.especie;
    case "livro":  return item.autor;
    case "pessoa": return item.profissao ?? "—";
  }
}
