import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios'

const Host = ({id}) => {

    const [host, setHost] = useState([])
    useEffect(() => {
        axios
        .get(`http://localhost:8000/logement?id=${id}`)
        .then((res) => setHost(res.data[0].host))   
    },[id]);


    return (
        <div className="host">
            <p className='host-name'>{host.name}</p>
                <div>
                    <img src={host.picture} alt={host.name} className='host-picture' />
                </div>
        </div>
    );
};

export default Host;