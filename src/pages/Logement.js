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
    

    
    const rates = `${dataApi.rating}`
    const collapseDescription =[
        {
            title: 'Description',
            response: `${dataApi.description}`
        }
    ]
    const tab = dataApi.equipments

    const collapseEquipement =[
        {
            title: 'Equipement',
            response:tab
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

            <SliderImages id={id} />

            <div className='bandeau-titres'>
               <BandeauTitres infos={infoTitre} /> 
            </div>

            <Tags id={id} />

            <div className='host-rates'>
                <Host id={id} />
                <Rates rate={rates} />
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
