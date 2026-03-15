export type Nutrition = {
  energy: string;
  fat: string;
  saturates: string;
  carbs: string;
  sugars: string;
  protein: string;
  salt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  flavour: "Strawberry" | "Mango" | "Raspberry" | "Blueberry" | "Passionfruit" | "Mixed";
  description: string;
  priceGbp: number;
  size: string;
  xylitolPercent: number | null;
  category: "flavour" | "discovery-pack";
  image: string;
  imagePosition?: string;
  accent: "strawberry" | "mango" | "raspberry" | "blueberry" | "passionfruit";
  veganFriendly?: boolean;
  glutenFree?: boolean;
  soyFree?: boolean;
  lactoseFree?: boolean;
  milkFree?: boolean;
  ingredients: string[];
  nutritionPer100g?: Nutrition;
  usage: string[];
  safety: string[];
  factualNotes: string[];
};

export type CartLine = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  size: string;
  unitPriceGbp: number;
  quantity: number;
};
