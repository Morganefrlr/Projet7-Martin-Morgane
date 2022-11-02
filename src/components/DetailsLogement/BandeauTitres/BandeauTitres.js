import React from 'react';

const BandeauTitres = ({infos}) => {
    const Infos = infos[0]
    
    

    return (
            <div className="titre-logement">
                <p className='logement-title'>{Infos.title}</p>
                <p className='logement-location'>{Infos.location}</p>
            </div>
    );
};

export default BandeauTitres;