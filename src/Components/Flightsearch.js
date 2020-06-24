import React, { useState } from 'react';

const FlightSearch = () => {
    const [date, setDate] = useState({
        travelingDate : `${new Date().toString().substr(4,6)}, ${new Date().getFullYear()}`,
        returnDate : `${new Date().toString().substr(4,6)}, ${new Date().getFullYear()}`
    });

    return(
        <div className = 'container' style ={{position : 'relative', bottom : '20px'}}>
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
                <div className="d-flex row justify-content-between">
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>FROM</label>
                        <div className="autocomplete">
                            <input id="source" autoComplete="off" type="text" className="form-control" name="from" placeholder='From'/>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>TO</label>
                        <div className="autocomplete">
                            <input id = 'dest' autoComplete="off" type="text" className="form-control" name="to" placeholder="Where to?"/>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>DEPART</label>
                        <div className="autocomplete">
                            <input autoComplete="off" type="text" className="form-control" name="to" placeholder={date.travelingDate}/>
                        </div>
                    </div>
                    <div className="form-group col-xs-12 col-sm-3">
                        <label className = 'b f5'>RETURN</label>
                        <div className="autocomplete">
                            <input autoComplete="off" type="text" className="form-control" name="to" placeholder={date.returnDate}/>
                        </div>
                    </div>
                </div>
                <div className="center" style = {{position : 'relative', top : '16px'}}>
                    <button className="btn blue text-white br-pill dim b"><i className="fa fa-send mr-2" aria-hidden="true"></i>Search Flights</button>
                </div>
            </form>
        </div>
    );
}

export default FlightSearch;