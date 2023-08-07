import React, { useEffect, useState, Fragment } from "react";
import Owners from "./Owners";
import Sitters from "./Sitters";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <di>
        <Navbar />
      </di>
      <h1 class="text-center">WELCOME TO PAWS PERFECT</h1>
      <h2>Auth0</h2>
      <LoginButton />
      <LogoutButton />

      <Profile />
    </>
  );
}
export default Home;