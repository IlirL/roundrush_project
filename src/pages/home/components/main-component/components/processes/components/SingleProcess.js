import { Box } from "@mui/material";
import React from "react";
import "./SingleProcess.css";
import ProcessIcon from "../../../../../../../assets/process/process-icon.png";
import LockIcon from "../../../../../../../assets/process/lock-icon.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function SingleProcess({ name, backgroundColor, privateProcess }) {
  return (
    <Box
      className="dashboard-process-card"
      style={{ backgroundColor: backgroundColor }}
    >
      <Box
        component={"p"}
        className="icon-process-card"
        // onClick={() => setShowCreateNewProcessDialog(true)}
      >
        {" "}
        {/* <AddIcon /> */}
        <Box component="img" src={ProcessIcon} width={20} height={20} />
      </Box>
      <Box component="p" className="description-process-card">
        {/* Create a new process */}
        {name}
      </Box>
      {privateProcess && (
        <Box component={"p"} className="lock-icon-process-card">
          <Box component="img" src={LockIcon} width={10} height={10} />
        </Box>
      )}
      {privateProcess && (
        <Box component={"p"} className="more-icon-process-card">
          <MoreVertIcon />
        </Box>
      )}
    </Box>
  );
}

export default SingleProcess;
