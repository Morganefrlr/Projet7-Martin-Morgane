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
   
    const reponse = () => {
        if (typeof data[0].response == 'object'){           
            return (
                <ul>
                {data[0].response.map((resp, index) => {
                    return (
                        <li key={index}>{resp}</li>
                    )
                })}
                </ul>
            )
        } else {
            return (
                <p>{data[0].response}</p>
            )
        }
    }
            
    
   
    

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
                                {reponse()}
                            </div>
                        </div>  
                    )
                })}
            </>
            
        
    );
};

export default Collapse;