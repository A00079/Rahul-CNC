import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import { firebase } from '../../firebase/firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Partyfyd
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(14),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    fontFamily: 'Luckiest Guy',
    letterSpacing: 1,
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [phoneNo, setPhoneNo] = useState();
  const [isVerfied, setIsVerfied] = useState(false);
  const [otpNo, setOtpNo] = useState();
  const [coderesult, setCoderesult] = useState(null);


  useEffect(() => {
    render();
  }, [])
  const render = () => {
    firebase.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.recaptchaVerifier.render();
  }
  const phoneAuth = () => {
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber('+91' + phoneNo, firebase.recaptchaVerifier).then(function (confirmationResult) {
      //s is in lowercase
      firebase.confirmationResult = confirmationResult;
      setCoderesult(confirmationResult);
      console.log(coderesult);
      setIsVerfied(true);
      toast("🦄 OTP is sent!");
    }).catch(function (error) {
      toast(error.message);
      setIsVerfied(false);
    });
  }

  const codeverify = () => {
    coderesult.confirm(otpNo).then(function (result) {
      toast("Verified Successfully!");
      var user = result.user;
      console.log(user);
      props.history.push('/pricing');
    }).catch(function (error) {
      alert(error.message);
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          {
            !isVerfied ?
              <React.Fragment>
                <TextField
                  onChange={(e) => setPhoneNo(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  id="mobileno"
                  label="Mobile No."
                  name="mobileno"
                  autoComplete="mobileno"
                  autoFocus
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  }}

                />
                <div id="recaptcha-container"></div>
              </React.Fragment>
              :
              <TextField
                onChange={(e) => setOtpNo(e.target.value)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="number"
                id="otp"
                label="OTP"
                name="otp"
                autoComplete="otp"
                autoFocus
              />
          }
          {
            !isVerfied ?
              <Button
                onClick={() => phoneAuth()}
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Send OTP
          </Button> :
              <Button
                onClick={() => codeverify()}
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Verify
        </Button>
          }

        </form>
      </div>
      <Box mt={6} mb={2}>
        <Copyright />
      </Box>
      <ToastContainer />
    </Container>
  );
}