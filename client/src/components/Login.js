import React from "react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Login = () => {
  return (
    <>
      <h1>Auth0Login</h1>
      <LoginButton/>
      <LogoutButton/>

    </>
  );
}
export default Login;