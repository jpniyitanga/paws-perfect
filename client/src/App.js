
import React, { useState, useEffect } from 'react';
import PetSitterCalendar from './components/PetSitterCalendar';


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
      {/* <p>Paws Perfect</p> */}
     <PetSitterCalendar />
      {/* <p>{apiResponse}</p> */}
    </div>


  );
}

export default App;
