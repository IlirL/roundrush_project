import React from "react";
import { Box, Card, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavigationBar.css";
import ItemIcon from "../../../../assets/menu/item-icon.png";
import ArrowIcon from "../../../../assets/menu/arrow-icon.png";
import DatabaseIcon from "../../../../assets/menu/database-icon.png";
import DiagramIcon from "../../../../assets/menu/diagram-icon.png";
import ExitIcon from "../../../../assets/menu/exit-icon.png";
import FileIcon from "../../../../assets/menu/files-icon.png";
import LdIcon from "../../../../assets/menu/ld-icon.png";
import QuestionIcon from "../../../../assets/menu/question-icon.png";
import SuitcaseIcon from "../../../../assets/menu/suitcase-icon.png";
import UsersIcon from "../../../../assets/menu/users-icon.png";
import LogoCoraly from "../../../../assets/logo/logo-coraly.png";
function NavigationBar({ show }) {
  return (
    <Card className={`navigation-bar${show ? "" : " do-not-show"}`}>
      <Box component="img" src={LdIcon} width={30} height={30} />

      <Box component="img" src={ItemIcon} width={30} height={30} />
      <Container className="arrow-icons-container">
        <Box component="img" src={ArrowIcon} width={8} height={8} />
        <Box component="img" src={ArrowIcon} width={8} height={8} />
      </Container>
      <Box component="img" src={DiagramIcon} width={15} height={15} />
      <Box component="img" src={ExitIcon} width={15} height={15} />
      <Box component="img" src={FileIcon} width={15} height={15} />
      <Box component="img" src={QuestionIcon} width={15} height={15} />
      <Box component="img" src={SuitcaseIcon} width={15} height={15} />
      <Box component="img" src={UsersIcon} width={15} height={15} />
      <Box component="img" src={DatabaseIcon} width={15} height={15} />
      <Container className="logo-coraly-icon-container">
        <Box
          component="img"
          className={"logo-coraly-icon"}
          src={LogoCoraly}
          width={30}
          height={30}
        />
      </Container>
    </Card>
  );
}

export default NavigationBar;
