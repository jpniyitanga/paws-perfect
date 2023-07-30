import React, { useEffect, useState } from "react";
// import Axios from 'axios';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>WELCOME TO PAWS PERFECT</h1>

      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}> {user} </p>)
      )}
    </>
  );
}
export default App;
