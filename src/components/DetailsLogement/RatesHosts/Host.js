import React from 'react';


const Host = ({hostTab}) => {

    

    return (
        <div className="host">
            
            <p className='host-name'>{hostTab.name}</p>
            <div>
                <img src={hostTab.picture} alt={hostTab.name} className='host-picture' />
            </div>
            
        </div>
    );
};

export default Host;