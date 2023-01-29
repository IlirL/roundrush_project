import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import "./CreateProcessDialog.css";
function CreateProcessDialog({ show, closeDialog }) {
  return (
    <Dialog open={show} onClose={closeDialog}>
      <DialogTitle className="dialog-title-create-process-dialog">
        Create a new process
      </DialogTitle>
      <DialogContent className="dialog-content-create-process-dialog">
        <TextField type="text" label="Process Name" size="small" />
        <TextField type="text" label="Color" size="small" />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} className="cancel-process-dialog-button">
          Cancel
        </Button>
        <Button className="create-process-dialog-button">Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateProcessDialog;
