import React from 'react';

const Erreur = () => {
    return (
        <div>
            <div className='erreur'><p>404</p></div>
            <div className='inconnu'><p>Oups! La page que vous demandez n'existe pas.</p></div>
            <div className='lien'><a href="./">Retourner sur la page d'accueil</a></div>
        </div>
    );
};

export default Erreur;