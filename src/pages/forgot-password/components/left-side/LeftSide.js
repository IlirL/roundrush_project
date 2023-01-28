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
        <Typography className="current-component-title-forgot-password">
          Did you forget your password?
        </Typography>
        <Typography className="welcome-message-forgot-password">
          Insert your email and we will send you a link in your email box to
          reset your password
        </Typography>
      </Box>
      <FormControl>
        <FormGroup id="email">
          <TextField label="Email" type={"email"} size="small" />
        </FormGroup>
        <Button
          variant="contained"
          type="submit"
          className="forgot-password-button"
        >
          Reset Password
        </Button>
      </FormControl>
      <Box className="forgot-password-message-redirect-message">
        <Typography component={"p"} className="forgot-password-message">
          Go back to
        </Typography>
        <Typography component="span" className="redirect-message">
          Login
        </Typography>
      </Box>
    </Container>
  );
}

export default LeftSide;
