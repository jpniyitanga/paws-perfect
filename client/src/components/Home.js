import React, { useEffect, useState, Fragment } from "react";
import HomepageImage from "../images/homepage.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchSitters from "./SearchSitters";
import Profile from "./Profile";


function Home() {

  return (
    <div class="container-fluid bg-body"
      style={{
        backgroundImage: `url(${HomepageImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      
      <Navbar />

      <main>
        <h1 class="text-light">Your Furry Friend's Perfect Stay</h1>
        <h3 class="text-light">Book your pet's dream sitter and dog walkers!</h3>

        <br></br>

        <SearchSitters />
        {/* <Profile/> */}
        
       
        <br></br>       

      </main>
      <Footer />
    </div>
  );
}
export default Home;
