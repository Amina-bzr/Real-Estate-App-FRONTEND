import React, { useState } from 'react';
import './home.css';
import acceuil from './assets/Acceuil.png';
import bar from './assets/bar.png';
import result from './assets/result.png';
import modele from './assets/Modele.jpg';
import { useCallback,useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Navbar';
function Home (){
    let navigate = useNavigate(); 
    function todetails (){ 
      let path = '/details'; 
      navigate(path);
    }
    return (
   <div className="Home">
    <Nav/>
    <div className='homebody'>
    <img src={acceuil} alt="acceuil" id="acceuil" className="acceuil"/>
    <input type="text" id="recherche" placeholder='       Rechercher'/>
    <img src={bar} alt="bar" id="bar" className="bar"/>
    
    <div className='Wilaya'>
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
    <input type="text" placeholder='La commune'/>
    </div>
    <div className='Type'>
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
       <select>
        <option>Vente</option>
        <option>Echange</option>
        <option>Location</option>
        <option>Location pour vacance</option>
        <option>Autre</option>
       </select>
    </div>
    
    <div className='shopcard'>
    <img src={result} alt="result" id="result" className="result"/>

    <div className='nd_part'>
        <div className='Product'>
        <img src={modele} alt="modele" id="modele" className="modele"/>
          <h2>Maison</h2>
          <h4>Alger</h4>
          <div className='det'>
             <h2>Le Prix</h2>
             <button onClick={todetails} >Details</button>
             </div>
         
        </div>
        

    </div>
       
    </div>
    </div>
    
   </div>

);
}
export default Home;