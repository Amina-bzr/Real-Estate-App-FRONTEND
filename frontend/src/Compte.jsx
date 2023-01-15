import React, { useState } from 'react';
import  { Component } from "react";
import './Compte.css';
import avatar from "./assets/avatar.jpg";
import account from "./assets/compte.png"
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar';
import {useFormik} from 'formik';



function Compte(){
    
    const formik = useFormik({
        initialValues: {
          nom: "",
          prenom: "",
          email: "",
          tlf: "",
          adresse:"", 
          
        },
        onSubmit: (values) => {
            
            console.log("form submitted");
            console.log(values);
           const jason=JSON.stringify(values);
            console.log(file);
           
          },
    })
    
   
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
    <h2>Nom Prenom</h2>
    
    </div>

    </div>
    
   
    <div className='formulaire'>
    <label >Nom</label>
    <label >Prénom</label>
    <input type="text" placeholder='   Nom' id="nom" onChange={formik.handleChange}
                  value={formik.values.nom} />
    
    <input type="text" placeholder='   Prenom' id="prenom" onChange={formik.handleChange}
                  value={formik.values.prenom} />
    <label >Adress Email</label>
    <label >Téléphone</label>
    <input type="text" placeholder='   @ email' id="email" onChange={formik.handleChange}
                  value={formik.values.email}/>
    <input type="text"  placeholder='     0556789321' id="tlf" onChange={formik.handleChange}
                  value={formik.values.tlf} />
    <label >Adress</label>
    <label id="description" >Description</label>
    <input type="text"  placeholder='     Alger-OuedSmar' id="adresse" onChange={formik.handleChange}
                  value={formik.values.adresse} />
    <input type="text"  placeholder='     profession' id="description"/>
     
    </div>
    <button id="valider" type="submit" onClick={formik.handleSubmit} >Valider</button>
    </div>
   
   </div>

);
}
export default Compte;