import React, { Component } from 'react';
import srcLogo from '../../images/LOGONAV.svg'

import { NavLink } from "react-router-dom"

class Navbar extends Component {
    
    render() {
        return(
            <div className='NavbarFixed'>
              <nav className="NavbarItems">
                <img className="nav-logo" src={srcLogo} alt="logo header" />    
                <ul className='nav-items'>
                    <NavLink to="/" end className={({isActive}) => isActive ? "nav-links actif" : "nav-links" }><li>Accueil</li></NavLink> 
                    <NavLink to="/apropos" className={({isActive}) => isActive ? "nav-links actif" : "nav-links" }><li>A propos</li></NavLink>
                </ul>
              </nav>  
            </div>
            
        )
    }
};

export default Navbar;