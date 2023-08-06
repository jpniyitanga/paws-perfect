import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Bookings from './Bookings'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



import { useAuth0 } from "@auth0/auth0-react";

const LoginForm = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  // const [existingUser, setExistingUser] = useState(false);

  const checkUser = async () => {
    try {
      const existingUser = axios.post('/api/login', { sub_id:user.sub });
      if (existingUser) {
        console.log("Hello")
        isAuthenticated(existingUser)
      } else {
        console.log("Not a user, please register!")
      }
    } catch (error) {
      console.error(error)
    }
  };


   
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}! </p>
          <button onClick={checkUser}>Login</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Route path="/register" element={<Bookings />} />
      )}
    </div>
  );
};

export default LoginForm;
