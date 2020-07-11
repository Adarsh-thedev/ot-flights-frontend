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
                    <i className = 'fa fa-circle'></i> <p className="dib ml2">{departureTime.substr(11,5)} : San Fransisco International Airport (SFO)</p><br/>
                    <i className = 'fa fa-circle'></i> <p className="dib ml2">{returnTime.substr(11,5)} : John F. Kennedy International Airport (JFK)</p>
                </div>
                <div className = 'col-xs-12 col-sm-6'>
                    <i className = 'fa fa-cloud'></i><p className="dib ml2">CO<sub>2</sub> Released:10kg</p> <br/>
                    <i className = 'fa fa-wheelchair b'></i><p className="dib ml2">Average Legroom (79cm)</p> <br/>
                    <i className = 'fa fa-wifi'></i><p className="dib ml2">Wi-Fi</p> <br/>
                    <i className = 'fa fa-plug'></i><p className="dib ml2">In-seat power and USB outlets</p> <br/>
                    <i className = 'fa fa-tv'></i><p className="dib ml2">On-demand video</p>
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
                    <div className= 'col-xs-4 col-sm-2'>
                        <button className= 'btn br2 bg1 hover-bg-transparent hover-bg-washed-blue b hover-blue ba b--blue' style = {{color: 'blue'}}>Select</button>
                    </div>
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