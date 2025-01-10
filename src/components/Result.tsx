export default function Result({ randomCards }) {
  const resultLine = randomCards.map((e) => {
    const cardsName = e.cards.map((card) => card.name);
    return (
      <p key={e.name}>
        <b>{e.name}</b>: {cardsName.join(", ")}
      </p>
    );
  });

  return <div>{resultLine}</div>;
}
