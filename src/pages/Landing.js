import React from "react";

import Login from "../components/Login";

const Landing = () => {
  const [user, setUser] = React.useState();

  const onLogin = (data) => {
    fetch('https://reqres.in/api/users/', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        setUser(data?.email);
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h3>Welcome {user && user}</h3>
      <Login onLogin={onLogin}/>
    </div>
  )
}

export default Landing;
