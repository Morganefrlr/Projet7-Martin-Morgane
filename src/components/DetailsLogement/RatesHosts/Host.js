import React from 'react';


const Host = ({hostTab}) => {

    

    return (
        <div className="host">
            {hostTab && 
            <p className='host-name'>{hostTab.name}</p>
            }
            {hostTab && 
            <div>
                <img src={hostTab.picture} alt={hostTab.name} className='host-picture' />
            </div>
            }
        </div>
    );
};

export default Host;