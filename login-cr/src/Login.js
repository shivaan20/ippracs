import React, { useState } from "react";
import Home from "./Home";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    console.log(typeof name, typeof password);
    if (!name == "" && !password == "") {
      setIsLoggedIn(true);
    } else alert("Enter the details properly!");
  };

  return (
    <div>
      {isLoggedIn === false ? (
        <div>
          <h1>Login Form</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
