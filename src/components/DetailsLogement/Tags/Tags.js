import React from 'react';


const Tags = ({tagsTab}) => {
    
    

    
    

    return (
        <div className='tags'>
            
                {tagsTab.map((tag,index) => {
                    return (
                        <div className="tag" key={index}>{tag}</div>
                    )
                })}
        </div>
    );
};

export default Tags;
