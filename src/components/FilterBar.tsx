import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function FilterBar({ setIncludeAttack }) {
  return (
    <div>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Attack Cards"
        onChange={setIncludeAttack}
      />
    </div>
  );
}
