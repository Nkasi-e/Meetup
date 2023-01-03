import React, { useEffect, useState } from 'react';
import MeetupItems from '../layout/meetups/MeetupItems';
import dummyMeetup from '../layout/meetups/MeetupList';

interface Data {
  [k: string]: any;
}

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Data[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meetup-540fa-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        // looping through the keys in the database to display data
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h3>Loading.....</h3>
      </section>
    );
  }

  return (
    <>
      <h3>All Meetup</h3>
      {loadedMeetups.map((meetup) => {
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
