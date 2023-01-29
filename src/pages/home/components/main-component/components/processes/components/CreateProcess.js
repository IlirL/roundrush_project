import { Box, Card } from "@mui/material";
import React, { useState } from "react";
import "./CreateProcess.css";
import AddIcon from "@mui/icons-material/Add";
import CreateProcessDialog from "./CreateProcessDialog";
function CreateProcess() {
  const [showCreateNewProcessDialog, setShowCreateNewProcessDialog] =
    useState(false);

  return (
    <Box className="dashboard-create-process-card">
      <CreateProcessDialog
        show={showCreateNewProcessDialog}
        closeDialog={() => setShowCreateNewProcessDialog(false)}
      />
      <Box
        component={"p"}
        className="add-icon-create-process"
        onClick={() => setShowCreateNewProcessDialog(true)}
      >
        {" "}
        <AddIcon />
      </Box>
      <Box component="p" className="description-create-process">
        Create a new process
      </Box>
    </Box>
  );
}

export default CreateProcess;
