import React from 'react';
import Flight from './Flight';

const FlightSearchResults = ({searchResult, source, destination}) => {
    return(
        <div className = 'container nunito'>
            <h5 className = 'center'>
                {source.slice(0, source.length-5)} - {destination.slice(0, destination.length-5)}
            </h5>
            <div>
                {Object.values(searchResult[0]).flatMap(airport =>
                    Object.values(airport).map(({flight_number, price, airline, departure_at, return_at})=> (
                        // console.table(flight)
                        <Flight
                            key = {Math.random()}
                            flightNumber={flight_number} 
                            price={price}
                            airline = {airline}
                            departureTime = {departure_at}
                            returnTime = {return_at}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default FlightSearchResults;