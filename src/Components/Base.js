import React from 'react';
import Logo from './Logo';
import Header from './Header';
import Slide from 'react-reveal/Slide';
import Stats from './Stats';
import AboutOpenTabs from './AboutOpenTabs';
import AboutCarbonOffset from './AboutCarbonOffset';
import AboutRainForest from './AboutRainForest';
import Footer from './Footer';

const Base = ({children}) => {
    return(
        <React.Fragment>
            <Logo/>
            <Header/>
            {children}
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

export default Base;