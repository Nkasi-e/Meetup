import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favourite from './pages/Favourite';
import Header from './layout/Header/Header';

const theme = {};
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/newmeetup" element={<NewMeetup />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
