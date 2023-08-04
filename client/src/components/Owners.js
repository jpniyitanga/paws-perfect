import React, { useState, useEffect } from 'react';

function Owners() {
  const [owners, setOwners] = useState([]);

  useEffect(() => { 
    fetch("/owners")
      .then((response) => response.json())
      .then((data) => {
        setOwners(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      
      <div>
        <ul>
          {owners.map((owner, key) => (
            <li key={owner.id}>
              {owner.first_name} {owner.last_name}{owner.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Owners;