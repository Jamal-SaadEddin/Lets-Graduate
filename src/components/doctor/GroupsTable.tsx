import { Grid, Typography } from "@mui/material";
import { projects } from "../../constants/supervisedProjects";

import { Group, GroupDetails, GroupSummary } from "../common/Group";

import Table from "../common/Table";

const headings = [
  "Student Name",
  "Registration Number",
  "Address",
  "Email",
  "Department",
];

export default function GroupsTable() {
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
          Groups under my supervision
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">
          Click on group to show more details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {projects?.map((group, index) => (
          <Group key={index}>
            <GroupSummary>
              <Grid container>
                <Grid item xs={7} sm={9}>
                  <Typography>{group.title}</Typography>
                </Grid>
                <Grid item xs={5} sm={3} textAlign="end">
                  <Typography>{group.students.length} Members</Typography>
                </Grid>
              </Grid>
            </GroupSummary>
            <GroupDetails>
              <Table tableBody={group.students} tableHead={headings} />
            </GroupDetails>
          </Group>
        ))}
      </Grid>
    </Grid>
  );
}
