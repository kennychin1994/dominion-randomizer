import { useState } from "react";
import CardSelection from "./CardSelection";

export default function Expansion({
  expansion,
  toggleAddExpansion,
  toggleSubtractExpansion,
  selectedNum,
  isTen,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cardStates, setCardStates] = useState(
    expansion.cards.map(() => false)
  );

  function toggleCardState(index) {
    const newCardStates = [...cardStates];
    newCardStates[index] = !cardStates[index];
    setCardStates(newCardStates);
  }

  const cardsRow = expansion.cards.map((c, index) => (
    <CardSelection
      key={index}
      cardName={c.name}
      isDisabled={!cardStates[index]}
      onClick={toggleCardState}
    />
  ));

  return (
    <div className="expansion-tab">
      <div className="expansion-header">
        <button
          className="expansion-tab-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {expansion.name}
        </button>
        <button
          className="toggle-button"
          onClick={toggleSubtractExpansion}
          disabled={selectedNum === 0}
        >
          -
        </button>
        <span>{selectedNum}</span>
        <button
          className="toggle-button"
          onClick={toggleAddExpansion}
          disabled={isTen}
        >
          +
        </button>
      </div>

      {isExpanded && <div className="expanding-box">{cardsRow}</div>}
    </div>
  );
}
