import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const MainStyle = styled.main`
  margin: 1rem auto;
  width: 90%;
  max-width: 40rem;
`;

interface ILayout {
  [k: string]: any;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <div>
        <Header />
      </div>
      <MainStyle>{children}</MainStyle>
    </>
  );
};

export default Layout;
