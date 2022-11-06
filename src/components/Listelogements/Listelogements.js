import React from 'react';
import { Link } from "react-router-dom"
import logement from '../../data/logements.json'




const Listelogements = () => {
    
    const appart = logement.logement


    return (
        <div className='fond'>
                {appart.map((item, index) => {
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