import React from 'react';

const Logo = () => {
    return(
        <div className = 'nav'>
            <div className = 'container'>
                <a className = 'navbar-brand' href = '/'>
                    <img className = 'mr1' src = '/assets/logo.png' alt = 'logo'/>
                    <span style = {{fontFamily : 'Nunito, sans-serif', verticalAlign : 'middle'}} className = 'dib h2 b ml3 text-primary'>OpenTabs</span>
                </a>
            </div>
        </div>
    );
}

export default Logo;