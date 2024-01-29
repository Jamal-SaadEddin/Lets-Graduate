import { Grid, Typography } from "@mui/material";
import { filterGroups } from "../../services/filterUtils";
import useAvailableGroupsStore from "../../state-management/Student/availableGroupsStore";
import useFilterStudentsStore from "../../state-management/Student/filterStudentsStore";
import useSearchboxStore from "../../state-management/searchboxStore";
import { Group, GroupDetails, GroupSummary } from "../common/Group";
import Table from "../common/Table";
import FilterBox from "./FilterBox";
import StudentSearchbox from "./StudentSearchbox";
import { useLocation } from "react-router-dom";
import useMergeGroupsStore from "../../state-management/Doctor/mergeGroupsStore";

const headings = ["Student Name", "Academic Number", "Address", "Email"];

export default function GroupsTable() {
  const location = useLocation();
  const withButton = location.pathname.includes("merge-groups")
    ? "merge-group"
    : "join-group";

  const availableGroups =
    withButton === "join-group"
      ? useAvailableGroupsStore((s) => s.availableGroups)
      : useMergeGroupsStore((s) => s.availableMergeGroups);

  const address = useFilterStudentsStore((s) => s.address);
  const handleAddressChange = useFilterStudentsStore(
    (s) => s.handleAddressChange
  );
  const academicNumber = useFilterStudentsStore((s) => s.academicNumber);
  const handleAcademicNumberChange = useFilterStudentsStore(
    (s) => s.handleAcademicNumberChange
  );

  const allStudents = useSearchboxStore((s) => s.allStudents);

  var addressesArray: string[] = allStudents.map((s) => s.address);
  const addresses: string[] = addressesArray.filter(
    (value, index) => addressesArray.indexOf(value) === index
  );

  var academicNumbersArray: string[] = allStudents.map((s) =>
    s.academicNumber.toString()
  );
  const academicNumbers: string[] = academicNumbersArray.filter(
    (value, index) => academicNumbersArray.indexOf(value) === index
  );

  const filteredGroups = filterGroups(
    useSearchboxStore((s) => s.filteredStudents),
    availableGroups,
    address,
    academicNumber
  );

  if (
    !availableGroups ||
    availableGroups.length === 0 ||
    availableGroups === null
  )
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
                      .map((student) => `${student.fullName}`)
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
                withButton={withButton}
              />
            </GroupDetails>
          </Group>
        ))}
      </Grid>
    </Grid>
  );
}
