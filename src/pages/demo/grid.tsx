import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 10px
    gap: 1rem;
`;
export const Card = styled.div`
  padding: 10px;
  /* margin: 1rem */
`;
interface IGrid {
  name?: string;
  country: string;
}

function Grid({ name, country }: IGrid): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return (
    <Container>
      <Card>
        <p>{country}</p>
        <p>{name}</p>
      </Card>
      <Card>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Try</button>
      </Card>
      <Card>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?
        </p>
      </Card>
    </Container>
  );
}

export default Grid;
