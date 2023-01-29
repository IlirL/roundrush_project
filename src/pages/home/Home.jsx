import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import MainComponent from "./components/main-component/MainComponent";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import TopPart from "./components/top-part/TopPart";
import "./Home.css";
function Home() {
  const [showNavigationBar, setShowNavigationBar] = useState(true);
  return (
    <Container className="home-container" maxWidth={false}>
      <TopPart
        onClickMenuIcon={() => setShowNavigationBar(!showNavigationBar)}
        menuShown={showNavigationBar}
      />
      <Box className="navigation-bar-main-component">
        <NavigationBar show={showNavigationBar} />
        <MainComponent />
      </Box>
    </Container>
  );
}

export default Home;
