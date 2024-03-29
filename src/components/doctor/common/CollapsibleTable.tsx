import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Chip } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { SupervisedProjectsProjectItem } from "../../../constants/availableGroups";
import { Submission } from "../../../constants/supervisorSubmissions";
import useViewedSubmissionStore from "../../../state-management/viewedSubmissionStore";

const headings = [
  "Project Title",
  "Group Size",
  "Submission Status",
  "Acceptance Status",
  "View Abstract",
];

interface CollapsibleTableProps {
  projects: SupervisedProjectsProjectItem[] | null | undefined;
  submissions: Submission[];
}

const CollapsibleTable = ({ projects, submissions }: CollapsibleTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {headings.map((h) => (
              <TableCell>{h}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {projects?.map((project) => (
            <Row
              key={project.id}
              project={project}
              submission={
                submissions.filter((s) => s.projectId === project.id)[0]
              }
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface RowProps {
  project: SupervisedProjectsProjectItem;
  submission: Submission;
}

const Row = ({ project, submission }: RowProps) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const setSubmission = useViewedSubmissionStore((s) => s.setSubmission);
  const setProjectTitle = useViewedSubmissionStore((s) => s.setProjectTitle);

  const handleView = () => {
    setSubmission(submission);
    setProjectTitle(project.title);
    navigate(`${submission.submissionId}`);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {project.title}
        </TableCell>
        <TableCell>{project.students.length}</TableCell>
        <TableCell>
          <Chip
            size="small"
            color={!submission ? "error" : "success"}
            label={!submission ? "Not Submitted" : "Submitted"}
          />
        </TableCell>
        <TableCell>
          <Chip
            size="small"
            color={
              !submission
                ? "error"
                : submission.acceptStatus === "Pending"
                ? "primary"
                : "success"
            }
            label={!submission ? "Not Submitted" : submission.acceptStatus}
          />
        </TableCell>
        <TableCell>
          {submission && (
            <Button variant="contained" size="small" onClick={handleView}>
              View
            </Button>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Students
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Registration Number</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Department</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {project.students.map((student) => (
                    <TableRow key={student.studentId}>
                      <TableCell component="th" scope="row">
                        {student.fullName}
                      </TableCell>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.address}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.department}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default CollapsibleTable;
