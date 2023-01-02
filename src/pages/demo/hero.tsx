import React from 'react';
import styled from 'styled-components';
import Grid, { Card } from './grid';
import Header from '../../layout/Header/Header';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 10px
    height: 80vh;
`;

const Hero = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Grid country="Nigeria" />
      <Card>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem
          tenetur dicta impedit libero excepturi rem vero nesciunt neque, quam
          amet harum id exercitationem asperiores repellat deserunt a maiores
          fuga natus. Officiis quidem hic cumque obcaecati, aliquam facere
          tenetur inventore harum corrupti non architecto totam iure reiciendis,
          quibusdam earum beatae!
        </p>
      </Card>
      <Card>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          veritatis adipisci quam voluptatibus alias et odio. Nihil quis tempora
          eaque doloremque dolore voluptatum, eius beatae corporis veniam
          labore. Delectus nesciunt aperiam, unde error rem, assumenda ipsam
          commodi harum nostrum sint dolorem minima labore tenetur beatae iure
          optio quos, necessitatibus ea!
        </p>
      </Card>
      <Card>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptas
          dolorem at, ipsum deserunt commodi, odit doloremque autem expedita
          saepe, harum reiciendis praesentium optio a asperiores rem. In
          exercitationem quas quod hic odit assumenda molestiae ipsa. Aperiam
          repellendus esse odio fugiat ratione pariatur, minus eum nihil
          voluptatum totam, laborum delectus!
        </p>
      </Card>
    </Container>
  );
};

export default Hero;
