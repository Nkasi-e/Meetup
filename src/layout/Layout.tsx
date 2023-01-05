import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const MainStyle = styled.main`
  margin: 1rem auto;
  width: 90%;
  max-width: 40rem;
`;

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
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
