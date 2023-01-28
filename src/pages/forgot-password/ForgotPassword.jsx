import { Grid } from "@mui/material";
import React from "react";
import LeftSide from "./components/left-side/LeftSide";
import RightSide from "./components/right-side/RightSide";
import "./ForgotPassword.css";
function ForgotPassword() {
  return (
    <Grid container spacing={0} className="forgot-password">
      <Grid item>
        <LeftSide />
      </Grid>
      <Grid item>
        <RightSide />
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;
