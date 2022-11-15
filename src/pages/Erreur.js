import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Erreur404 from '../components/Erreur/Erreur404'
import Footer from '../components/Footer/Footer'

const Erreur = () => {
    return (
        <div>
            <Navbar />
            <Erreur404/>
            <Footer />
        </div>
    );
};

export default Erreur;