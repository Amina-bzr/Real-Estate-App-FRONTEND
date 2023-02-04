import React, { useState } from 'react';
import  { Component } from "react";
import './Compte.css';
import avatar from "./assets/avatar.jpg";
import account from "./assets/compte.png"
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar';
import {useFormik} from 'formik';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Topbar from './topbar';

function Compte(){
   const location=useLocation();
   const [useremail,setuseremail]=useState("");

   const [token,settoken]=useState("");
   const[data,setdata]=useState([]);
  const [profile,setprofile]=useState([]);
  const[pic,setpic]=useState();
    const formik = useFormik({
        initialValues: {
          last_name:"",
          first_name: "",
          contact:{
            addresse:"",
            telephone:"",
          }
        },
        onSubmit: (values) => {
            
            console.log("form submitted");
        
           let url='https://annoncesimmobilieres.pythonanywhere.com/users/'+profile[0].id;
          fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
             Authorization: `Token ${token}`,
            },
                     body: JSON.stringify(values)
          })
            .then(response => response.json())
            .then(result => {
              console.log(result);
            
            })
            .catch(error => {
              console.error(error);
            });
            ////////////////////////////////////////////////////
           if (pic!== undefined){
            let api='https://annoncesimmobilieres.pythonanywhere.com/contacts/'+profile[0].contact.id;
            const obj={ picture:pic };
            const getFormData = obj => Object.keys(obj).reduce((formData, key) => {
             formData.append(key, obj[key]);
             return formData;
             }, new FormData());
          const final=getFormData(obj);

          fetch(api, {
             method: 'PUT',
             headers: {

                Authorization: `Token ${token}`,
             },
             body: final,
           })
             .then(response => response.json())
             .then(result => {
               console.log(result);
               window.location.reload();
             })
             .catch(error => {
               console.error(error);
             });
           }
            
              
          },
          enableReinitialze: true,
    });
    
   
    const [file, setFile] = useState();
   
    function handleboth(e){
      handleChange(e);
      setpic(e.target.files[0]);
      //formik.handleChange(e);
    }
    function handleChange(e) {
       // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
       
    }
    
      useEffect(() => {
      setuseremail(location.state.useremail) ;
      settoken(location.state.tok) ;
     const array=[location.state.useremail,location.state.tok];
     setdata(array);
      let url='https://annoncesimmobilieres.pythonanywhere.com/users/?email='+location.state.useremail;
       axios.get(url)
      .then(function (response) {
       console.log(response.data);
       setprofile(response.data);
       setFile(response.data[0].contact.picture);
       formik.values.first_name=response.data[0].first_name;
       formik.values.last_name=response.data[0].last_name;
       formik.values.contact.addresse=response.data[0].contact.addresse;
       formik.values.contact.telephone=response.data[0].contact.telephone;
       
  })
  .catch(function (error) {
    console.log(error);
  });
 
      }, []);
    
    return (
   <div className="Compte">
   
    <Nav data={data} />
    
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
      <input type="text" placeholder={cmpt.email} id="email"/>
      <input type="text"  placeholder={cmpt.contact.telephone} id="contact.telephone" onChange={formik.handleChange}
                    value={formik.values.contact.telephone} />
      <label >Adress</label>
      <label id="description" >Description</label>
      <input type="text"  placeholder={cmpt.contact.adresse} id="contact.addresse" onChange={formik.handleChange}
                    value={formik.values.contact.addresse} />
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