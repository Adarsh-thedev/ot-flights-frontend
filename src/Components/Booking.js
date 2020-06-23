import React from 'react';

const Booking = () => {
    return(
        <div className = 'container'>
            <form className = 'br4 shadow-3 bg1'>
                <div className = 'top d-flex container ml-2'>
                    <div className="input-field ml1 select-div">
                        <select className = 'pointer browser-default bn'>
                            <option value="" disabled selected>Trip</option>
                            <option style={{color : 'black'}}>Round trip</option>
                            <option style={{color : 'black'}}>One way</option>
                        </select>
                    </div>
                    <div className="input-field ml1 select-div">
                        <select className = 'pointer browser-default bn'>
                            <option value="" disabled selected>Passengers</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                    </div>
                    <div className="input-field ml1 select-div">
                        <select className = 'pointer browser-default bn'>
                            <option value="" disabled selected>Cabin class</option>
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First Class</option>
                        </select>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Booking;