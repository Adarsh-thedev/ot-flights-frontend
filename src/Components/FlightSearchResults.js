import React from 'react';
import Flight from './Flight';
import Base from './Base';

const FlightSearchResults = ({location}) => {
    const {searchResult, source, destination} = location.state;
    return(
        <Base>
            <div className = 'container nunito mb2'>
                <h3 className = 'center mt2'>
                    {source.slice(0, source.length-5)} - {destination.slice(0, destination.length-5)}
                </h3>
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
        </Base>
    );
}

export default FlightSearchResults;