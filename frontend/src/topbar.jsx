import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import './topbar.css';
import Navbar from './Navbar';
import avatar from './assets/avatar.jpg'
import {AiOutlineBell} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
function topbar(){
    
    const [affichage,setaffichage]=useState();
    const navigate=useNavigate();
   
      
    return (
        <div class="topbar">
            
      
 <AiOutlineBell size={25}/>
            <a href="#" >Nom</a>
             <img src={avatar} id="profilepic" style={{
                width:"30px",
                height:"30px",
                borderRadius:"50%",
                objectFit:"cover",
             }}/>
        
      </div>

);
}
export default topbar;