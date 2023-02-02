
import './App.css';
import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import back from './assets/back.jpg';
import axios from 'axios';
import {useNavigate, useNavigation} from 'react-router-dom';
import herbe from './assets/herbe.png';
import cozy from './assets/cosyback-01.jpg';
import group from './assets/Group 2.png';
import deal from './assets/dealing 1.png';
import light from './assets/Rectangle 8.png'
import but from './assets/but.png';
import kws from './assets/kws.png';
import logohero from './assets/logohero.png';
import AOS from 'aos';
import jwt_decode from "jwt-decode";

import {motion as m, resolveMotionValue } from "framer-motion";
import { AiFillGoogleCircle } from 'react-icons/ai';



function Hero() {
  const [offsetY, setoffsetY]=useState(0);

  const handlescroll=()=>setoffsetY(window.pageYOffset);
useEffect(()=>{
  window.addEventListener("scroll",handlescroll);
  return ()=>window.removeEventListener("scroll",handlescroll);

},[]);
let navigate = useNavigate(); 
const Routerchange=(user) =>{ 
  let path = '/Compte';
  navigate(path,{
    state: {
      useremail: user,
    }
  });
}
const[token,settoken]=useState("");
useEffect(()=>{
  

},[]);

 function HandleCalback(response){
  
  var userObject= jwt_decode(response.credential);
  console.log(userObject.email); 
  console.log(userObject.name);
  console.log(userObject.given_name);
  console.log(userObject.family_name);
  
  axios.post('http://annoncesimmobilieres.pythonanywhere.com/token-auth/',{
    userObject
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
 
  /*fetch(url,{
    method:'POST',
    headers:{
      'Content-type':'application/json',
     
    },
    body:JSON.stringify(userObject)
  }).then((response)=>{
    console.log(response);
  })*/
  Routerchange(userObject.email);
 };

 useEffect(()=>{

  google.accounts.id.initialize({
    client_id:"249363103992-2dcdos5okgn4papgansm0u0jl4i0mrg2.apps.googleusercontent.com",
    callback:HandleCalback
  });
  google.accounts.id.renderButton(
    document.getElementById("googlesign"),
    {size:"xx-small"}
  )
},[]);

  return (

   
    <div className="Hero">
      <div className="background">
      <div className='Logo'>
      <img src={back} alt="back" id="back" className="back"/>
      </div>
     
      <div className="navhero">
      <img src={logohero} alt="logohero" id="logohero"/>
        <ul>
        <li><a href="#contactus">Contacte</a></li>
        <li><a href="#apropos">A Propos</a></li>
        <li><div  id="googlesign" style={{width:"10%" ,display:"inline"}}> Sign in </div></li>
       </ul>
        
      </div>
      
      <div className ="texthero"  >
      <m.div initial={{opacity:0}} animate={{opacity:1}}
      transition={{duration:0.9, ease:"easeOut"}}>
      <h1 style={{transform: `translateY(${-offsetY*0.1}px)`}} >Apart</h1>
      
      <h1 style={{transform: `translateY(${-offsetY*0.1}px)`}}>Site web</h1>
      </m.div>
      <m.div initial={{opacity:0}} animate={{opacity:1}}
      transition={{duration:0.75, ease:"easeOut"}}>
      <p style={{transform: `translateY(${-offsetY*0.08}px)`}}>votre service preferé pour les biens immobiliers</p>
      </m.div>
      </div>

      
     
     
      <img src={group} alt="group" id="group" className ="group" style={{transform: `translateY(${-offsetY*0.2}px)`}}/>
      </div>
      
     <div className="texting"  style={{transform: `translateY(${-offsetY*0.2}px)`}}>
      <div className='raper'>
      <div className="text"  id="apropos">
      <h1> A Propos de nous</h1>
       <p id="para">we are here to help you choose what suits you , bring your dream house , and enjoy the comfort and peace , have the amazing experience of buying and selling realities with us ! , what are you waiting for create your account , and bring your chance now ! </p>

        </div>
        <img src={deal} alt="deal" id="deal" className ="deal"/>

      </div>
     
      <div className='rapper'>
      <div className="contactus" id="contactus">
      <img src={deal} alt="deal" id="deal" className ="deal"/>
      <div className='textcontactus'>
      <h1> Contact Us</h1>
       <p >we are here to help you choose what suits you , bring your dream house , and enjoy the comfort and peace , have the amazing experience of buying and selling realities with us ! , what are you waiting for create your account , and bring your chance now ! </p>

      </div>
        </div>
      </div>
      <div className="last">
     
     <img src={but} alt="but" id="but" className ="but"/>
     <img src={kws} alt="kws" id="kws" className ="kws"   />
     </div>
   
        
     </div>
     
    
    </div>
   
  );
}

export default Hero;
