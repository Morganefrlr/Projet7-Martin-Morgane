import React from 'react';

const Rates = ({rate}) => {
    
    
    let score = [];
    for(let i = 0; i< 5; i++){
        if(i< rate){
            score.push('star active')
        } else {
            score.push('star')
        }
    }
    
    
    
    
    return (
        <div className='stars'>
            {score.map((star, i) => (
               <span className={star} key={i}>&#9733;</span> 
      ))}
        </div>
    );
};

export default Rates;

