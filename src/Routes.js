import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import FlightSearchResults from './Components/FlightSearchResults';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path = '/redirect' component = {FlightSearchResults}/>
                <Route path = '/' component = {App}/>
            </Switch>
        </Router>
    );
}

export default Routes;