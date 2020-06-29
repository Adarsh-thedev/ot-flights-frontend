import React from 'react';
import { Link } from 'react-router-dom';

const FlightSearchResults = (props) => {
    const {searchResult} = props.location.state;
    return(
        <div className = 'container center'>
            <Link to = '/' ><h1>Back to home page</h1></Link>
            <h1>Flight Search Results will be displayed here</h1>
            <p>{JSON.stringify(searchResult[0])}</p>
        </div>
    );
}

export default FlightSearchResults;