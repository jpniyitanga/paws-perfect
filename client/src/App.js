
import React, { useEffect, useState, Fragment } from "react";
import PetSitterCalendar from './components/PetSitterCalendar';
import Owners from "./components/Owners";
import Sitters from "./components/Sitters";


function App() {

  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res));
  }

  useEffect(() => {
    callAPI()
  }, [])

  return (
    <div className="App">
        <h1>WELCOME TO PAWS PERFECT</h1>
      {/* <p>Paws Perfect</p> */}
     <PetSitterCalendar />
      {/* <p>{apiResponse}</p> */}
  
    <Fragment>
    
      <main>
        <h2>Owners</h2>
        <Owners />

        <h2>Sitters</h2>
        <Sitters/>
      </main>
    </Fragment>
  </div>
  )
}

export default App;