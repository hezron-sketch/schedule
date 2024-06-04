
import './app.css';

import React, { useState } from 'react';


const EventTable = () => {
  // Initialize state to hold activities data
  const [activities, setActivities] = useState([
    { time: '10:00 AM', activity: 'Opening Ceremony', description: 'Welcome speech and introduction of guests.' },
    { time: '10:30 AM', activity: 'Keynote Address', description: 'Insights into the future of technology.' },
    { time: '11:30 AM', activity: 'Break', description: 'Refreshments and networking break.' },
    { time: '12:00 PM', activity: 'Panel Discussion', description: 'Discussion on current industry trends.' },
    { time: '1:00 PM', activity: 'Lunch', description: 'Enjoy a delicious lunch provided by the organizers.' },
    { time: '2:00 PM', activity: 'Workshops', description: 'Hands-on sessions on various topics.' },
    { time: '4:00 PM', activity: 'Closing Ceremony', description: 'Thank you speech and farewell.' },
  ]);

  return (
    <div className="event-table">
      <h2>Event Schedule</h2>
      <h2>Day 1</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.time}</td>
              <td>{activity.activity}</td>
              <td>{activity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h2>Day X</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.time}</td>
              <td>{activity.activity}</td>
              <td>{activity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;

