import React from 'react';
import Logo from './Components/Logo';
import Header from './Components/Header';
import Slide from 'react-reveal/Slide';
import Stats from './Components/Stats';
import AboutOpenTabs from './Components/AboutOpenTabs';
import AboutCarbonOffset from './Components/AboutCarbonOffset';
import AboutRainForest from './Components/AboutRainForest';
import Footer from './Components/Footer';
import './App.css';
import FlightSearch from './Components/Flightsearch';

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
                <AboutRainForest/>
            </Slide>
            <Footer/>
    </React.Fragment>
  );
} 

export default App;
