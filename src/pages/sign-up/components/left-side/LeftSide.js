import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import logoCoraly from "../../../../assets/logo/logo-coraly.png";
import "./LeftSide.css";
function LeftSide() {
  return (
    <Container>
      <Box component="img" src={logoCoraly} height={"30px"} width={"30px"} />
      <Box className="title">
        <Typography className="current-component-title-sign-up">
          Create your workspace
        </Typography>
        <Typography className="welcome-message-sign-up">
          Coraly is the tool to manage your work processes form the same place
        </Typography>
      </Box>
      <FormControl>
        <FormGroup id="workspace-name">
          <TextField label="Workspace Name" type={"text"} size={"small"} />
        </FormGroup>
        <FormGroup id="email">
          <TextField label="Email" type={"email"} size="small" />
        </FormGroup>
        <FormGroup className="agree-with-conditions">
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography component={"p"} className={"text"}>
                Agree with{" "}
                <Typography
                  component={"span"}
                  className={"text terms-conditions-privacy-cookie"}
                >
                  Terms and Conditions, Privacy Policy
                </Typography>{" "}
                and
                <Typography
                  component={"span"}
                  className={"text terms-conditions-privacy-cookie"}
                >
                  {" "}
                  Cookie Policy
                </Typography>
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography component={"p"} className="text">
                I authorize Coraly to process my personal data in order to
                receive informational, promotional and commercial communications
                via e-mail
              </Typography>
            }
          />
        </FormGroup>
        <Button variant="contained" type="submit" className="sign-up-button">
          Create Now the account
        </Button>
      </FormControl>
      <Box className="sign-up-message-redirect-message">
        <Typography component={"p"} className="sign-up-message">
          Do you have an account?
        </Typography>
        <Typography component="span" className="redirect-message">
          Sign in
        </Typography>
      </Box>
    </Container>
  );
}

export default LeftSide;
