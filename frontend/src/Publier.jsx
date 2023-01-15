import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar';
import './Publier.css';
import Images from './images';
import pubimg from './assets/publierann.png';
function Publier(){
    const [images,setimages]=useState();
   
    function handlechange(e) {
        console.log(e.target.files);
        setimages(URL.createObjectURL(e.target.files[0]));
      
    }
    
    return (
   <div className="publier">
   <Nav/>
    <div className='form'> 
    <img src={pubimg} alt="pubimg" id="pubimg"/>
    <div className='first'>
    <label for="titre" id="ltitre"> Titre</label>
    <label for="Surface" id="lSurface"> Surface</label>
    <input type="text" placeholder='   Titre' id="titre"  />
    <input type="text" placeholder='   Surface' id="Surface"  />
    </div>
    
    <label for="Description" id="lDescription"> Description</label>
    
    <textarea name="paragraph_text" cols="50" rows="10 " id="parag"></textarea>
    <div className='selects'>
    <label for="Categorie">Categorie</label>
    <label for="Type">Type</label>
    <select id="Categorie">
        <option>Vente</option>
        <option>Echange</option>
        <option>Location</option>
        <option>Location pour vacance</option>
        <option>Autre</option>
       </select>
      
    <select id="Type">
        <option>Terrain</option>
        <option>Terrain Agricole</option>
        <option>Appartement</option>
        <option>Maison</option>
        <option>Bangalow</option>
        <option>Autre</option>
       </select>
    </div>

   
       <label for="Adresse" id="lAdresse"> Adresse</label>
    <input type="text" placeholder='   Adresse' id="Adresse"  />
    <label for="Prix" id="lPrix"> Prix</label>
    <input type="text" placeholder='   Prix' id="Prix"  />
    <div className='imgupload'>
    <Images/>
    </div>
    
    <button id="pub">Publier</button>
    </div>
    
   </div>

);
}
export default Publier;