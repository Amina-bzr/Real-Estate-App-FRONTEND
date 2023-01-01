
import './App.css';
import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import back from './assets/back.jpg';
import herbe from './assets/herbe.png';
import cozy from './assets/cosyback-01.jpg';
import group from './assets/Group 2.png';
import deal from './assets/dealing 1.png';
import light from './assets/Rectangle 8.png'
import but from './assets/but.png';
import kws from './assets/kws.png';
import AOS from 'aos';

import {motion as m } from "framer-motion";
function Hero() {
  const [offsetY, setoffsetY]=useState(0);

  const handlescroll=()=>setoffsetY(window.pageYOffset);
useEffect(()=>{
  window.addEventListener("scroll",handlescroll);
  return ()=>window.removeEventListener("scroll",handlescroll);

},[]);

  return (
   
    <div className="App">
      <div className="background">
      <div className='Logo'>
      <img src={back} alt="back" id="back" className="back"/>
      </div>
     
      <div className="navhero">
        <ul>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Help</a></li>
        <li><div className="botton"> Sign in </div></li>
       </ul>
        
      </div>
      
      <div className ="texthero"  >
      <m.div initial={{opacity:0}} animate={{opacity:1}}
      transition={{duration:0.9, ease:"easeOut"}}>
      <h1 style={{transform: `translateY(${-offsetY*0.1}px)`}} >Logo</h1>
      
      <h1 style={{transform: `translateY(${-offsetY*0.1}px)`}}>Heree</h1>
      </m.div>
      <m.div initial={{opacity:0}} animate={{opacity:1}}
      transition={{duration:0.75, ease:"easeOut"}}>
      <p style={{transform: `translateY(${-offsetY*0.08}px)`}}>your favourite realty service forever</p>
      </m.div>
      </div>

      
      <div className="logo"> Logo here </div>
     
      <img src={group} alt="group" id="group" className ="group" style={{transform: `translateY(${-offsetY*0.2}px)`}}/>
      </div>
      
     <div className="texting" style={{transform: `translateY(${-offsetY*0.2}px)`}}>
     <div className="text">
      <h1> About us</h1>
       <p id="para">we are here to help you choose what suits you , bring your dream house , and enjoy the comfort and peace , have the amazing experience of buying and selling realities with us ! , what are you waiting for create your account , and bring your chance now ! </p>
      <div className="sign"> Sign in </div>
        </div>
        <img src={deal} alt="deal" id="deal" className ="deal"/>

        <img src={light} alt="light" id="light" className ="light"/>
     </div>
     <div className="last">
     
     <img src={but} alt="but" id="but" className ="but"/>
     <img src={kws} alt="kws" id="kws" className ="kws"   />
     </div>
    
   
    </div>
  );
}

export default Hero;
