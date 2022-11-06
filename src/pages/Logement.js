import React from 'react';
import {  useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from 'axios'


import Navbar from '../components/Navbar/Navbar'
import SliderImages from '../components/Slider/SliderImages';
import Tags from '../components/DetailsLogement/Tags/Tags';
import BandeauTitres from '../components/DetailsLogement/BandeauTitres/BandeauTitres';
import Rates from '../components/DetailsLogement/RatesHosts/Rates';
import Collapse from '../components/Collapse/Collapse'
import Footer from '../components/Footer/Footer';
import Host from '../components/DetailsLogement/RatesHosts/Host';







const Logement = () => {

    const params = useParams();
    const id = params.id
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:8000/logement?id=${id}`)
        .then((res) => setDataApi(res.data[0]))   
    },[id]); 
    
   
    const collapseDescription =[
        {
            title: 'Description',
            response: `${dataApi.description}`
        }
    ]

    const collapseEquipement =[
        {
            title: 'Equipement',
            response:dataApi.equipments
           
        }
    ]
   
    
    const infoTitre = [
        {
            title: `${dataApi.title}`,
            location: `${dataApi.location}`,
        }
    ]
    

    return (
        <div>
            <Navbar />

            <SliderImages id={id} pictures={dataApi.pictures}/>

            <div className='bandeau-titres'>
               <BandeauTitres infos={infoTitre} /> 
            </div>

            <Tags tagsTab={dataApi.tags} />

            <div className='host-rates'>
                <Host hostTab={dataApi.host} />
                <Rates rate={dataApi.rating} />
            </div>
            <div className='collapse-logement'>
                <Collapse data={collapseDescription} />
                <Collapse data={collapseEquipement} />
            </div>
            
            <Footer />
           

        </div>
    );
};

export default Logement;
