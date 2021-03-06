import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Facebook from './facebook';
import Google from './google';
import ClassNames from '../button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (

    <Container component="main" maxWidth="xs">
       <Grid item xs={12}>
        <Typography component="h3">
          Sign Up
        </Typography>
        </Grid>
      <CssBaseline />
      
      <div className={classes.paper}>
      
        <Grid container spacing={3}>

        <Grid item xs={12}>
        <Typography component="h1" variant="h4">
          Create Your Account
        </Typography>
        </Grid>
        <Grid item xs={12}>
            By clicking Sign In, you agree to our Terms of Use and our Privacy Policy.
            </Grid>
        <Grid item xs={6}>
        <Google/>
        </Grid>
        <Grid item xs={6}>
        <Facebook/>
        </Grid>
        </Grid>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            By clicking Sign In, you agree to our Terms of Use and our Privacy Policy.
            </Grid>
          </Grid>
          <ClassNames type="submit" fullWidth variant="contained" color= {"#ffffff"} className={classes.submit}>
            Sign Up
          </ClassNames>
        </form>
      </div>
    </Container>
    
  );
}