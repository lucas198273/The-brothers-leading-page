export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  available?: boolean;
  imageUrl: string;
  notes?: string[];
  category: "israel" | "brenda" | "piercing";
  materials?: {
    type: string;
    price: number;
  }[];
}

export const products: Product[] = [
  // Israel
  {
    id: "israel1",
    name: "Tatuagem Realista",
    description: "Trabalho autoral do artista Israel — realismo com traços precisos e sombreados profundos.",
    imageUrl: "/assets/israel/img-i1.webp",
    category: "israel",
    available: true,
  },

  // Brenda
  {
    id: "brenda1",
    name: "Tatuagem Feminina Delicada",
    description: "Criação da artista Brenda — traços finos, delicados e simbólicos.",
    imageUrl: "/assets/brenda/img-b1.webp",
    category: "brenda",
    available: true,
  },

  // Piercing
  {
    id: "piercing1",
    name: "Piercing Nostril",
    description: "Perfuração discreta no nariz com joia de aço cirúrgico ou titânio.",
    available: true,
    imageUrl: "/assets/sol/img-sol-1.webp",
    notes: ["Joias pequenas", "Estilo delicado"],
    category: "piercing",
    materials: [
      { type: "Aço cirúrgico", price: 80 },
      { type: "Titânio", price: 100 },
    ],
  },
];
