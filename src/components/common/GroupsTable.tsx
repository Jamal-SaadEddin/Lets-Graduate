import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { projects } from "../../constants/availableGroups";
import useSearchboxStore from "../../state-management/searchboxStore";
import StudentSearchbox from "../StudentSearchbox";
import StudentsTable from "../StudentsTable";

export default function GroupsTable() {
  const filteredStudents = useSearchboxStore((s) => s.filteredStudents);
  const filteredProjectsIds = filteredStudents.map((s) => s.projectId);

  const filteredProjects = projects.filter(
    ({ id }) => filteredProjectsIds.indexOf(id) !== -1
  );

  return (
    <div>
      <Typography variant="h6" paddingBottom={2} color="primary">
        Available Groups
      </Typography>
      <StudentSearchbox />
      <Typography variant="caption">
        Click on group to show more details
      </Typography>
      {filteredProjects.map((project) => (
        <Group key={project.id}>
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
            <StudentsTable students={project.students} />
          </GroupDetails>
        </Group>
      ))}
    </div>
  );
}

const Group = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const GroupSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const GroupDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
