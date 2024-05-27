import React, { useState } from "react";
import { Button, TextField, Typography, Link, Grid } from "@mui/material";

const SignupForm = ({ toggleForm }) => {
  const [showOTPField, setShowOTPField] = useState(false);
  const api = process.env.REACT_APP_API_URL;
  const handleSignup = (e) => {
    setShowOTPField(true);
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch(`${api}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.warn(data);
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    showOTPField ? handleVerifyOTP(e) : handleSignup(e);
  };

  const handleVerifyOTP = (e) => {
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      otp: e.target.otp.value,
    };
    console.warn(user);
    console.warn(`${api}/user/verify`);
    fetch(`${api}/user/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.warn(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Typography component='h1' variant='h5'>
        Sign Up
      </Typography>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='username'
        label='Username'
        name='username'
        autoComplete='username'
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email'
        name='email'
        autoComplete='email'
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='new-password'
      />

      {showOTPField && (
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          id='otp'
          label='OTP'
          name='otp'
          autoComplete='one-time-code'
        />
      )}
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        onClick={() => setShowOTPField(true)} // Show OTP field on Signup button click
      >
        {showOTPField ? "Verify OTP" : "Sign Up"}
      </Button>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Link onClick={() => toggleForm("login")}>Back to Login</Link>
        </Grid>
        {showOTPField && (
          <Grid item>
            <Link>Resend OTP</Link>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default SignupForm;
