import React from 'react';

const Logo = () => {
    return(
        <div className = 'nav'>
            <div className = 'container'>
                <a className = 'navbar-brand' href = '/'>
                    <img className = 'mr3 dim' src = '/assets/logo.png' alt = 'logo'/>
                    <span style = {{fontFamily : 'Nunito, sans-serif', verticalAlign : 'middle'}} className = 'dib dim h2 b text-primary'>OpenTabs</span>
                </a>
            </div>
        </div>
    );
}

export default Logo;