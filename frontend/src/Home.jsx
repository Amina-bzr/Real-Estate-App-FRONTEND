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
        <div className='None'><Nav/></div>
        <div className='homebody'>
            <img src={acceuil} alt="acceuil" id="acceuil" className="acceuil"/>
            <input type="text" id="recherche" placeholder='Rechercher'/>
            <img src={bar} alt="bar" id="bar" className="bar"/>
            <div className='shopcard'>
                <img src={result} alt="result" id="result" className="result"/>
                    <h1>home home home </h1>
                    <h1>home home home </h1>
                    <h1>home home home </h1>
                    <h1>home home home </h1>
            </div>
        </div>
   </div>

);
}
export default Home;