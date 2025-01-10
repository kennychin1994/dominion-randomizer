import Button from "@mui/material/Button";

export default function Randomize({
  mySets,
  selectedExpansions,
  setRandomCards,
  setShowResult,
  includeAttack,
  haveTenCards,
}) {
  const selectTenCards = () =>
    selectedExpansions.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) !== 10;

  function pickRandomFromExpansion(cards, cardNum) {
    const chooseFromCards = includeAttack
      ? cards
      : cards.filter((c) => !c.category.includes("Attack"));
    const randomIndex = new Set();
    while (randomIndex.size < cardNum) {
      const ranNum = Math.floor(Math.random() * chooseFromCards.length);
      randomIndex.add(ranNum);
    }
    return [...randomIndex].map((i) => chooseFromCards[i]);
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
}
