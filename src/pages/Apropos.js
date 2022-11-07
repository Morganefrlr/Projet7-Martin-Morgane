import React from 'react';
import Collapse from '../components/Collapse/Collapse';
import NavBar from '../components/Navbar/NavBar'
import Section1 from '../components/Section1/Section1'
import {Data} from '../components/Collapse/data';
import Footer from '../components/Footer/Footer';

const Apropos = () => {
    return (
        <div>
            <NavBar />
            <div className='sec1-divback propos'></div>
            <Section1 />
            <div className='collapse-apropos'>
                <Collapse data={Data} />
            </div>
            <Footer />
            
        </div>
    );
};

export default Apropos;