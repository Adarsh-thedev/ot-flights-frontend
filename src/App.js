import React from 'react';
import Logo from './Components/Logo';
import './App.css';
import Header from './Components/Header';
import Booking from './Components/Booking';

function App() {
  return (
    <React.Fragment>
      <Logo/>
      <Header/>
      <Booking/>
    </React.Fragment>
  );
}

export default App;
