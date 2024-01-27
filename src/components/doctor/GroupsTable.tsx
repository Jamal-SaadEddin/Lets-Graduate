import { Grid, Typography } from "@mui/material";
import useMyGroupsStore from "../../state-management/Doctor/myGroupsStore";
import { Group, GroupDetails, GroupSummary } from "../common/Group";
import Table from "../common/Table";
import GradingTable from "./common/GradingTable";
import { SupervisedProjectsStudent } from "../../constants/supervisedProjects";

interface Props {
  projectTitle?: boolean;
  grading?: boolean;
}

const GroupsTable = ({ projectTitle = false, grading = false }: Props) => {
  const myGroups = useMyGroupsStore((s) => s.myGroups);

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

  if (!myGroups || myGroups.length === 0 || myGroups === null)
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
        <Typography variant="caption">
          Click on group to show more details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {myGroups.map((group, index) => (
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
                  tableBody={
                    group.students.map(
                      ({ fullName, id, projectType, projectStatus }) => ({
                        fullName,
                        id,
                        projectType,
                        projectStatus,
                      })
                    ) as SupervisedProjectsStudent[]
                  }
                />
              ) : (
                <Table
                  tableBody={
                    group.students.map(
                      ({ fullName, id, address, email, department }) => ({
                        fullName,
                        id,
                        address,
                        email,
                        department,
                      })
                    ) as SupervisedProjectsStudent[]
                  }
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
