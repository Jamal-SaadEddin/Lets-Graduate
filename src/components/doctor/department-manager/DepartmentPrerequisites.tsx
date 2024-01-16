import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import {
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Prerequisite,
  supervisorPrerequisites,
} from "../../../constants/prerequisites";

const DepartmentPrerequisites = () => {
  const params = useParams();

  const [savedPrerequisites, setSavedPrerequisites] = useState<Prerequisite[]>(
    supervisorPrerequisites
  );

  const [newPrerequisite, setNewPrerequisite] = useState<Prerequisite>({
    id: -1,
    content: "",
  });

  const handleAddNewPrerequisite = () => {
    if (newPrerequisite.content.replace(/\s/g, "").length > 0) {
      const newId = 10;
      console.log("Generating new ID: " + newId);
      const prerequisite = { id: newId, content: newPrerequisite.content };
      setNewPrerequisite(prerequisite);
      console.log(`New Prerequisite Added: ${prerequisite.content}`);
      setSavedPrerequisites([...savedPrerequisites, prerequisite]);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleAddNewPrerequisite();

      const prerequisite = { id: -1, content: "" };
      setNewPrerequisite(prerequisite);
    }
  };

  const handleDeletePrerequisite = (prerequisiteId: number) => {
    console.log("Deleting Prerequisite from database: " + prerequisiteId);

    const prerequisites = savedPrerequisites.filter(
      (p) => p.id !== prerequisiteId
    );
    setSavedPrerequisites(prerequisites);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Prerequisites - Graduation Project {params["projectType"]}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <TextField
              multiline
              fullWidth
              placeholder="Add new prerequisite..."
              value={newPrerequisite.content}
              onChange={(event) => {
                if (event.target.value.length <= 100)
                  setNewPrerequisite({ content: event.target.value, id: -1 });
              }}
              onKeyDown={handleKeyDown}
              InputProps={{
                endAdornment: (
                  <BookmarkAddIcon
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={handleAddNewPrerequisite}
                  />
                ),
              }}
            />
            <Divider sx={{ my: 3 }} />
            <Table size="medium">
              <TableBody>
                {savedPrerequisites.map((prerequisite, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontSize: 16 }}>
                      {prerequisite.content}
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: 16 }}>
                      <Button
                        color="error"
                        variant="outlined"
                        onClick={() =>
                          handleDeletePrerequisite(prerequisite.id)
                        }
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DepartmentPrerequisites;
