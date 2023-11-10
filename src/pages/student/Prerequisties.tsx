import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Title from "./Title";
import { prerequisites } from "../../constants/prerequisites";
import { useState } from "react";
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
                <Checkbox onClick={() => handleClick(prerequisite.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
