import React, { useState, useEffect } from 'react';
import '../css/SitterDetailCss.css';

function SitterDetailsForm(props) {

  return (

    <div>
      <h2>Sitter Details</h2>
      <div className="sitter-details-form">
      <div className="circular-image">
          <img src={props.sitter.photo_url} alt="Sitter" />
        </div>
        <p className="sitter-name">{props.sitter.first_name} {props.sitter.last_name}</p>

        <p>Pet Types: {props.sitter.accepted_pet_type.join(' | ')}</p>
        <p>Review: {props.sitter.sitter_review}</p>
        <p>Ratings: {props.sitter.sitter_rating}</p>

        <button type="submit">Book Sitting Request</button>
      </div>
    </div>


  );
}

export default SitterDetailsForm;
