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
import { Prerequisite } from "../../../constants/prerequisites";
import usePrerequisitesStore from "../../../state-management/prerequisitesStore";
import {
  addPrerequisite,
  deletePrerequisite,
} from "../../../hooks/usePrerequisites";
import useUserStore from "../../../state-management/userStore";
import { DoctorInfo } from "../../../hooks/useAuth";

const DepartmentPrerequisites = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  const userInfo = fetchedUser?.info as DoctorInfo;
  if (fetchedUser?.type !== "doctor" || !userInfo.isDepartmentManager)
    return null;
  const params = useParams();

  const prerequisites = usePrerequisitesStore((s) => s.prerequisites);
  const setPrerequisites = usePrerequisitesStore((s) => s.setPrerequisites);

  const [newPrerequisite, setNewPrerequisite] = useState<Prerequisite>({
    prerequisiteId: -1,
    content: "",
  });

  const handleAddNewPrerequisite = async () => {
    if (newPrerequisite.content.replace(/\s/g, "").length > 0) {
      const projectType = params["projectType"] === "1" ? "gp1" : "gp2";
      const prerequisite = {
        department: fetchedUser.department,
        projectType: projectType,
        content: newPrerequisite.content,
      };
      setNewPrerequisite(prerequisite);
      console.log(`New Prerequisite Added: ${prerequisite.content}`);
      setPrerequisites([...prerequisites, prerequisite]);
      await addPrerequisite(prerequisite);
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

  const handleDeletePrerequisite = async (prerequisiteId: number) => {
    const newPrerequisites = prerequisites.filter(
      (p) => p.prerequisiteId !== prerequisiteId
    );
    setPrerequisites(newPrerequisites);
    await deletePrerequisite(prerequisiteId);
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
                  setNewPrerequisite({
                    content: event.target.value,
                    prerequisiteId: -1,
                  });
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
                {prerequisites.map((prerequisite, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontSize: 16 }}>
                      {prerequisite.content}
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: 16 }}>
                      <Button
                        color="error"
                        variant="outlined"
                        onClick={() => {
                          handleDeletePrerequisite(
                            prerequisite.prerequisiteId!
                          );
                        }}
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
