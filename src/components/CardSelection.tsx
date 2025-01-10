export default function CardSelection({ cardName, isDisabled, onClick }) {
  return (
    <button
      className="card-selection-button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {cardName}
    </button>
  );
}
