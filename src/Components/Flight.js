import React from 'react';

const Flight = ({flightNumber, price, airline, departureTime, returnTime}) => {
    return (
        <div className = 'bg1 br3 shadow-3 mt1 pa3 d-flex'>
			<a href="#book" target = '_blank' className="d-flex justify-content-between w-100" stlye={{textDecoration:'none'}}>
                <div className="ml-3 d-flex">
                    <img src = {`https://www.gstatic.com/flights/airline_logos/70px/${airline}.png`}
                         alt = 'Airline Logo'
                         style = {{width : 'auto', height : '40px'}}
                    />
                    <div className="ml-3">
                        <div className="d-flex">
                            <p className="depart_time">{departureTime}</p>
                            {/* <p className="dash">-</p>
                            <p className="depart_time">12:00</p>
                            <p className="amorpm ml-2">PM</p> */}
                        </div>
                        {/* <div class="airlinename text-muted">{{ details.carrier_name }}</div> */}
                    </div>
                </div>
                <div className="ml-4">
                    <p className="total-hours" style={{textAlign: 'center'}}>7h 00m</p>
                    <p className="text-muted">CO<sub>2</sub> released: 100kg</p>
                </div>
                <div className="ml-4">
                    <p className="no-of-stops" style={{textAlign: 'center'}}>2 stops</p>
                    <p className="airports text-muted"></p>
                </div>
                <div>
                    <p className="total-price">€ {price}</p>
                    {/* <!-- <p style="color: #046C1B;">$5 towards better tomorrow</p> --> */}
                </div>
            </a>
            <div class="downArrowDropDown ml-4">
                <span className = 'f4 b pointer'><i class="fa fa-angle-down"></i></span>
            </div>
        </div>
    );
}

export default Flight;