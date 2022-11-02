import React from 'react';
import Collapse from '../components/Collapse/Collapse';
import Navbar from '../components/Navbar/Navbar'
import Section1 from '../components/Section1/Section1'
import {Data} from '../components/Collapse/data';
import Footer from '../components/Footer/Footer';

const Apropos = () => {
    return (
        <div>
            <Navbar/>
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