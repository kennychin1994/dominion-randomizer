import Button from "@mui/material/Button";
import { Card, ExpansionProp } from "./types";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Result from "./Result";



type RandomizeProp = {
  mySets: ExpansionProp[];
  selectedExpansions: number[];
  includeAttack: boolean;
  haveTenCards: boolean;
};

const Randomize: React.FC<RandomizeProp> = ({
  mySets,
  selectedExpansions,
  includeAttack,
  haveTenCards,
}) => {
    const [openResult, setOpenResult] = useState(false);
    const [randomCards, setRandomCards] = useState<{name: string; cards: Card[]}[]>([]);

    function handleCloseResult() {
      setOpenResult(false);
    }

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
    setOpenResult(true);
  }

  return (
    <div>
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
    <Dialog className="result-display" onClose={handleCloseResult} open={openResult} maxWidth={false} classes={{ paper: 'dialog-paper' }}>
        <IconButton
          aria-label="close"
          onClick={handleCloseResult}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <Result randomCards={randomCards} maxNumCards={Math.max(...selectedExpansions)} />
      </Dialog>
    </div>
  );
};

export default Randomize;
