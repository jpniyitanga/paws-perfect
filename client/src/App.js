import React, { useEffect, useState, Fragment } from "react";

import Owners from "./components/Owners";
import Sitters from "./components/Sitters";


function App() {
 


  return (
    <Fragment>
      <h1>WELCOME TO PAWS PERFECT</h1>
      <main>
        <h2>Owners</h2>
        <Owners />

        <h2>Sitters</h2>
        <Sitters/>
      </main>
    </Fragment>
  );
}
export default App;
