import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import titre from './assets/titre.png';
import modele from './assets/modele.jpg';
import './Mesannonces.css';
function Mesannonces(){
    const location=useLocation();
    const [data,setdata]=useState([]);
    useEffect(()=>{
        const array=[location.state.useremail,location.state.tok];
         setdata(array);
       },[]);
    return (
   
   
    <div className='Mes'>
     <div className='container'>
      <div className='box'>
        <div className='view'>
        <h4>here is the text</h4>
        <div className='display'>
        <img src={modele} alt="modele" id="myimage" className="myimage"/>
        <div className='others'>
        <img src={modele} alt="modele" id="myimages" className="myimages"/>
        <img src={modele} alt="modele" id="myimages" className="myimages"/>
        <img src={modele} alt="modele" id="myimages" className="myimages"/>
        <img src={modele} alt="modele" id="myimages" className="myimages"/>
        </div>
        </div>
       
        </div>
        <div className='informations'>
        <h4>here is the text</h4>
        <img src={modele} alt="modele" id="myimage" className="myimage"/>
        </div>
       
        </div>

     </div>
   
   
 
    <Navbar data={data}/>
    </div>
   
   
 

);
}
export default Mesannonces;