import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faComment, faTimes, faEdit, faTrash, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../css/bookingRequestCss.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import SitterCard from "./SitterCard";
//import axios from 'axios';
import dateFormater from '../util';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Sitters() {
  const user = localStorage.getItem("user");
  const sitter_id = JSON.parse(user).sitter_id;
  const [bookingRequests, setBookingRequests] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [editingAvailability, setEditingAvailability] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter(i => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };


  useEffect(() => {
    // Fetch booking requests
    axios.get(`http://localhost:8080/sitterbookings/${sitter_id}`)
      .then((response) => {
        setBookingRequests(response.data);
      })
      .catch((error) => console.error(error));

    // Fetch availabilities
    axios.get(`http://localhost:8080/sitter/availability/${sitter_id}`)
    .then((response) => {
      console.log("availabilities", response);

      // Ensure we're getting an array of dates and then map it to JavaScript Date objects
      if (Array.isArray(response.data[0].availability_dates)) { 
        setAvailabilities(response.data[0].availability_dates.map(dateString => new Date(dateString)));
      }

      console.log("availabilities", availabilities);
    })
    .catch((error) => console.error(error));

  }, []);

  const handleAccept = async (request) => {

    try {
      await axios.post('http://localhost:8080/updatebooking', { 'reqid': request, 'status': 'accepted' });

      console.log('Booking status updated successfully');
      window.location.reload();

    } catch (error) {
      console.error('Error updating booking status:', error);

    }

    console.log('Accepted:', request);
  };


  const handleChat = async (request) => {
    // Implement your chat logic here


    console.log('Chat with owner:', request);
  };

  const handleReject = async (request) => {



    try {
      await axios.post('http://localhost:8080/updatebooking', { 'reqid': request, 'status': 'rejected' });

      console.log('Booking status updated successfully');
      window.location.reload();

    } catch (error) {
      console.error('Error updating booking status:', error);

    }

    console.log('Rejected:', request);
  };


  const updateAvailability = async (oldDateStr) => {
    try {
        // Convert the oldDate string to a Date object before calling toISOString
        const oldDateObj = new Date(oldDateStr);
        
        const response = await axios.put(`http://localhost:8080/sitter/availability`, {
            oldDate: oldDateObj.toISOString(),
            newDate: selectedDateTime.toISOString(),
            sitterId: sitter_id
        });

        if (response.data.success) {
            // Update the local state after a successful API call
            setAvailabilities(prev => {
                const updatedDates = [...prev];
                const index = updatedDates.findIndex(date => date.toISOString() === oldDateStr); // Compare as string form
                if (index > -1) {
                    updatedDates[index] = selectedDateTime; // Directly use the Date object, not its string form
                }
                return updatedDates;
            });
            setEditingAvailability(null);
            window.location.reload();
          }
    } catch (error) {
        console.error("Error updating availability:", error);
    }
};
const deleteAvailability = async (dateToDeleteStr) => {
    try {
        const dateToDeleteObj = new Date(dateToDeleteStr);

        const response = await axios.delete(`http://localhost:8080/sitter/availability`, {
            data: { dateToRemove: dateToDeleteObj.toISOString(), sitterId: sitter_id }
        });

        if (response.data.success) {
            // Update the local state after a successful API call
            setAvailabilities(prev => {
                const updatedDates = prev[0].availability_dates.filter(date => date !== dateToDeleteStr);
                return [{ availability_dates: updatedDates }];
            });
        }
    } catch (error) {
        console.error("Error deleting availability:", error);
    }
};

const addNewAvailability = async (newDateStr) => {
    try {
        const newDateObj = new Date(newDateStr);

        const response = await axios.post('http://localhost:8080/sitter/availability', {
            availabilityDate: newDateObj.toISOString(),
            sitterId: sitter_id
        });

        if (response.data.success) {
            // Update the local state after a successful API call
            setAvailabilities(prev => {
                const updatedDates = [...prev[0].availability_dates, newDateObj.toISOString()];
                return [{ availability_dates: updatedDates }];
            });
        }
    } catch (error) {
        console.error("Error adding new availability:", error);
    }
};

  return (
    <>
      <Navbar />
      <div class="d-flex flex-column">
        <SitterCard />
        <br></br>
        <SitterCard />
        <br></br>
        <SitterCard />
        <br></br>
      </div>


      <Accordion defaultActiveKey={['0']}>
        {bookingRequests.map((request, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              <Button variant="link">
                Owner: {request.owner_full_name} - Pet Type: {request.pet_type}
              </Button>
            </Accordion.Header>
            <Accordion.Body>
              <p>Description: {request.pet_description}</p>
              <p>Start Date: {new Date(request.booking_start_date).toLocaleDateString()}</p>
              <p>End Date: {new Date(request.booking_end_date).toLocaleDateString()}</p>
              <div className="action-buttons">
                <button type="button" className="btn btn-success mr-2" onClick={() => handleAccept(request.id)}>
                  <FontAwesomeIcon icon={faCheck} /> Accept
                </button>
                <button type="button" className="btn btn-primary mr-2" onClick={() => handleChat(request)}>
                  <FontAwesomeIcon icon={faComment} /> Chat with Owner
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleReject(request.id)}>
                  <FontAwesomeIcon icon={faTimes} /> Reject
                </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <div className="availability-section">
    <h2>Your Availability</h2>
      {availabilities.map((date, index) => (
    <div key={index} className="availability-item">
        {editingAvailability && editingAvailability.getTime() === date.getTime() ? (
            <>
                <DatePicker
                    selected={selectedDateTime}
                    onChange={setSelectedDateTime}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                />
                <button onClick={() => updateAvailability(date)}>
                    <FontAwesomeIcon icon={faEdit} /> Update
                </button>
                <button onClick={() => setEditingAvailability(null)}>
                    <FontAwesomeIcon icon={faTimes} /> Cancel
                </button>
            </>
        ) : (
            <>
                <span>{dateFormater(date)}</span>
                <button onClick={() => {
                    setEditingAvailability(date);
                    setSelectedDateTime(date);
                }}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button onClick={() => deleteAvailability(date)}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
            </>
        )}
    </div>
))}
</div>

     
    </>
  );

}

export default Sitters;