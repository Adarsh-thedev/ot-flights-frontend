import React from 'react';
import OpenTabsLogo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return(
        <div className = 'nav' id = '#tabs'>
            <div className = 'container'>
                <Link className = 'navbar-brand' to = '/'>
                    <img className = 'mr3 dim' src = {OpenTabsLogo} alt = 'logo'/>
                    <span style = {{fontFamily : 'Nunito, sans-serif', verticalAlign : 'middle'}} className = 'dib dim h2 b text-primary'>OpenTabs</span>
                </Link>
            </div>
        </div>
    );
}

export default Logo;