import React from 'react';

const Flight = ({flightNumber, price}) => {
    return (
        <div className = 'bg1 br3 shadow-3 mt2 mb2 pa3'>
            <span>Flight Number : {flightNumber}</span>
            <span className = 'ml2'>Price : {price} €</span>
        </div>
    );
}

export default Flight;