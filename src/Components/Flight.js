import React, { useState } from 'react';

const Flight = ({flightNumber, price, airline, departureTime, returnTime}) => {

    const [state, setState] = useState(false);

    const handleClick = event => {
        event.preventDefault();
        setState(!state);
    }

    const showAllDetails = () => {
        return state && (
            <div className = 'card-body bt b--black-10 text-muted d-flex'>
                <div className = 'col-xs-12 col-sm-6'>
                    <span><i className = 'fa fa-circle'></i></span> {departureTime.substr(11,5)} : San Fransisco International Airport (SFO)<br/>
                    <span><i className = 'fa fa-circle'></i></span> {returnTime.substr(11,5)} : John F. Kennedy International Airport (JFK)
                </div>
                <div className = 'col-xs-12 col-sm-6'>
                    <i className = 'fa fa-cloud text-muted'></i><p className="dib ml2 text-muted">CO<sub>2</sub> Released:10kg</p> <br/>
                    <i className = 'fa fa-wifi text-muted'></i><p className="dib ml2 text-muted">wifi available</p>
                </div>
            </div>
        );
    }

    return (
        <div className = 'bg1 br1 shadow-1 bb b--black-20 pa2'>
			<div className="d-flex pointer no-dec justify-content-between" stlye={{textDecoration:'none'}}>
                <div className="d-flex col-xs-4">
                    <img src = {`https://www.gstatic.com/flights/airline_logos/70px/${airline}.png`}
                         alt = 'Airline Logo'
                         style = {{width : 'auto', height : '40px'}}
                         className = 'mt3 col-6'
                    />
                    <div className="col-6">
                        <div className="d-flex">
                            <p className="depart_time">{departureTime.substr(11,5)}</p>
                            {/* <p className="dash mt2">-</p>
                            <p className="depart_time mt2">{returnTime.substr(11,5)}</p> */}
                        </div>
                        <div className="airlinename text-muted">Airline</div>
                    </div>
                </div>
                {!state ?
                    <div className="col-xs-2">
                        <p style={{textAlign: 'center'}}>7h 00m</p>
                        <p className="text-muted">CO<sub>2</sub> Released:10kg</p>
                    </div>
                    : <div className="col-xs-2"></div>
                }
                {!state ?
                    <div className="col-xs-2">
                        <p style={{textAlign: 'center'}}>Non-stop</p>
                        <p className="text-muted">SOU-DES</p>
                    </div>
                    : 
                    <a href = '#book' target = '_blank' className= 'btn br2 bg1 hover-bg-transparent b dim hover-blue ba b--blue' style = {{color: 'blue'}}>Select Flight</a>
                }
                    <div className="col-xs-2">
                        <p style={{textAlign: 'center', color : 'green'}}>€{price}</p>
                    </div>
            </div>
            <div className="col-xs-1 text-center d-flex">
                <span onClick = {handleClick} className = 'center b f4 pointer'>
                    {!state ? 
                        <i className="fa fa-chevron-circle-down"></i> 
                        : <i className="fa fa-chevron-circle-up"></i>
                    }
                </span>
            </div>
            {showAllDetails()}
        </div>
    );
}

export default Flight;