import { Grid, Typography } from "@mui/material";
import {
  academicNumbers,
  addresses,
  projects,
} from "../../constants/availableGroups";
import { filterGroups } from "../../services/filterUtils";
import useFilterStudentsStore from "../../state-management/filterStudentsStore";
import useSearchboxStore from "../../state-management/searchboxStore";
import FilterBox from "./FilterBox";
import { Group, GroupDetails, GroupSummary } from "./Group";
import StudentSearchbox from "./StudentSearchbox";
import Table from "./Table";

const headings = ["Student Name", "Academic Number", "Address", "Email"];

export default function GroupsTable() {
  const address = useFilterStudentsStore((s) => s.address);
  const handleAddressChange = useFilterStudentsStore(
    (s) => s.handleAddressChange
  );
  const academicNumber = useFilterStudentsStore((s) => s.academicNumber);
  const handleAcademicNumberChange = useFilterStudentsStore(
    (s) => s.handleAcademicNumberChange
  );

  const filteredGroups = filterGroups(
    useSearchboxStore((s) => s.filteredStudents),
    projects,
    address,
    academicNumber
  );

  if (!projects || projects.length === 0 || projects === null)
    return (
      <Typography variant="h6" paddingBottom={2} color="primary">
        No Groups Available!
      </Typography>
    );

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6" paddingBottom={2} color="primary">
          Available Groups
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
              filterValue={academicNumber}
              handleChange={handleAcademicNumberChange}
              text="Filter by Academic Number"
              options={academicNumbers}
            />
          </Grid>
        </Grid>
        <Typography variant="caption">
          Click on group to show more details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {filteredGroups?.map((group, index) => (
          <Group key={index}>
            <GroupSummary>
              <Grid container>
                <Grid item xs={7} sm={9}>
                  <Typography>
                    {group.students
                      .map((student) => `${student.name}`)
                      .join(", ")}
                  </Typography>
                </Grid>
                <Grid item xs={5} sm={3} textAlign="end">
                  <Typography>{group.students.length} Members</Typography>
                </Grid>
              </Grid>
            </GroupSummary>
            <GroupDetails>
              <Table
                tableBody={group.students}
                tableHead={headings}
                withButton
              />
            </GroupDetails>
          </Group>
        ))}
      </Grid>
    </Grid>
  );
}
