import React, { useEffect, useState, Fragment } from "react";
import HomepageImage from "../images/homepage.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchSitters from "./SearchSitters";
import Profile from "./Profile";
import "../css/home.css"


function Home() {

  return (
    <div class="container-fluid bg-body"
      style={{
        backgroundImage: `url(${HomepageImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      
      <Navbar />

      <main className="content">
        <h1 className="main-heading">Your Furry Friend's Perfect Stay</h1>
        <h3 className="subheading">Book your pet's dream sitter and dog walkers!</h3>

        <SearchSitters />
        <Profile />

      </main>
      <Footer />
    </div>
  );
}
export default Home;
