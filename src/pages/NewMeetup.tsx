import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../layout/meetups/NewMeetupForm';

const NewMeetup = () => {
  const navigate = useNavigate();

  // handler for adding or making a post http request using the fetch method
  function addMeetupHandler(meetupData: any): void {
    fetch('https://meetup-540fa-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetupData), // convert data to json
    }).then(() => {
      navigate('/', { replace: true }); // programmatic navigation
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
