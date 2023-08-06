import React from "react";
import { useEffect } from "react";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    fetch("/login")
      .then((response) => response.json())
      .then((data) => {
        isAuthenticated(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Sign In</button>
    )
  );
};

export default Login;
