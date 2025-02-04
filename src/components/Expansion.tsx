import { useState } from "react";
import CardSelection from "./CardSelection";
import { ExpansionProp } from "./types";
import Grid from '@mui/material/Grid2';

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
    <Grid className="expansion-grid" key={expansion.name} size={{ xs: 2, sm: 2, md: 2 }}>
      <h3>{expansion.name}</h3>
      <img className="expansion-image" src={expansion.image}></img>
      <div className="expansion-header">
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
    </Grid>
  );
};

export default Expansion;
