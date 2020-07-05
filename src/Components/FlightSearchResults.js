import React from 'react';
import Flight from './Flight';

const FlightSearchResults = ({searchResult, source, destination}) => {
    return(
        <div className = 'container'>
            <h5 className = 'center'>
                Flights From {source.slice(0, source.length-5)} to {destination.slice(0, destination.length-5)}
            </h5>
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