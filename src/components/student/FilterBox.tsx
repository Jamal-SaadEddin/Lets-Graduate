import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

interface Props {
  filterValue: string | null;
  handleChange: (event: SyntheticEvent, value: string) => void;
  text: string;
  options: string[];
}

const FilterBox = ({ filterValue, handleChange, text, options }: Props) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={text} />}
      value={filterValue === "" ? null : filterValue}
      onInputChange={handleChange}
    />
  );
};

export default FilterBox;
