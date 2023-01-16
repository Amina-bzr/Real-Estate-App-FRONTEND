import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png'
import {AiFillHome , AiOutlineUser ,AiTwotoneNotification , AiTwotoneEdit, AiFillAliwangwang , AiTwotoneLock} from 'react-icons/ai';

import { useCallback,useEffect, useRef } from 'react';
function Navbar (){
    return (
   <div className="Navbar">
    <img src={logo} alt="logo" id="logo"/>
    <button><AiFillHome/> Acceuil</button>
    <button><AiOutlineUser/> Compte</button>
    <button><AiTwotoneNotification/> Mes Annonces</button>
    <button><AiTwotoneEdit/> Publier</button>
    <button><AiFillAliwangwang/> Messages</button>
    <button><AiTwotoneLock/> Déconnection</button>
   </div>


);
}
export default Navbar;