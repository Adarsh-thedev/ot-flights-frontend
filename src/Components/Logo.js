import React from 'react';
import OpenTabsLogo from '../assets/logo.png';

const Logo = () => {
    return(
        <div className = 'nav' id = '#tabs'>
            <div className = 'container'>
                <a className = 'navbar-brand' href = '#tabs'>
                    <img className = 'mr3 dim' src = {OpenTabsLogo} alt = 'logo'/>
                    <span style = {{fontFamily : 'Nunito, sans-serif', verticalAlign : 'middle'}} className = 'dib dim h2 b text-primary'>OpenTabs</span>
                </a>
            </div>
        </div>
    );
}

export default Logo;