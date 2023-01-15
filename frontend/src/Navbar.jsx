import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png'
import {AiFillHome , AiOutlineUser ,AiTwotoneNotification , AiTwotoneEdit, AiFillAliwangwang , AiTwotoneLock} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import { useCallback,useEffect, useRef } from 'react';
function Navbar (){
    let navigate = useNavigate(); 
    const Routerchange = event =>{ 
      let str =event.currentTarget.id;
      let path = '/'+str; 
      navigate(path);
    }
    
    
    return (
   <div className="Navbar">
    <img src={logo} alt="logo" id="logo"/>
   <button onClick={Routerchange} id="compte"><AiOutlineUser/> Compte</button>
   <button ><AiTwotoneNotification/>Mes Annonces</button>
   <button onClick={Routerchange} id="home"><AiFillHome/> Acceuil</button>
   <button onClick={Routerchange} id="publier"><AiTwotoneEdit/>Publier</button>
   <button onClick={Routerchange} id="messages"><AiFillAliwangwang/>Messages</button>
   <button onClick={Routerchange} id=""><AiTwotoneLock/>Deconnection</button>
   </div>


);
}
export default Navbar;