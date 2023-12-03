import { Grid, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import {
  addresses,
  batchNumbers,
  projects,
} from "../constants/availableGroups";
import useSearchboxStore from "../state-management/searchboxStore";
import { Group, GroupDetails, GroupSummary } from "./Group";
import StudentSearchbox from "./StudentSearchbox";
import FilterBox from "./common/FilterBox";
import Table from "./common/Table";

const headings = ["Student Name", "Batch Number", "Address", "Email"];

export default function GroupsTable() {
  const [address, setAddress] = useState<string | null>("");
  const handleAddressChange = (_event: SyntheticEvent, value: string) => {
    setAddress(value);
  };

  const [batchNumber, setBatchNumber] = useState<string | null>("");
  const handleBatchNumberChange = (_event: SyntheticEvent, value: string) => {
    setBatchNumber(value);
  };

  const filteredStudents = useSearchboxStore((s) => s.filteredStudents)
    .filter((s) => (address === "" ? s : s.address === address))
    .filter((s) =>
      batchNumber === "" ? s : s.batchNumber?.toString() === batchNumber
    );
  const filteredProjectsIds = filteredStudents.map((s) => s.projectId);

  const filteredProjects = projects?.filter(
    ({ id }) => filteredProjectsIds.indexOf(id) !== -1
  );

  if (!projects || projects.length === 0 || projects === null)
    return (
      <Typography variant="h6" paddingBottom={2} color="primary">
        No Groups Available!
      </Typography>
    );

  return (
    <div>
      <Typography variant="h6" paddingBottom={2} color="primary">
        Available Groups
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <StudentSearchbox />
        </Grid>
        <Grid item xs={3}>
          <FilterBox
            filterValue={address}
            handleChange={handleAddressChange}
            text="Filter by Address"
            options={addresses}
          />
        </Grid>
        <Grid item xs={3}>
          <FilterBox
            filterValue={batchNumber}
            handleChange={handleBatchNumberChange}
            text="Filter by Batch Number"
            options={batchNumbers}
          />
        </Grid>
      </Grid>
      <Typography variant="caption">
        Click on group to show more details
      </Typography>
      {filteredProjects?.map((project, index) => (
        <Group key={index}>
          <GroupSummary>
            <Grid container>
              <Grid item xs={7} sm={9}>
                <Typography>
                  {project.students
                    .map((student) => `${student.name}`)
                    .join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={5} sm={3} textAlign="end">
                <Typography>{project.students.length} Members</Typography>
              </Grid>
            </Grid>
          </GroupSummary>
          <GroupDetails>
            <Table
              tableBody={project.students}
              tableHead={headings}
              withButton
            />
          </GroupDetails>
        </Group>
      ))}
    </div>
  );
}
