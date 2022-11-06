import React, {useState} from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'








const SliderImages = ({pictures}) => {


    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const nextSLide = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }
    const prevSLide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

   
               
            
          
    
    

    return (
        <section className='slider'>
           <FontAwesomeIcon icon={faChevronLeft} className={length === 1 ? 'fleche-gauche inactive' : 'fleche-gauche'} onClick={prevSLide}></FontAwesomeIcon>
           <FontAwesomeIcon icon={faChevronRight} className={length === 1 ? 'fleche-droite inactive' : 'fleche-droite'} onClick={nextSLide}></FontAwesomeIcon>  
          {pictures && pictures.map((slide,index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    <p className='nbr-image'>{current +1}/{length}</p>
                    {index === current && 
                        <img src={slide} alt={index} className="image" />
                    }
                </div>
            )
          })}  
        </section>
    );
};

export default SliderImages;