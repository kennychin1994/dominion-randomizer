import "./styles.css";
import mySets from "./components/Dominion List";
import Expansion from "./components/Expansion";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
// import FilterBar from "./components/FilterBar";
import Randomize from "./components/Randomize";
import { useState } from "react";

export default function App() {
  const [selectedExpansions, setSelectedExpansions] = useState(
    mySets.map(() => 0)
  );
  const [includeAttack, setIncludeAttack] = useState(true);

  function toggleExpansionSelect(index: number, isAdd: boolean) {
    const newSelectedExpansions = [...selectedExpansions];
    newSelectedExpansions[index] = isAdd
      ? selectedExpansions[index] + 1
      : selectedExpansions[index] - 1;
    setSelectedExpansions(newSelectedExpansions);
  }

  const selectTenCards =
    selectedExpansions.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) !== 10;

  const expansions = mySets.map((e, index) => (
    
    <Expansion
      key={e.name}
      expansion={e}
      toggleAddExpansion={() => toggleExpansionSelect(index, true)}
      toggleSubtractExpansion={() => toggleExpansionSelect(index, false)}
      selectedNum={selectedExpansions[index]}
      isTen={!selectTenCards}
    />
  ));

  return (
    <div className="App">
      <h1>Dominion Randomizer</h1>
      <h5>Choose the expansion(s) you will like to play</h5>
      <Randomize
        mySets={mySets}
        selectedExpansions={selectedExpansions}
        includeAttack={includeAttack}
        haveTenCards={selectTenCards}
      />
      <Box className="expansion-select-box" sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
          {expansions}
        </Grid>
      </Box>
    </div>
  );
}
