import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState('');
  // const history = useHistory();


  const handleLogin = (email, password) => {
    return axios
      .post("/login", {
        email,
        password,
      })
      // Handle successful login
      .then((response) => {
        console.log("User logged in:", response.data);
        
      })
      // Handle login error
      .catch((error) => {
        console.error("Login failed:", error.response.data);
      });
  };



  return (
    <div>
      <h2>Login page</h2>
    
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={() =>handleLogin(email, password)}>Login</button>
      
    </div>
  );
};

export default Login;
