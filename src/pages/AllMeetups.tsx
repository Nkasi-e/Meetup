import React, { useEffect, useState } from 'react';
import MeetupItems from '../layout/meetups/MeetupItems';
import dummyMeetup from '../layout/meetups/MeetupList';

interface Data {
  [k: string]: any;
}

const AllMeetups = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [meetupData, setMeetupData] = React.useState([]);

  // useEffect(() => {
  //   const api = async () => {
  //     const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'GET',
  //     });
  //     const jsonData = await data.json();
  //     setMeetupData(jsonData);
  //     setLoading(false);
  //   };

  //   api();
  // }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }
  return (
    <>
      {/* <h1>{meetupData}</h1> */}
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
