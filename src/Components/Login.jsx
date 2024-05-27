import React from "react";
import { Button, TextField, Typography, Link, Grid } from "@mui/material";

const LoginForm = ({ toggleForm, handleForgetPasswordClick }) => {
  function handleSubmit(e) {
    e.preventDefault();
    // const user = {
    //   email: e.target.emailOrUsername.value,
    //   password: e.target.password.value
    // };
    // Handle form submission logic here...
  }
  
  return (
    <div>
      <Typography component='h2' variant='h4' align='center' gutterBottom>
        Welcome Back!
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              label='Email or Username'
              name='emailOrUsername'
              autoComplete='emailOrUsername'
              autoFocus
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              label='Password'
              type='password'
              name='password'
              autoComplete='current-password'
              required
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
          <Grid item>
            <Link onClick={handleForgetPasswordClick} variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link onClick={() => toggleForm("signup")} variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
