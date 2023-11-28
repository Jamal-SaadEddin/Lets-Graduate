import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { Button, Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";

export default function GroupsTable() {
  return (
    <div>
      <Typography variant="h6" paddingBottom={2} color="primary">
        Available Groups
      </Typography>
      <Typography variant="caption">
        Click on group to show more details
      </Typography>
      <Group>
        <GroupSummary>
          <Grid container>
            <Grid item xs={7} sm={9}>
              <Typography>{"Jamal & Mohammad"}</Typography>
            </Grid>
            <Grid item xs={5} sm={3} textAlign="end">
              <Typography>{"2"} Members</Typography>
            </Grid>
          </Grid>
        </GroupSummary>
        <GroupDetails>
          <BasicTable />
        </GroupDetails>
      </Group>
      <Group>
        <GroupSummary>
          <Grid container>
            <Grid item xs={7} sm={9}>
              <Typography>{"Jamal & Mohammad"}</Typography>
            </Grid>
            <Grid item xs={5} sm={3} textAlign="end">
              <Typography>{"2"} Members</Typography>
            </Grid>
          </Grid>
        </GroupSummary>
        <GroupDetails>
          <BasicTable />
        </GroupDetails>
      </Group>
      <Group>
        <GroupSummary>
          <Grid container>
            <Grid item xs={7} sm={9}>
              <Typography>{"Jamal & Mohammad"}</Typography>
            </Grid>
            <Grid item xs={5} sm={3} textAlign="end">
              <Typography>{"2"} Members</Typography>
            </Grid>
          </Grid>
        </GroupSummary>
        <GroupDetails>
          <BasicTable />
        </GroupDetails>
      </Group>
      <Group>
        <GroupSummary>
          <Grid container>
            <Grid item xs={7} sm={9}>
              <Typography>{"Jamal & Mohammad"}</Typography>
            </Grid>
            <Grid item xs={5} sm={3} textAlign="end">
              <Typography>{"2"} Members</Typography>
            </Grid>
          </Grid>
        </GroupSummary>
        <GroupDetails>
          <BasicTable />
        </GroupDetails>
      </Group>
      <Group>
        <GroupSummary>
          <Grid container>
            <Grid item xs={7} sm={9}>
              <Typography>{"Jamal & Mohammad"}</Typography>
            </Grid>
            <Grid item xs={5} sm={3} textAlign="end">
              <Typography>{"2"} Members</Typography>
            </Grid>
          </Grid>
        </GroupSummary>
        <GroupDetails>
          <BasicTable />
        </GroupDetails>
      </Group>
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

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

function createStudent(
  name: string,
  batchNumber: number,
  address: string,
  email: string
) {
  return { name, batchNumber, address, email };
}

const rows = [
  createStudent("Jamal SaadEddin", 119, "Nablus", "jamalsa3d2001@gmail.com"),
  createStudent(
    "Mohammad Mohammad",
    119,
    "Nablus- Zawata",
    "mohammadawi@gmail.com"
  ),
];

export function BasicTable() {
  const [requested, setRequested] = React.useState(false);
  const handleRequest = () => {
    setRequested(!requested);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Batch Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                startIcon={requested && <CancelIcon />}
                endIcon={!requested && <SendIcon />}
                size="small"
                onClick={handleRequest}
              >
                {requested ? "cancel request" : "send request"}
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.batchNumber}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell colSpan={2}>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
