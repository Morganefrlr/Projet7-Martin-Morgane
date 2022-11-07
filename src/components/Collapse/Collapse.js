import {React, useState} from 'react';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'






const Collapse = ({data}) => {
    

    const [clicked, setClicked] = useState(false);

    const toogle = index => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }; 


    return (
        
            <>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="collapse-titre" onClick={() => toogle(index)} key={index}>
                                <p>{item.title}</p>
                                <span>{clicked === index ? <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon> : <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon> }</span>
                            </div>
                            <div className={clicked === index ? 'collapse-reponse show' : 'collapse-reponse'}>                                
                                <p>{item.response}</p>
                            </div>
                        </div>  
                    )
                })}
            </>
            
        
    );
};

export default Collapse;