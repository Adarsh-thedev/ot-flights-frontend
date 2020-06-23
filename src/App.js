import React from 'react';
import Logo from './Components/Logo';
import './App.css';
import Header from './Components/Header';
import FlightSearch from './Components/Flightsearch';
import Stats from './Components/Stats';

function App() {
  return (
    <React.Fragment>
      <Logo/>
      <Header/>
      <FlightSearch/>
      <Stats/>
    </React.Fragment>
  );
}

export default App;
