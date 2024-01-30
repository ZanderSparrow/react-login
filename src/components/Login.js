import React from "react";

const Login = ({onLogin}) => {
  const [user, setUser] = React.useState();

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
