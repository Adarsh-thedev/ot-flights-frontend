import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
    return(
        <div className = "section counter" style = {{color : '#0080ff'}}>
            <div className = 'container mt2'>
                <div className = ' row'>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="counter-item text-center mb-5 mb-lg-0">
                            <div className="icon-box"><i aria-hidden="true" className="fa fa-plane fa-4x"></i></div>
                            <h3 className="mb-0 mt-4 counter"><CountUp end={100} duration={5}/></h3>
                            <p className="text-muted">Flights Booked</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 ">
                        <div className="counter-item text-center mb-5 mb-lg-0">
                            <div className="icon-box"><i aria-hidden="true" className="fa fa-cloud fa-4x"></i></div>
                            <h3 className="mb-0 mt-4 counter">
                                <CountUp end={10000} duration={7}/><span>KG</span>
                            </h3>
                            <p className="text-muted">CO<sub>2</sub> Offset</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="counter-item text-center mb-5 mb-lg-0">
                            <div className="icon-box"><i aria-hidden="true" className="fa fa-tree fa-4x"></i></div>
                            <h3 className="mb-0 mt-4 counter">
                                <CountUp start={0} end={100} duration={5}/>
                            </h3>
                            <p className="text-muted">Trees Planted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;