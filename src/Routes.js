import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import CarbonOffset from './Components/CarbonOffset';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = '/carbon-offset' component = {CarbonOffset}/>
                <Route path = '/' component = {App}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;