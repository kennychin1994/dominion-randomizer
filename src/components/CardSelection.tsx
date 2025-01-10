type CardSelectionProps = {
  cardName: string;
  isDisabled: boolean;
  onClick: () => void;
};

const CardSelection: React.FC<CardSelectionProps> = ({
  cardName,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      className="card-selection-button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {cardName}
    </button>
  );
};

export default CardSelection;
