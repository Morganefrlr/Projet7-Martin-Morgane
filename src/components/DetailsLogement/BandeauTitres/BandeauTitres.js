import React from 'react';

const BandeauTitres = ({infos}) => {
   
    
    

    return (
            <div className="titre-logement">
                <p className='logement-title'>{infos.title}</p>
                <p className='logement-location'>{infos.location}</p>
            </div>
    );
};

export default BandeauTitres;