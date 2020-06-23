import React from 'react';
import Logo from './Components/Logo';
import './App.css';
import Header from './Components/Header';
import FlightSearch from './Components/Flightsearch';

function App() {
  return (
    <React.Fragment>
      <Logo/>
      <Header/>
      <FlightSearch/>
    </React.Fragment>
  );
}

export default App;
