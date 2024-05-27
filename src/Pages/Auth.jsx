import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import LoginForm from "../Components/Login";
import SignupForm from "../Components/Signup";
import ForgetPasswordForm from "../Components/ForgetPassword";

const theme = createTheme();

const Auth = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);

  const toggleForm = (form) => {
    setShowLoginForm(form === "login");
    setShowForgetPasswordForm(false);
  };

  const handleForgetPasswordClick = () => {
    setShowLoginForm(false);
    setShowForgetPasswordForm(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth='xs'
        sx={{
          paddingTop: "64px" /* Adjust padding top to match AppBar height */,
          paddingLeft: "64px",
        }}
      >
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          {showLoginForm && (
            <LoginForm
              toggleForm={toggleForm}
              handleForgetPasswordClick={handleForgetPasswordClick}
            />
          )}
          {!showLoginForm && !showForgetPasswordForm && (
            <SignupForm toggleForm={toggleForm} />
          )}
          {showForgetPasswordForm && (
            <ForgetPasswordForm toggleForm={toggleForm} />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Auth;
