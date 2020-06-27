import React, { useState } from 'react';
import { useEffect } from 'react';

const FlightSearch = () => {
    let nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 7);

    const [details, setDetails] = useState({
        travelingDate : `${new Date().toISOString().substr(0,10)}`,
        returnDate : `${nextDate.toISOString().substr(0,10)}`,
        trip : '',
        passengers : '',
        cabin : ''
    });

    const [places, setPlaces] = useState({
        source : '',
        destination : ''
    });

    //set default source as the nearest international airport
    useEffect(()=> {
        fetch('https://www.travelpayouts.com/whereami?locale=en')
        .then(response => response.json())
        .then(data =>setPlaces({
            ...places, source : `${data.name} - ${data.iata}`
        }))
    });

    const [suggetion, setSuggetion] = useState({
        sourceSuggestion : [],
        destinationSuggtion : []
    });

    const handleChange = name => event => {
        setDetails({
            ...details,
            [name] : event.target.value
        });
    }

    const {travelingDate, returnDate, passengers, trip, cabin} = details;
    const {source, destination} = places;
    const {sourceSuggestion, destinationSuggtion} = suggetion;

    const handlePlaceChange = name => event => {
        setPlaces({
            ...places,
            [name] : event.target.value
        });

        return fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/EUR/en-US/?query=${event.target.value}`,{
            headers : {
                "x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key":"f85b4d018emsh31896ab868646e1p14a6d7jsn45ecae1f6a58"
            }
        })
        .then(response =>{
            return response.json()
        })
        .then(data => {
            if(name === 'source') {
                setSuggetion({
                    ...suggetion,
                    sourceSuggestion : data
                })
            }
            if(name === 'destination') {
                setSuggetion({
                    ...suggetion,
                    destinationSuggtion : data
                })
            }
            console.log(sourceSuggestion);
            console.log(destinationSuggtion);
        })
        .catch(err => console.log(err))
    }

    return(
        <div className = 'container' style ={{position : 'relative', bottom : '20px'}}>
            <form className = 'br4 shadow-3 bg1'>
                <div className = 'top d-flex container ml-2'>
                    <div className="input-field ml1 select-div">
                        <select value = {trip} onChange = {handleChange('trip')} className = 'pointer browser-default bn'>
                            <option value="" disabled selected>Trip</option>
                            <option style={{color : 'black'}}>Round trip</option>
                            <option style={{color : 'black'}}>One way</option>
                        </select>
                    </div>
                    <div className="input-field ml1 select-div">
                        <select value = {passengers} onChange = {handleChange('passengers')} className = 'pointer browser-default bn'>
                            <option value="" disabled selected>Passengers</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="input-field ml1 select-div">
                        <select value = {cabin} onChange = {handleChange('cabin')} className = 'pointer browser-default bn'>
                            <option value="" disabled selected>Cabin class</option>
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First Class</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex row justify-content-between">
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>FROM</label>
                        <div className="autocomplete">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder='From'
                                value = {source}
                                onChange = {handlePlaceChange('source')}
                            />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>TO</label>
                        <div className="autocomplete">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Where to?"
                                value={destination}
                                onChange = {handlePlaceChange('destination')}
                            />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>DEPART</label>
                        <div>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={travelingDate}
                                onChange = {handleChange('travelingDate')}
                            />
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>RETURN</label>
                        <div>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={returnDate}
                                onChange = {handleChange('returnDate')}
                            />
                        </div>
                    </div>
                </div>
                <div className="center" style = {{position : 'relative', top : '16px'}}>
                    <button 
                        className="btn blue text-white br-pill dim b"
                        // onClick = {handleClick}
                    >
                        <i className="fa fa-send mr-2" aria-hidden="true"></i>
                        Search Flights
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FlightSearch;