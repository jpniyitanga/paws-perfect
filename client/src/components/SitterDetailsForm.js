import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/SitterDetailCss.css';



function SitterDetailsForm(props) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  console.log("props", props);

  const handleBookRequest = async () => {
    console.log("under handleBookRequest ", props);

   
    const { sitter, min, max } = props;

  const newBooking = {
    sitter: sitter,
    status: "pending",
    min: min, 
    max: max  
  };

    // console.log("new booking", newBooking); 

    try {
      await axios.post('http://localhost:8080/api/bookings', newBooking);
      setSent(true);
      console.log('Booking request sent successfully');

    } catch (error) {
      console.error('Error sending booking request:', error);
      setError(true);
    }
  };

  const showSitterDetails = () => {
    if(error){
      return (
        <div>
          <h2>Oops!</h2>
          <p>Unable to send request to {props.sitter.first_name}. Please contact Admin!</p>
        </div>
        );

    }
    if (sent) {
    return (
    <div>
      <h2>Success!</h2>
      <p>Request successfully sent for {props.sitter.first_name}.</p>
    </div>
    );
    } else {
    return (
    <div>
      <h2>Sitter Details</h2>
      <div className="sitter-details-form">
        <div className="circular-image"> <img src={props.sitter.photo_url} alt="Sitter" /> </div>
        <p className="sitter-name">{props.sitter.first_name} {props.sitter.last_name}</p>
        <p>Pet Types: {props.sitter.accepted_pet_type.join(' | ')}</p>
        <p>Review: {props.sitter.sitter_review}</p>
        <p>Ratings: {props.sitter.sitter_rating}</p>
        

        <button type="button" onClick={handleBookRequest}>Book Sitting Request</button>
      </div>
    </div>
    );
    }
    };
    return (
      <div>
        {showSitterDetails()}
      </div>
    );
}

export default SitterDetailsForm;
