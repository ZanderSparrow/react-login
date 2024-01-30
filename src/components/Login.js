import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

const Login = ({onLogin}) => {
  const [user, setUser] = React.useState();
  const [errors, setErrors] = React.useState({});

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
        error={errors.email ? true : false}
        label="Email"
        type="email"
        variant="standard"
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />

      <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

      <Button 
        variant="contained" 
        size="large" 
        color="primary"
        onClick={() => console.log(user)}
      >
        Login
      </Button>
    </Box>
  );

  return (
    <div>
      <label htmlFor="email" type="email">Email:</label>
      <input name="email" type="email"></input>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password"></input>
      <button onClick={onLogin}>Login</button>
    </div>
  )
}

export default Login;
