import { Grid, Typography } from "@mui/material";
import {
  academicNumbers,
  addresses,
  projects,
} from "../../constants/availableGroups";
import {
  GradingProjectsStudent,
  supervisorProjects,
} from "../../constants/supervisedProjects";
import { filterGroups } from "../../services/filterUtils";
import useFilterStudentsStore from "../../state-management/Student/filterStudentsStore";
import useSearchboxStore from "../../state-management/searchboxStore";
import { Group, GroupDetails, GroupSummary } from "../common/Group";
import Table from "../common/Table";
import FilterBox from "../student/FilterBox";
import StudentSearchbox from "../student/StudentSearchbox";
import { gradingProjects } from "./../../constants/supervisedProjects";
import GradingTable from "./common/GradingTable";

interface Props {
  projectTitle?: boolean;
  withFiltration?: boolean;
  grading?: boolean;
}

const GroupsTable = ({
  projectTitle = false,
  withFiltration = false,
  grading = false,
}: Props) => {
  const headings = grading
    ? [
        "Student Name",
        "Registration Number",
        "Project Type",
        "Project Status (Evaluate here)",
      ]
    : projectTitle
    ? ["Student Name", "Registration Number", "Address", "Email", "Department"]
    : ["Student Name", "Academic Number", "Address", "Email"];

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
    grading ? gradingProjects : projectTitle ? supervisorProjects : projects,
    address,
    academicNumber
  );

  if (
    !supervisorProjects ||
    supervisorProjects.length === 0 ||
    supervisorProjects === null
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
          {projectTitle
            ? "Groups under my supervision"
            : "Search the name of one of the students from the other group you want to merge with"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {withFiltration && (
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
        )}
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
                  {projectTitle ? (
                    <Typography>
                      {group.title}, ID: {group.id}
                    </Typography>
                  ) : (
                    <Typography>
                      {group.students
                        .map((student) => `${student.fullName}`)
                        .join(", ")}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={5} sm={3} textAlign="end">
                  <Typography>{group.students.length} Members</Typography>
                </Grid>
              </Grid>
            </GroupSummary>
            <GroupDetails>
              {grading ? (
                <GradingTable
                  tableHead={headings}
                  tableBody={group.students as GradingProjectsStudent[]}
                />
              ) : (
                <Table
                  tableBody={group.students}
                  tableHead={headings}
                  withButton={projectTitle ? false : "merge-group"}
                />
              )}
            </GroupDetails>
          </Group>
        ))}
      </Grid>
    </Grid>
  );
};

export default GroupsTable;
