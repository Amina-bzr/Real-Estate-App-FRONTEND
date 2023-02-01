import React, { useState } from 'react';
import './home.css';
import acceuil from './assets/Acceuil.png';
import bar from './assets/bar.png';
import result from './assets/result.png';
import modele from './assets/Modele.jpg';
import axios from 'axios';
import { useCallback,useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Navbar';
import anonces from './annonce.json';
function Home (){
   const [dataannonce,setdata]=useState([]);
   const[searchkey,setsearchkey]=useState("");
   const [wilayafiltre,setwilaya]=useState("");
   const [communefiltre,setcommune]=useState("");
   const [typefiltre,settype]=useState("");
   const[date1,setdate1]=useState("");
   const[date2,setdate2]=useState("");
    let navigate = useNavigate(); 
    function todetails (){ 
      let path = '/details'; 
      navigate(path);
    }
   function  handlekeydown(event){
      if (event.key === 'Enter') {
         // call the function you want to execute here
         console.log(searchkey);

       }
    }
    function seechanges(){
      console.log(dataannonce);
    }
   function filtrewilaya(wilaya){
     axios.get("127.0.0.1:8000/?Wilaya=",wilaya)
     .then(response=>{
      console.log(response.data)
     })
     .catch(error=>{
      console.log(error);
     });
   }
    
    return (
   <div className="Home">

    <Nav/>
    <div className='homebody'>
    <img src={acceuil} alt="acceuil" id="acceuil" className="acceuil"/>
    <input type="text" id="recherche" placeholder='       Rechercher' onChange={(e)=>{setsearchkey(e.target.value)}} onKeyDown={handlekeydown} />
    <img src={bar} alt="bar" id="bar" className="bar"/>
    
    <div className='Wilaya' onchange={(e)=>{filtrewilaya(e.target.value)}}>
    <select>
        <option>Adrar</option>
        <option> Chlef</option>
        <option> Lagouat</option>
        <option>Oum elbouaki</option>
        <option>Batna</option>
        <option>Bejaia</option>
        <option>Beskra</option>
        <option>Bechar</option>
        <option>Blida</option>
        <option>Bouira</option>
        <option>Tamanrasset</option>
        <option>Tebessa</option>
        <option>Tlemcen</option>
        <option>Tiaret</option>
        <option>Tizi Ouzou</option>
        <option> Alger</option>
        <option> Djelfa</option>
        <option>Djijel</option>
        <option>Sétif</option>
        <option>Saïda</option>
        <option>Skikda </option>
        <option>Sidi Bel Abbès</option>
        <option>Annaba</option>
        <option>Guelma</option>
        <option>Constantine</option>
        <option>Médéa</option>
        <option>Mostaganem</option>
        <option>M'Sila</option>
        <option>Mascara</option>
        <option>Ouargla</option>
        <option>Oran</option>
        <option>El Bayadh </option>
        <option>Illizi</option>
        <option>Bordj Bou Arreridj</option>
        <option>Boumerdès</option>
        <option>El Tarf</option>
        <option>Tindouf</option>
        <option>Tissemsilt</option>
        <option>El Oued</option>
        <option>Khenchela</option>
        <option>Souk Ahras</option>
        <option>Tipaza</option>
        <option>Mila</option>
        <option>Aïn Defla</option>
        <option>Naâma</option>
        <option>Aïn Témouchent</option>
        <option>Ghardaia</option>
        <option>Relizane</option>
        <option>Timimoun</option>
        <option>Bordj Badji Mokhtar</option>
        <option>Ouled Djellal</option>
        <option>Béni Abbès</option>
        <option>In Salah</option>
        <option>In Guezzam</option>
        <option>Touggourt</option>
        <option>Djanet</option>
        <option>El M’Ghaier</option>
        <option>El Meniaa</option>
    </select>
    <input type="text" placeholder='La commune' onchange={(e)=>{setcommune(e.target.value)}}/>
    </div>
    <div className='Type' onchange={(e)=>{settype(e.target.value)}}>
       <select>
        <option>Terrain</option>
        <option>Terrain Agricole</option>
        <option>Appartement</option>
        <option>Maison</option>
        <option>Bangalow</option>
        <option>Autre</option>
       </select>
    </div>
    <div className='Categorie'>
    <input type="date" placeholder='date1' onchange={(e)=>{setdate1(e.target.value)}}/>
    <input type="date" placeholder='date2' onchange={(e)=>{setdate2(e.target.value)}}/>
    </div>
   
   

    <div className='shopcard'>
    <img src={result} alt="result" id="result" className="result"/>
    <div className='nd_part'>
    { 
   anonces.map(card =>(
    
      
      <div className='Product'>
      <img src={modele} alt="modele" id="modele" className="modele"/>
        <h2>{card.titre}</h2>
        <h4>{card.Wilaya}</h4>
        <div className='det'>
           <h2>{card.Prix}</h2>
           <button onClick={todetails} >Details</button>
           </div>
       
      </div>
  
  
   ))}
   </div>
       
    </div>
  
    </div>
    
   </div>

);
}
export default Home;