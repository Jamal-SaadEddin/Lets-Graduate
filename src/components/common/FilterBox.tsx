import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

interface Props {
  filterValue: string | null;
  handleChange: (event: SyntheticEvent, value: string) => void;
  label: string;
  options: string[];
}

const FilterBox = ({ filterValue, handleChange, label, options }: Props) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      value={filterValue}
      onInputChange={handleChange}
    />
  );
};

export default FilterBox;
