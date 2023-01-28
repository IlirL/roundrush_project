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
import React from "react";
import logoCoraly from "../../../../assets/logo/logo-coraly.png";
import "./LeftSide.css";
function LeftSide() {
  return (
    <Container>
      <Box component="img" src={logoCoraly} height={"30px"} width={"30px"} />
      <Box className="title">
        <Typography className="current-component-title">Log in</Typography>
        <Typography className="welcome-message">
          Thanks to come back on Coraly
        </Typography>
      </Box>
      <FormControl>
        <FormGroup id="email">
          <TextField label="Email" type={"email"} size={"small"} />
        </FormGroup>
        <FormGroup id="password">
          <TextField label="Password" type={"password"} size="small" />
        </FormGroup>
        <FormGroup className="remember-me-forgot-password">
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Typography className="forgot-password">Forgot Password</Typography>
        </FormGroup>
        <Button variant="contained" type="submit" className="login-button">
          Login
        </Button>
      </FormControl>
      <Box className="sign-up-message-redirect-message">
        <Typography component={"p"} className="sign-up-message">
          Don't you have an account?
        </Typography>
        <Typography component="span" className="redirect-message">
          Sign up now
        </Typography>
      </Box>
    </Container>
  );
}

export default LeftSide;
