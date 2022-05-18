import { AppBar, Container, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalSvgSelector } from './assets/GlobalSvgSelector';
import { Header } from './Header/Header';
import { Home } from './pages/Home';
import { InfoCityWeather } from './pages/InfoCityWeather';



function App() {
  return (
    <div className="App">
      <AppBar>
        <Container>
          <SvgIcon>
            <GlobalSvgSelector id='header-logo' />
          </SvgIcon>
          <Typography variant='h6'>Reacr Weather App by Artur</Typography>
        </Container>
      </AppBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info-city-weather' element={<InfoCityWeather />} />
      </Routes>
    </div>
  );
}

export default App;
