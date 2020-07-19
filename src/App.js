import React from 'react';
import './App.css';
import Base from './Components/Base';
import FlightSearch from './Components/Flightsearch';

function App() {
  return (
    <React.Fragment>
      <Base>
        <FlightSearch/>
      </Base>
    </React.Fragment>
  );
} 

export default App;
