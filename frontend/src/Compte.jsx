import React, { useState } from 'react';
import  { Component } from "react";
import './Compte.css';
import avatar from "./assets/avatar.jpg";
import account from "./assets/compte.png"
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar';



function Compte(){
    const [file, setFile] = useState();
    
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
   <div className="Compte">
    <div className='None'>
    
    <h1>jnck</h1>
    <Nav/>
    <h1>Hellobodydkljvofjokt</h1>
    </div>
    <div className='body'>
    
    <img src={account} alt="account" id="account"/>
    <div className='info'>
    <div className='uploader'>
    <input type="file" onChange={handleChange} id="file" />
    <label for="file" id="lfile"> Choisir photo</label>
            <img src={file} id="profilepic" style={{
                width:"90px",
                height:"90px",
                borderRadius:"50%",
                objectFit:"cover",
                position:"absolute",
                
               zIndex:"2",



            }} />
           
    
    </div>
    <div className='text'>
    <h1>Nom Prenom</h1>
    <h3>description</h3>
    </div>

    </div>
    
   
    <div className='formulaire'>
    <label >Nom</label>
    <label >Prénom</label>
    <input type="text" placeholder='   Nom' id="nom" />
    
    <input type="text" placeholder='   Prenom'/>
    <label >Adress Email</label>
    <label >Téléphone</label>
    <input type="text" placeholder='   @ email' />
    <input type="text"  placeholder='     0556789321'/>
    <label >Adress</label>
    <label >Description</label>
    <input type="text"  placeholder='     Alger-OuedSmar'/>
    <input type="text"  placeholder='     profession'/>
     
    </div>
    <button id="valider">Valider</button>
    </div>
   
   </div>

);
}
export default Compte;