import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

const Login = ({onLogin}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState();
  const [passError, setPassError] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = false;

    if (!password.length) {
      setPassError("password must be 1 or more characters");
      errors = true;
    }

    if (!email.length) {
      setEmailError("email is required");
      errors = true;
    } else {
      const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!email.match(validEmail)) {
        setEmailError("please enter a valid email");
        errors = true;
      }
    }

    if (!errors) {
      onLogin({email, password});
      setEmailError(null);
      setPassError(null);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="email-input"
        value={email}
        error={Boolean(emailError)}
        helperText={emailError}
        label="Email"
        type="email"
        variant="standard"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <TextField
          required
          value={password}
          error={Boolean(passError)}
          helperText={passError}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

      <Button 
        variant="contained" 
        size="large" 
        color="primary"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  );
}

export default Login;
