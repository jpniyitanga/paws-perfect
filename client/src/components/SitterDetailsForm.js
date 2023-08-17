import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/SitterDetailCss.css';
import StarRating from '../components/StartRating';



function SitterDetailsForm(props) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [selectedPet, setselectedPet] = useState(1);



  const handleBookRequest = async () => {
    console.log("under handleBookRequest ", props);
    const { sitter, startDate, endDate, owner_id, petsData } = props;

    const newBooking = {
      pet_id: selectedPet,
      owner_id: owner_id,
      sitter: sitter,
      status: "pending",
      startDate: startDate,
      endDate: endDate
    };

    try {
      await axios.post('http://localhost:8080/bookingrequest', newBooking);
      setSent(true);
      console.log('Booking request sent successfully');
      props.setReset(false);

    } catch (error) {
      console.error('Error sending booking request:', error);
      setError(true);
      props.setReset(false);
    }
  };
  const handleOptionChange = (event) => {
    setselectedPet(event.target.value);
  };
  const showSitterDetails = () => {
    if (props.reset) {
      return (

        <div className="detail-card">

          <div className="sitter-details-form">
            <div className="circular-image"> <img src={props.sitter.photo_url} alt="Sitter" /> </div>
            <p className="sitter-name">{props.sitter.first_name} {props.sitter.last_name}</p>
            <p>
              Furry Friends -  {props.sitter.accepted_pet_type.map(petType => petType.charAt(0).toUpperCase() + petType.slice(1)).join(' | ')}
            </p>
            <h5>Reviews</h5>
            <p> {props.sitter.sitter_review}</p>
            <StarRating rating={props.sitter.sitter_rating} />

            <div className="space-between"></div>
            <div className="space-between"></div>
           
            <div className="form-group-row-container">
            <div className="form-group row">
              <label htmlFor="petSelect" className="col-sm-6 col-form-label"> Select Your Pet</label>
              <div className="col-sm-6">
                <select className="form-control custom-dropdown" id="petSelect" value={selectedPet} onChange={handleOptionChange}>
                  {props.petsData.map(pet => (
                    <option key={pet.id} value={pet.id}>{pet.name}</option>
                  ))}
                </select>
              </div>
            </div>
            </div>

            <div className="space-between"></div> <div className="space-between"></div>

            <button className="btn btn-primary sitter-button" type="submit" onClick={handleBookRequest}>
              Book Pet Sitting
            </button>

          </div>
        </div>
      );
    } else {
      if (error) {

        return (
          <div>
            <h2>Oops!</h2>
            <p>Unable to send request to {props.sitter.first_name}. Please contact Admin!</p>
          </div>
        );

      }
      if (sent) {
        return (
          <div className="success-message">
            <h2>Success!</h2>
            <p>Request successfully sent for {props.sitter.first_name}.</p>
          </div>

        );
      }

    }

  };
  return (
    <div >
      {showSitterDetails()}
    </div>
  );
}

export default SitterDetailsForm;