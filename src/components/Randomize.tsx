import Button from "@mui/material/Button";
import { Card, ExpansionProp } from "./types";

type RandomizeProp = {
  mySets: ExpansionProp[];
  selectedExpansions: number[];
  setRandomCards: React.Dispatch<React.SetStateAction<ExpansionProp[]>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  includeAttack: boolean;
  haveTenCards: boolean;
};

const Randomize: React.FC<RandomizeProp> = ({
  mySets,
  selectedExpansions,
  setRandomCards,
  setShowResult,
  includeAttack,
  haveTenCards,
}) => {
  function pickRandomFromExpansion(cards: Card[], cardNum: number) {
    const chooseFromCards = includeAttack
      ? cards
      : cards.filter((c) => !c.category.includes("Attack"));
    const randomIndex: Set<number> = new Set();
    while (randomIndex.size < cardNum) {
      const ranNum = Math.floor(Math.random() * chooseFromCards.length);
      randomIndex.add(ranNum);
    }
    return [...randomIndex].map((i: number) => chooseFromCards[i]);
  }

  function generateRandomCards() {
    const selectedExpansionsWithCards = mySets
      .map((e, index) => ({
        name: e.name,
        cards: pickRandomFromExpansion(e.cards, selectedExpansions[index]),
      }))
      .filter((e) => e.cards.length);
    setRandomCards(selectedExpansionsWithCards);
    setShowResult(true);
  }

  return (
    <Button
      className="randomize-button"
      color="primary"
      variant="contained"
      onClick={() => generateRandomCards()}
      disabled={haveTenCards}
      sx={{
        "&:disabled": {
          backgroundColor: "#888888",
        },
      }}
    >
      Randomize
    </Button>
  );
};

export default Randomize;
