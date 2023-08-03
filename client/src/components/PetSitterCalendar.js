import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/PetSittingCalendar.css';
import axios from 'axios';

// const dayStart = moment().set({ hour: 8, minute: 0 });
// const dayEnd = moment().set({ hour: 23, minute: 0 });

const localizer = momentLocalizer(moment);

function EventDetails({ event }) {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Title: {event.title}</p>
      <p>Start Time: {event.start.toLocaleString()}</p>
      <p>End Time: {event.end.toLocaleString()}</p>
      {/* Add more details as needed */}
    </div>
  );
}

function PetSitterCalendar() {

  const [sittersData, setSittersData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/sitters');
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
    setSelectedEvent(event);
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={['week', 'month']}
        onSelectEvent={handleEventClick}
      // min={dayStart.toDate()}
      // max={dayEnd.toDate()}
      />
      {selectedEvent && <EventDetails event={selectedEvent} />}

    </div>
  );
}


export default PetSitterCalendar;
