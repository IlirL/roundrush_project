import { Box, Card, Container } from "@mui/material";
import React from "react";
import "./TopPart.css";
import MenuIcon from "@mui/icons-material/Menu";
function TopPart({ onClickMenuIcon, menuShown }) {
  return (
    <Card className="top-part">
      <Box
        className={`menu-icon${menuShown ? " b-nav-bar" : ""}`}
        onClick={onClickMenuIcon}
      >
        <MenuIcon />
      </Box>
      <Box className={"history-main"}>Process</Box>
    </Card>
  );
}

export default TopPart;
