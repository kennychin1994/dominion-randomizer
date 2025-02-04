import { Card } from "./types";
import Box from '@mui/material/Box';

type ResultProp = {
  randomCards: {name: string; cards: Card[]}[];
  maxNumCards: number;
};

const Result: React.FC<ResultProp> = ({ randomCards, maxNumCards }) => {
  const columnNum = Math.min(maxNumCards, 5);
  const resultLine = randomCards.map((e: {name: string; cards: Card[]}) => {
    return (
      <Box className="result-box" sx={{ flexGrow: 1 }}>
        <h3 className="result-title">{e.name}</h3>
        <Box className="result-grid" sx={{gridTemplateColumns: `repeat(${columnNum}, 1fr)`}}>
          {e.cards.map((c: Card) => (
            <Box key={c.name} className="result-image-grid">
              <img src={c.image} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  });

  return <div>{resultLine}</div>;
};

export default Result;
