import { ExpansionProp } from "./types";

type ResultProp = {
  randomCards: ExpansionProp[];
};

const Result: React.FC<ResultProp> = ({ randomCards }) => {
  const resultLine = randomCards.map((e: ExpansionProp) => {
    const cardsName = e.cards.map((card) => card.name);
    return (
      <p key={e.name}>
        <b>{e.name}</b>: {cardsName.join(", ")}
      </p>
    );
  });

  return <div>{resultLine}</div>;
};

export default Result;
