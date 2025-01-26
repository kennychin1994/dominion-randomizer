export type Card = {
  name: string;
  category: string[];
  price?: number;
  image: string;
};

export type ExpansionProp = {
  name: string;
  cards: Card[];
  allies?: string[];
  events?: string[];
};
