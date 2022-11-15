import React from 'react';
import { Link } from "react-router-dom"

const Erreur = () => {
    return (
        <div>
            <div className='erreur'><p>404</p></div>
            <div className='inconnu'><p>Oups! La page que vous demandez n'existe pas.</p></div>
            <div className='lien'>
                <Link className='lientexte' to= "/" >Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
};

export default Erreur;