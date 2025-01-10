import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

type FilterBarProp = { setIncludeAttack: () => void };

const FilterBar: React.FC<FilterBarProp> = ({ setIncludeAttack }) => {
  return (
    <div>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Attack Cards"
        onChange={setIncludeAttack}
      />
    </div>
  );
};

export default FilterBar;
