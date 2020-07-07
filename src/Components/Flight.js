import React from 'react';

const Flight = ({flightNumber, price, airline, departureTime, returnTime}) => {
    return (
        <div className = 'bg1 br1 shadow-1 bb b--black-20 pa2 d-flex'>
			<a href="#book" target = '_blank' className="d-flex no-dec justify-content-between" stlye={{textDecoration:'none'}}>
                <div className="ml1 d-flex col-4 center tc">
                    <img src = {`https://www.gstatic.com/flights/airline_logos/70px/${airline}.png`}
                         alt = 'Airline Logo'
                         style = {{width : 'auto', height : '40px'}}
                         className = 'mt3'
                    />
                    <div className="ml4">
                        <div className="d-flex f4">
                            <p className="depart_time mt2">{departureTime.substr(11,5)}</p>
                            {/* <p className="dash">-</p>
                            <p className="depart_time">12:00</p>
                            <p className="amorpm ml-2">PM</p> */}
                        </div>
                        <div className="airlinename text-muted">Airline Name</div>
                    </div>
                </div>
                <div className="ml4 col-4">
                    <p className="total-hours mt2" style={{textAlign: 'center'}}>7h 00m</p>
                    <p className="text-muted">CO<sub>2</sub> released: 10 kg</p>
                </div>
                <div className="ml4 col-2">
                    <p className="total-hours mt2" style={{textAlign: 'center'}}>2 Stops</p>
                    <p className="text-muted">SOU-DES</p>
                </div>
                <div className="ml4 col-xs-2">
                    <p className="total-hours mt3 f4" style={{textAlign: 'center', color : 'green'}}>€{price}</p>
                </div>
            </a>
            <div className="downArrowDropDown mt3 tc dib col-1 offset-1">
                <span className = 'f4 b pointer'><i className="fa fa-angle-down"></i></span>
            </div>
        </div>
    );
}

export default Flight;