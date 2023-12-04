import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import {
  AvailableSupervisor,
  availableSupervisors,
} from "../constants/availableSupervisors";
import useSearchboxStore from "../state-management/searchboxStore";

const SupervisorSeachbox = () => {
  const supervisor = useSearchboxStore((s) => s.supervisor);
  const setSupervisor = useSearchboxStore((s) => s.setSupervisor);
  const filteredSupervisors = useSearchboxStore((s) => s.filteredSupervisors);
  const setFilteredSupervisors = useSearchboxStore(
    (s) => s.setFilteredSupervisors
  );

  const handleInputChange = (_event: SyntheticEvent, value: string) => {
    // Perform manual filtering and log the results
    const filtered = availableSupervisors.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSupervisors(filtered);
  };

  return (
    <Autocomplete
      options={filteredSupervisors}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search by first or last name"
          InputProps={{
            endAdornment: null, // Remove the down arrow icon
          }}
        />
      )}
      value={supervisor}
      onChange={(_event: any, newValue: AvailableSupervisor | null) =>
        setSupervisor(newValue)
      }
      onInputChange={handleInputChange}
      open={false} // Ensure the menu is closed
      clearOnBlur={false} // Retain the input value on blur
    />
  );
};

export default SupervisorSeachbox;
