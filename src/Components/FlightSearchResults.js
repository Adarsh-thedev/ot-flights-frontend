import React from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';

const FlightSearchResults = (props) => {
    const {searchResult} = props.location.state;
    return(
        <Base>
            <div className = 'container center'>
                <Link to = '/' >
                    <button className = 'btn blue text-white br-pill dim b mt4'>
                        <i className="fa fa-home mr-2" aria-hidden="true"></i>
                        Back to flight search
                    </button>
                </Link>
                <h1>Flight Search Results will be displayed here</h1>
                <p>{JSON.stringify(searchResult[0])}</p>
            </div>
        </Base>
    );
}

export default FlightSearchResults;