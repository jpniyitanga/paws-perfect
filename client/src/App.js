import React, { useEffect, useState } from "react";


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
      <div>
        {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((owner, i) => <p key={i}> {owner} </p>)
        )}
      </div>
    </>
  );
}
export default App;
