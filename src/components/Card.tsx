import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: white;
  border-radius: 6px;
`;

interface ICard {
  [k: string]: any;
}

const Card = ({ children }: ICard): JSX.Element => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
