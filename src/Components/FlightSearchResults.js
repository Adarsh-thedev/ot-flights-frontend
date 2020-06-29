import React from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';

const FlightSearchResults = (props) => {
    const {searchResult, source, destination} = props.location.state;
    return(
        <Base>
            <div className = 'container center mt2'>
                <h5>Flights from {source.slice(0, source.length - 5)} to {destination.slice(0, destination.length - 5)}</h5>
                <Link to = '/' className = 'badge f4 pa2 shadow-3 blue bn text-white br-pill dim b ma2'>
                    <i className="fa fa-home mr-2" aria-hidden="true"></i>
                    Back to flight search
                </Link>
                <div className = 'row'>
                    <div className = 'card col-12 br3 pa2'>
                        <p>{JSON.stringify(searchResult[0])}</p>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default FlightSearchResults;