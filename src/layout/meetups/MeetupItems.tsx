import React from 'react';
import dummyMeetup from './MeetupList';

interface IMeetup {
  image: string;
  title: string;
  description: string;
  address: string;
}

const MeetupItems = ({
  image,
  title,
  description,
  address,
}: IMeetup): JSX.Element => {
  return (
    <li>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{address}</p>
        <p>{description}</p>
      </div>
      <div>
        <button>Add to Favorite</button>
      </div>
    </li>
  );
};

export default MeetupItems;
