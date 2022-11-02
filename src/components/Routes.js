import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from '../pages/Home'
import Apropos from '../pages/Apropos'
import Erreur from '../pages/Erreur'
import Logement from '../pages/Logement'




const LeRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Apropos' element={<Apropos />} />
                <Route path='/logement/:id' element={<Logement />} />
                <Route path='/*' element={<Erreur />} />
            </Routes>
        </Router>
    );
};

export default LeRouter;