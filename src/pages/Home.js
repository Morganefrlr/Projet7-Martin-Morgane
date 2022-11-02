import React from 'react';
import Footer from '../components/Footer/Footer';
import Listelogements from '../components/Listelogements/Listelogements';
import Navbar from '../components/Navbar/Navbar'
import Section1 from '../components/Section1/Section1'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='sec1-divback home'></div>
            <Section1/> 
            <p className='home-title'>Chez vous, partout et ailleurs</p>
            <Listelogements />
            <Footer />
        </div>
    );
};

export default Home;