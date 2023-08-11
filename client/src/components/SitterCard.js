import React from "react";
import JaneDoeImage from "../images/janedoe.jpeg";
import JonhDoeImage from "../images/jonhdoe.jpeg";

function SitterCard() {
  return (
    <div class="row g-0" style={{width: 650}}>
      <div class="col-md-4">
        <img src={JonhDoeImage} alt="John Doe Image" style={{ width: '160px', height: '120px' }} />

        {/* <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg> */}

      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">John Doe</h5>
          <p class="card-text"><small class="text-muted">Calm, caring and energetic!</small></p>
          <p class="card-text">I had an incredible experience with Sarah as my pet sitter. Her genuine love and care for animals were evident from the moment we met. </p>
          
        </div>
      </div>
    </div>

  )
}

export default SitterCard;