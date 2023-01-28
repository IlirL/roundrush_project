import React from "react";
import { Grid } from "@mui/material";
import LeftSide from "./components/left-side/LeftSide";
import RightSide from "./components/right-side/RightSide";
import "./signUp.css";
function SignUp() {
  return (
    <Grid container spacing={0} className="sign-up">
      <Grid item>
        <LeftSide />
      </Grid>
      <Grid item>
        <RightSide />
      </Grid>
    </Grid>
  );
}

export default SignUp;
