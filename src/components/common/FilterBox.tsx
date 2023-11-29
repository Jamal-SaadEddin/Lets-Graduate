import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import { addresses } from "../../constants/addresses";

interface Props {
  filterValue: string | null;
  handleChange: (event: SyntheticEvent, value: string) => void;
}

const FilterBox = ({ filterValue, handleChange }: Props) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={addresses}
      renderInput={(params) => (
        <TextField {...params} label="Filter by Address" />
      )}
      value={filterValue}
      onInputChange={handleChange}
    />
  );
};

export default FilterBox;
