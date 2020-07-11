import React from 'react';
import OpenTabsLogo from '../assets/logo.png';

const Logo = () => {
    return(
        <div className = 'nav nunito' id = '#tabs'>
            <div className = 'container pointer'>
                <img className = 'mr3 dim' src = {OpenTabsLogo} alt = 'logo'/>
                <span style = {{position : 'relative',top : '10px'}} className = 'ml2 dim f2 text-primary'>OpenTabs</span>
            </div>
        </div>
    );
}

export default Logo;