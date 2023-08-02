import {React, useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/PetSittingCalendar.css'


// Example data representing pet sitting schedules
const events = [
  {
    title: 'Availablity - Cat',
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
  }]
  
const dayStart = moment().set({ hour: 8, minute: 0 }); // Set the min start time for day view
const dayEnd = moment().set({ hour: 22, minute: 0 }); // Set the max end time for day view


const localizer = momentLocalizer(moment);

function PetSitterCalendar() {
  const [eventsList, setEventsList] = useState([]);
  
  
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month" 
        views = {['week', 'day', 'month']}
        min={dayStart.toDate()}
        max={dayEnd.toDate()}
        
      />
    </div>
  );
}

export default PetSitterCalendar;
