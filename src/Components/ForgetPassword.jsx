import React from "react";
import { Button, TextField, Typography, Link, Grid } from "@mui/material";

const ForgetPasswordForm = ({ toggleForm }) => {
  function handleSubmit(e) {
    e.preventDefault();
    // const user = {
    //   email: e.target.email.value,
    // };
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Typography component='h1' variant='h5'>
        Forgot Password
      </Typography>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email'
        name='email'
        autoComplete='email'
        autoFocus
      />
      <Button type='submit' fullWidth variant='contained' color='primary'>
        Submit
      </Button>
      <Grid container justifyContent='flex-end'>
        <Grid item>
          <Link onClick={() => toggleForm("login")}>Back to Login</Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default ForgetPasswordForm;
