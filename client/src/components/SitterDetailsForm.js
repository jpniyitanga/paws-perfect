import React, { useState, useEffect } from 'react';
import '../css/SitterDetailCss.css';

function SitterDetailsForm(props) {

  return (
    <div>
      <h2>Sitter Details</h2>

      {/* Add more fields based on your sitter data */}

      <div className="sitter-details-form">
        <p>   Name: {props.sitter.first_name} {props.sitter.last_name}
        </p>
        <button type="submit">Book Sitting Request</button>
      </div>
    </div>
  );
}

export default SitterDetailsForm;
