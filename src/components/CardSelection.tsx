type CardSelectionProps = {
  cardName: string;
  onClick: () => void;
};

const CardSelection: React.FC<CardSelectionProps> = ({ cardName, onClick }) => {
  return (
    <button className="card-selection-button" onClick={onClick}>
      {cardName}
    </button>
  );
};

export default CardSelection;
