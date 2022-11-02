import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"




const Listelogements = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8000/logement")
        .then((res) => setData(res.data))
    },[]); 
   

    return (
        <div className='fond'>
                {data.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img className="imglog" src={item.cover} alt={item.title} />
                            <Link className='titrelog'to={`/logement/${item.id}`}>{item.title}</Link>
                        </div>
                    )
                })}
    </div>
    );
};

export default Listelogements;