import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Example data representing pet sitting schedules
const events = [
  {
    title: 'Pet Sitting Appointment',
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
  },
  // Add more events as needed
];

const localizer = momentLocalizer(moment);

function PetSitterCalendar() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week" 
      />
    </div>
  );
}

export default PetSitterCalendar;
