import React from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';

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
    <Wrapper>
      <Card>
        <StyledImage>
          <img src={image} alt={title} />
        </StyledImage>
        <div>
          <h3>{title}</h3>
          <p>{address}</p>
          <p>{description}</p>
        </div>
        <div>
          <button>Add to Favorite</button>
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MeetupItems;
