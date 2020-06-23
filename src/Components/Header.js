import React from 'react';
import Background from './home-img.png';

const sectionStyle = {
    backgroundImage : `url(${Background})`,
    minHeight : 200,
    width : '100%',
    backgroundRepeat : 'no-repeat'
}

const Header = () => {
    return(
        <div style = {sectionStyle}>
            <div className = 'col-md-4' style = {{float : 'right'}}>
                <h1 className = 'text-white f1 right'>FLY WITH RESPONSIBLY WITH OPENTABS</h1>
            </div>
        </div>
    );
}

export default Header;