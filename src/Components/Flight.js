import React from 'react';

const Flight = ({flightNumber, price}) => {
    return (
        <div>
            <p>{flightNumber}</p>
            <p>{price}</p>
        </div>
    );
}

export default Flight;