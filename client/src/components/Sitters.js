import React, { useState, useEffect } from "react";

function Sitters() {
  const [sitters, setSitters] = useState([]);

  useEffect(() => {
    fetch("/sitters")
      .then((response) => response.json())
      .then((data) => {
        setSitters(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <ul>
          {sitters.map((sitter, key) => (
            <li key={sitter.id}>
              {sitter.first_name} {sitter.last_name} {sitter.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sitters;
