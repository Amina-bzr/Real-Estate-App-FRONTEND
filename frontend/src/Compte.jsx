import React, { useState } from 'react';
import  { Component } from "react";
import './Compte.css';
import avatar from "./assets/avatar.jpg";
import account from "./assets/compte.png"
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar';
import profile from "./compte.json";
import {useFormik} from 'formik';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Compte(){
   const location=useLocation();
  
    const formik = useFormik({
        initialValues: {
          last_name: "",
          first_name: "",
          email: "",
          photo:"",
          contact:{
            adresse:"",
            telephone:"",

          }
        },
        onSubmit: (values) => {
            
            console.log("form submitted");
           console.log(values);
           const jason=JSON.stringify(values);
          
          
          },
    })
    
   
    const [file, setFile] = useState();
    
    function handleboth(e){
      handleChange(e);
      formik.handleChange(e);
    }
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
       
    }
    
      useEffect(() => {
        setFile(profile[0].photo);
        console.log(profile[0].photo);
       
       let useremail=location.state.useremail;
       console.log(useremail);
      let url='https://annoncesimmobilieres.pythonanywhere.com/users/?email='+useremail;
       axios.get(url)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
 
      }, []);
    
    return (
   <div className="Compte">
   
    <Nav/>
    
    <div className='body'>
    <img src={account} alt="account" id="account"/>
    
   
    <div className='info'>
    <div className='uploader'>
    <input type="file" onChange={handleboth} id="file"  value={formik.values.photo} />
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
    {
      profile.map(cmpt=>(
        <div className='nomprenom'>
    <h2>{"   "+cmpt.first_name+" "+cmpt.last_name}</h2>
    </div>
      ))
    }
   

    </div>
    
   {
    profile.map(cmpt=>(
      <div className='formulaire'>
      <label >Nom</label>
      <label >Prénom</label>
      <input type="text" placeholder={cmpt.last_name} id="last_name" onChange={formik.handleChange}
                    value={formik.values.last_name} />
      
      <input type="text" placeholder={cmpt.first_name} id="first_name" onChange={formik.handleChange}
                    value={formik.values.first_name} />
      <label >Adress Email</label>
      <label >Téléphone</label>
      <input type="text" placeholder={cmpt.email} id="email" onChange={formik.handleChange}
                    value={formik.values.email}/>
      <input type="text"  placeholder={cmpt.contact.telephone} id="contact.telephone" onChange={formik.handleChange}
                    value={formik.values.contact.telephone} />
      <label >Adress</label>
      <label id="description" >Description</label>
      <input type="text"  placeholder={cmpt.contact.adresse} id="contact.adresse" onChange={formik.handleChange}
                    value={formik.values.contact.adresse} />
      <input type="text"  placeholder='     profession' id="description"/>
       
      </div>
    ))
   }
    
    <button id="valider" type="submit" onClick={formik.handleSubmit} >Valider</button>
    </div>
   
   </div>

);
}
export default Compte;