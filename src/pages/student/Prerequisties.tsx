import CircleIcon from "@mui/icons-material/Circle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Title from "./Title";
import { prerequisites, Prerequistie } from "../../constants/prerequisites";
import { useState } from "react";
import { Typography } from "@mui/material";
import * as React from "react";

export default function Prerequisties() {
  const [savedPrerequisites, setSavedPrerequisties] = useState(prerequisites);

  const handleClick = (preId: number) => {
    setSavedPrerequisties(
      savedPrerequisites.map((pre) =>
        pre.id === preId ? { ...pre, answer: !pre.answer } : pre
      )
    );
  };

  return (
    <React.Fragment>
      <Title>Prerequisties - Graduation Project 1</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 16 }}>Prerequistie</TableCell>
            <TableCell align="right" sx={{ fontSize: 16 }}>
              Answer
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savedPrerequisites.map((prerequisite) => (
            <TableRow key={prerequisite.id}>
              <TableCell sx={{ fontSize: 16 }}>
                {prerequisite.content}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 16 }}>
                {prerequisite.answer && (
                  <Typography
                    sx={{
                      display: "inline",
                      paddingLeft: "7px",
                      paddingRight: "9px",
                      background: "#DFECDC",
                      color: "#233729",
                      borderRadius: "20px",
                    }}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: "12px",
                        color: "#77997E",
                        marginRight: "3px",
                      }}
                    />
                    Yes
                  </Typography>
                )}
                <Checkbox onClick={() => handleClick(prerequisite.id)} />
              </TableCell>
            </TableRow>
          ))}
          {savedPrerequisites.length >= 1 &&
          savedPrerequisites.every((p: Prerequistie) => p.answer === true) ? (
            <TableRow key={0}>
              <TableCell
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Segoe UI Emoji",
                }}
              >
                You've completed all the Prerequisties! <br /> Do you want to
                register Graduation Project 1 this semester?
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontSize: 16 }}
                >
                  Yes, Register
                </Button>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
