import React from 'react';
import Logo from './Components/Logo';
import './App.css';
import Header from './Components/Header';
import FlightSearch from './Components/Flightsearch';
import Slide from 'react-reveal/Slide';
import Stats from './Components/Stats';
import AboutOpenTabs from './Components/AboutOpenTabs';
import AboutCarbonOffset from './Components/AboutCarbonOffset';

function App() {
  return (
    <React.Fragment>
      <Logo/>
      <Header/>
      <FlightSearch/>
      <Slide right>
        <Stats/>
        <AboutOpenTabs/>
        <AboutCarbonOffset/>
      </Slide>
    </React.Fragment>
  );
}

export default App;
