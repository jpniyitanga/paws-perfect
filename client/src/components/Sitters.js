import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/bookingRequestCss.css'; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import SitterCard from "./SitterCard";

function Sitters() { // it will replaced by session information
const sitter_id = 2; // props.sitter_id
  const [bookingRequests, setBookingRequests] = useState([]);

  useEffect(() => {


    fetch(`http://localhost:8080/sitterbookings/${sitter_id}`)
      .then((response) => response.json())
      .then((data) => {
        setBookingRequests(data);
      })
      .catch((error) => console.error(error));
  }, []);


  const handleAccept = (request) => {
    // Implement your accept logic here
    console.log('Accepted:', request);
  };

  const handleChat = (request) => {
    // Implement your chat logic here
    console.log('Chat with owner:', request);
  };

  const handleReject = (request) => {
    // Implement your reject logic here
    console.log('Rejected:', request);
  };

  return (
    
    <div class="container-fluid bg-body">
    <Navbar />
    <div class="d-flex flex-column">
    <SitterCard />
    <br></br>
    <SitterCard />
    <br></br>
    <SitterCard />
    <br></br>
    </div>
    
    <ul className="list-group pet-requests-list">
      {bookingRequests.map((request, index) => (
        <li key={index} className="list-group-item pet-request-item">
          <p>Owner: {request.owner_full_name}</p>
          <p>Pet Type: {request.pet_type}</p>
          <p>Description: {request.pet_description}</p>
          <p> Start Date: {request.booking_start_date}</p>
          <p> End Date: {request.booking_end_date}</p>


          <div className="action-buttons">
            <button type="button" className="btn btn-success mr-2" onClick={() => handleAccept(request)}>
              <FontAwesomeIcon icon={faCheck} /> Accept
            </button>
            <button type="button" className="btn btn-primary mr-2" onClick={() => handleChat(request)}>
              <FontAwesomeIcon icon={faComment} /> Chat with Owner
            </button>
            <button type="button" className="btn btn-danger" onClick={() => handleReject(request)}>
              <FontAwesomeIcon icon={faTimes} /> Reject
            </button>
          </div>
        </li>
      ))}
    </ul>

    
      
      {/* <div>
        <ul>
          {sitters.map((sitter, key) => (
            <li key={sitter.id}>
              {sitter.first_name} {sitter.last_name}
            </li>
          ))}
        </ul>
      </div> */}
      <Footer />
    </div>
  );
  
}

export default Sitters;
