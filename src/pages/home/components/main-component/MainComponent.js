import { Box } from "@mui/material";
import React from "react";
import Description from "./components/Description";
import Processes from "./components/processes/Processes";
import Title from "./components/Title";
import "./MainComponent.css";
function MainComponent() {
  return (
    <Box className="home-main-component">
      <Title />
      <Description />
      <Processes />
    </Box>
  );
}

export default MainComponent;
