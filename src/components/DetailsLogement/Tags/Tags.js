import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios'


const Tags = ({id}) => {
    
    const [tags, setTags] = useState([])

    useEffect(() => {
        axios
        .get(`http://localhost:8000/logement?id=${id}`)
        .then((res) => setTags(res.data[0].tags))   
    },[id]);
    

    return (
        <div className='tags'>
                {tags.map((tag,index) => {
                    return (
                        <div className="tag" key={index}>{tag}</div>
                    )
                })}
        </div>
    );
};

export default Tags;
