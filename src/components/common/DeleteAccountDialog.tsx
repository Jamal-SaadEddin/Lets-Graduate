import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { deleteAccount } from "../../hooks/useMyProfile";
import { useNavigate } from "react-router-dom";

interface Props {
  openDeleteAccountDialog: boolean;
  setOpenDeleteAccountDialog: (openDeleteAccountDialog: boolean) => void;
}

export default function DeleteAccountDialog({
  openDeleteAccountDialog,
  setOpenDeleteAccountDialog,
}: Props) {
  const navigate = useNavigate();

  const [confirmDelete, setConfirmDelete] = React.useState("");

  const handleClose = () => {
    setOpenDeleteAccountDialog(false);
  };

  const handleDeleteAccount = async () => {
    const isDeleted = await deleteAccount(11725044);
    if (isDeleted) navigate("/login");

    setOpenDeleteAccountDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openDeleteAccountDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" mb={4}>
            This will{" "}
            <b>permanently remove all your projects and partnerships.</b> Please
            note this will also{" "}
            <b>remove all of your information from our system.</b>
            <br />
            <br />
            Type <em>delete</em> in the field below to confirm.
          </DialogContentText>
          <TextField
            id="outlined-basic"
            color="error"
            label="Type DELETE to confirm."
            variant="outlined"
            value={confirmDelete}
            onChange={(event) => setConfirmDelete(event.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ paddingBottom: 3, px: 3 }}>
          <Button variant="outlined" color="inherit" onClick={handleClose}>
            Keep Account
          </Button>
          <Button
            variant="contained"
            color="error"
            disabled={confirmDelete.toLowerCase() === "delete" ? false : true}
            onClick={handleDeleteAccount}
          >
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
