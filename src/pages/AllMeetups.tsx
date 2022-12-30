import React from 'react';
import MeetupItems from '../layout/meetups/MeetupItems';
import dummyMeetup from '../layout/meetups/MeetupList';

const AllMeetups = () => {
  return (
    <>
      {dummyMeetup.map((meetup) => {
        return (
          <div key={meetup.id}>
            <MeetupItems
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          </div>
        );
      })}
    </>
  );
};

export default AllMeetups;
