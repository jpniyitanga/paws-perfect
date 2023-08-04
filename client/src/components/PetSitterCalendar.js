import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/PetSittingCalendar.css';
import axios from 'axios';
import SitterDetailsForm from './SitterDetailsForm';

// const dayStart = moment().set({ hour: 8, minute: 0 });
// const dayEnd = moment().set({ hour: 23, minute: 0 });

const localizer = momentLocalizer(moment);


function PetSitterCalendar() {

  const [sittersData, setSittersData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/sitterreview');
        setSittersData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const events = sittersData.flatMap(sitter => {
    return sitter.availability_dates.map(date => ({
      start: moment(date).set({ hour: 1, minute: 0 }).toDate(),
      end: moment(date).set({ hour: 23, minute: 0 }).toDate(),
      title: sitter.first_name
    }));
  });

  const handleEventClick = event => {

    const selectedSitter = sittersData.find(sitter => sitter.first_name === event.title);
  //  console.log("++++++++++++++++", selectedSitter);
    setSelectedEvent(selectedSitter);
  }

  const handleCancel = () => {
    setSelectedEvent(null); // This will reset the view
};

return (
    <div className="calendar-container">
        <div className={selectedEvent ? "calendar-view" : "calendar-view full-width"}>
        <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="month"
                    views={['week', 'month']}
                    onSelectEvent={handleEventClick}
                />
        </div>

        {selectedEvent && (
            <div className="details-view">
                <button className="cancel-button" onClick={handleCancel}>
                    Cancel
                </button>
                <SitterDetailsForm sitter={selectedEvent} />
            </div>
        )}
    </div>
);
}


export default PetSitterCalendar;
