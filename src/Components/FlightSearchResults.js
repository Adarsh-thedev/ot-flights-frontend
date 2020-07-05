import React from 'react';
import Flight from './Flight';

const FlightSearchResults = ({searchResult}) => {
    return(
        <div className = 'center container'>
            <h5>Search Results</h5>
            <div>
                {Object.values(searchResult[0]).flatMap(airport =>
                    Object.values(airport).map(({flight_number, price})=> (
                        // console.table(flight)
                        <Flight flightNumber={flight_number} price={price} />
                    ))
                )}
            </div>
        </div>
    );
}

export default FlightSearchResults;