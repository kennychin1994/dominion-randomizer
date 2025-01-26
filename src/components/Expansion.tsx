import { useState } from "react";
import CardSelection from "./CardSelection";
import { ExpansionProp } from "./types";

type ExpansionFunctionProp = {
  expansion: ExpansionProp;
  toggleAddExpansion: () => void;
  toggleSubtractExpansion: () => void;
  selectedNum: number;
  isTen: boolean;
};

const Expansion: React.FC<ExpansionFunctionProp> = ({
  expansion,
  toggleAddExpansion,
  toggleSubtractExpansion,
  selectedNum,
  isTen,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cardStates, setCardStates] = useState(
    expansion.cards.map(() => false)
  );

  function toggleCardState(index: number) {
    const newCardStates = [...cardStates];
    newCardStates[index] = !cardStates[index];
    setCardStates(newCardStates);
  }

  const cardsRow = expansion.cards.map((c, index) => (
    <CardSelection
      key={index}
      card={c}
      onClick={() => toggleCardState(index)}
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
};

export default Expansion;
