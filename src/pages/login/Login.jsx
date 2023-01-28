import { Grid } from "@mui/material";
import React from "react";
import LeftSide from "./components/left-side/LeftSide";
import RightSide from "./components/right-side/RightSide";
import "./Login.css";
function Login() {
  return (
    <Grid container spacing={0} className="login">
      <Grid item>
        <LeftSide />
      </Grid>
      <Grid item>
        <RightSide />
      </Grid>
    </Grid>
  );
}

export default Login;
