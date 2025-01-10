import "./styles.css";
import mySets from "./components/Dominion List";
import Expansion from "./components/Expansion";
import Result from "./components/Result";
import FilterBar from "./components/FilterBar";
import Randomize from "./components/Randomize";
import { useState } from "react";

export default function App() {
  const [selectedExpansions, setSelectedExpansions] = useState(
    mySets.map(() => 0)
  );
  const [randomCards, setRandomCards] = useState([]);
  const [showResult, setShowResult] = useState(false);
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
        setRandomCards={setRandomCards}
        setShowResult={setShowResult}
        includeAttack={includeAttack}
        haveTenCards={selectTenCards}
      />
      {showResult && <Result randomCards={randomCards} />}
      <FilterBar setIncludeAttack={() => setIncludeAttack(!includeAttack)} />
      <div className="expansions-list">{expansions}</div>
    </div>
  );
}
