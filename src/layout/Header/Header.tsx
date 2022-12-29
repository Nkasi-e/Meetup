import React from 'react';
import { Container } from './header.styles';
import Nav from '../Nav/Nav';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Container>
        <Nav />
      </Container>
    </>
  );
};

export default Header;
