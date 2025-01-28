export type Card = {
  name: string;
  category: string[];
  cost: number;
  debt: number;
  image: string;
};

export type ExpansionProp = {
  name: string;
  cards: Card[];
  events?: string[];
  allies?: string[];
  traits?: string[];
  prophecies?: string[];
};
