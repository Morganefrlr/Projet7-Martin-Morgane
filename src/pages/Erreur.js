import React from 'react';
import NavBar from '../components/Navbar/NavBar'
import Erreur404 from '../components/Erreur/Erreur404'
import Footer from '../components/Footer/Footer'

const Erreur = () => {
    return (
        <div>
            <NavBar />
            <Erreur404/>
            <Footer />
        </div>
    );
};

export default Erreur;