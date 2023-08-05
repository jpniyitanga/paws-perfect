import React, { Fragment } from "react";

import Login from "./components/Login";
import Logout from "./components/Logout";


function App() {
 


  return (
    <Fragment>
      <h1>WELCOME TO PAWS PERFECT</h1>
      <main className="column">       
        <Login />
        <Logout />
      </main>
    </Fragment>
  );
}
export default App;
