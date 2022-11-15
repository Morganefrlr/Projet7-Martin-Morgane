import React from 'react';
import {  useParams } from 'react-router-dom';
import logement from '../data/logements.json'


import NavBar from '../components/Navbar/NavBar'
import SliderImages from '../components/DetailsLogement/Slider/SliderImages';
import Tags from '../components/DetailsLogement/Tags/Tags';
import BandeauTitres from '../components/DetailsLogement/BandeauTitres/BandeauTitres';
import Rates from '../components/DetailsLogement/RatesHosts/Rates';
import Collapse from '../components/Collapse/Collapse'
import Footer from '../components/Footer/Footer';
import Host from '../components/DetailsLogement/RatesHosts/Host';
import Erreur404 from '../components/Erreur/Erreur404'







const Logement = () => {
    
    
    const params = useParams();
    const id = params.id
    
    const appartList = logement.logement

    let appart =[]
    let collapseDescription = []
    let collapseEquipement = []
    let infoTitre = {}
    


    const appartement = () => {
        for(let i=0; i<appartList.length; i++){
            if(id === appartList[i].id){
                
                appart = appartList.filter(el => el.id === id)
                collapseDescription =[
                    {
                        title: 'Description',
                        response: `${appart[0].description}`
                    }
                ]
                collapseEquipement =[
                {
                    title: 'Equipement',
                    response:appart[0].equipments
                   
                }
                ]
                infoTitre = 
                {
                    title: `${appart[0].title}`,
                    location: `${appart[0].location}`,
                }
                
                
            }
            
        }
       

    }
   appartement();
   
    
    //const appart = appartList.filter(el => el.id === id)

    
    
    
    
    
   
    

    return (
        <div>
            <NavBar />

            {appart[0] && 
             <><SliderImages pictures={appart[0].pictures}/>

             <div className='bandeau-titres'>
                <BandeauTitres infos={infoTitre} /> 
             </div>
 
             <Tags tagsTab={appart[0].tags} />
 
             <div className='host-rates'>
                 <Host hostTab={appart[0].host} />
                 <Rates rate={appart[0].rating} />
             </div>
             <div className='collapse-logement'>
                 <Collapse data={collapseDescription} />
                 <Collapse data={collapseEquipement} />
             </div></>
             
            }
            {!appart[0] &&
                 <Erreur404 />
            }
            
            
            
            
            <Footer />
           

        </div>
    );
};

export default Logement;
