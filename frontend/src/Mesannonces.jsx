import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import titree from './assets/titre.png';
import modele from './assets/modele.jpg';
import './Mesannonces.css';
import axios from 'axios';

function Mesannonces(){
    const location=useLocation();
    const [data,setdata]=useState([]);
    const[mesannonces,setmesannonces]=useState([]);

    
    useEffect(()=>{
        const array=[location.state.useremail,location.state.tok];
         setdata(array);
         let url='https://annoncesimmobilieres.pythonanywhere.com/users/?email='+location.state.useremail;
           axios.get(url)
          .then(function (response) {
           console.log(response.data);  
           chargerannonces(response.data[0].id);
           
      })
      .catch(function (error) {
        console.log(error);
      });
     
          }, []);
     
    function chargerannonces(id){
      axios.get('http://annoncesimmobilieres.pythonanywhere.com/annonces/?utilisateur='+id)
       .then(function (response) {
         console.log(response.data);
         setmesannonces(response.data);
         
       })
       .catch(function (error) {
         console.log(error);
       });
    };
    function deleting(id_annonce){
      let url='https://annoncesimmobilieres.pythonanywhere.com/annonces/'+id_annonce+'/';
      console.log(id_annonce);
         fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
             Authorization: `Token ${data[1]}`,
            },
                  
          })
            .then(response => response.json())
            .then(result => {
              console.log(result);
            
            })
            .catch(error => {
              console.error(error);
              window.location.reload();
            });

      
    };
  if (mesannonces.length!==0)
  {
    return (
   
   
      <div className='Mes'>
       <div className='container'>
       <img src={titree} alt="mesanoonce" id="titree" className="titree"/>
       {
        mesannonces.map((item)=>(
          <div className='box' key={item.id}>
          <div className='view'>
          <h4>{item.titre}</h4>
      
          <div className='display'>
                <img src={item.photos[0].photo} alt="modele" id="myimage" className="myimage"/>
                <div className='others'>
             {
              item.photos.slice(1).map((phot)=>(
                <img src={phot.photo} alt="modele" id="myimages" className="myimages"/>
              
              ))
             
             }
              </div>
         
         </div>
          
         
          </div>
          <div className='informations'>
          <h3>Information</h3>
          <div className='content'>
          <h4>Categorie</h4>
          <h5>{item.Categorie}</h5>
          <h4>Type</h4>
          <h5>{item.Type}</h5>
          <h4>Wilaya</h4>
          <h5>{item.Wilaya}</h5>
          <h4>Adresse</h4>
          <h5>{item.Addresse}</h5>
          <h4>Date</h4>
          <h5>{item.date_pub}</h5>
         
          </div>
          
          </div>
          <div className='buttondiv'>
          <button onClick={()=>deleting(item.id)}>Supprimer</button>
          <button  >Details</button>
          </div>
         
          </div>
        ))
       }
      
       </div>
   
      <Navbar data={data}/>
      </div>
     
     
   
  
  );
  }
  else{
    return(
    <div className='Mes'>
       <div className='container'>
       <img src={titree} alt="mesanoonce" id="titree" className="titree"/>
       <h2>Aucune annonce trouvée</h2>
       </div>
     
     
   
      <Navbar data={data}/>
      </div>
    )
  }
   
}
export default Mesannonces;