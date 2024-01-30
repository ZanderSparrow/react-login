import React from "react";

import Login from "../components/Login";

const Landing = () => {
  const onLogin = (username) => {
    console.log("Welcome", username);
  }

  return (
    <div>
      <h3>Welcome</h3>
      <Login onLogin={onLogin}/>
    </div>
  )
}

export default Landing;
