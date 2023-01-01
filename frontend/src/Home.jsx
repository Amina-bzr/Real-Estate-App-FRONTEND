import React, { useState } from 'react';
import './home.css';
import acceuil from './assets/Acceuil.png';
import bar from './assets/bar.png';
import result from './assets/result.png';
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar';
function Home (){
    return (
   <div className="Home">
    <Nav/>
    <img src={acceuil} alt="acceuil" id="acceuil" className="acceuil"/>
    <input type="text" id="recherche"/>
    <img src={bar} alt="bar" id="bar" className="bar"/>
    <img src={result} alt="result" id="result" className="result"/>
   </div>

);
}
export default Home;