import React from 'react';
import srcLogo from '../../images/LOGOFOOTER.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={srcLogo} alt="logo" />
            </div>
            <div className="copyright">
                <p>2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;