import React, { useState } from 'react';
import './home.css';
import acceuil from './assets/Acceuil.png';
import bar from './assets/bar.png';
import result from './assets/result.png';
import modele from './assets/Modele.jpg';
import axios from 'axios';
import { useCallback,useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Navbar';

function Home (){
  const [tablewilaya,settablewilaya]=useState([]);
  const [tablecommune,settablecommune]=useState([]);
  const [tabletype,settabletype]=useState([]);
  const [tabledate,settabledate]=useState([]);


   const [anonces,setanonces]=useState([]);
   const[searchkey,setsearchkey]=useState("");
   const [wilayafiltre,setwilaya]=useState("");
   const [communefiltre,setcommune]=useState("");
   const [typefiltre,settype]=useState("");
   const[date1,setdate1]=useState("");
   const[date2,setdate2]=useState("");
   const[data,setdata]=useState([]);
   const[changed,setchanged]=useState(false);
    let navigate = useNavigate(); 
    const location=useLocation();
    function intersection(array,witch){
      if(witch==="wilaya"){
        const intersection1 = array.filter(object1 =>
          tablecommune.some(object2 => object1.id === object2.id)
        );
        const intersection2 = intersection1.filter(object1 =>
          tabledate.some(object2 => object1.id === object2.id)
        );
        const intersection3 = intersection2.filter(object1 =>
          tabletype.some(object2 => object1.id === object2.id)
        );
        setanonces(intersection3);
      }
      if(witch==="type"){
        const intersection1 = array.filter(object1 =>
          tablecommune.some(object2 => object1.id === object2.id)
        );
        const intersection2 = intersection1.filter(object1 =>
          tabledate.some(object2 => object1.id === object2.id)
        );
        const intersection3 = intersection2.filter(object1 =>
          tablewilaya.some(object2 => object1.id === object2.id)
        );
        setanonces(intersection3);
      }
      if(witch==="date"){
        const intersection1 = array.filter(object1 =>
          tablecommune.some(object2 => object1.id === object2.id)
        );
        const intersection2 = intersection1.filter(object1 =>
          tablewilaya.some(object2 => object1.id === object2.id)
        );
        const intersection3 = intersection2.filter(object1 =>
          tabletype.some(object2 => object1.id === object2.id)
        );
        setanonces(intersection3);
      }
      if(witch==="commune"){
        const intersection1 = array.filter(object1 =>
          tablewilaya.some(object2 => object1.id === object2.id)
        );
        const intersection2 = intersection1.filter(object1 =>
          tabledate.some(object2 => object1.id === object2.id)
        );
        const intersection3 = intersection2.filter(object1 =>
          tabletype.some(object2 => object1.id === object2.id)
        );
        setanonces(intersection3);
      }
      
      
    }
   function  handlekeydown(event){
      if (event.key === 'Enter') {
         // call the function you want to execute here
         console.log(searchkey);
      let url="https://annoncesimmobilieres.pythonanywhere.com/annonces/?titre="+searchkey;
         axios.get(url)
       .then(function (response) {
         console.log(response.data);
         setanonces(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });

       }
    }
    function seechanges(){
      console.log(dataannonce);
    }
   
   useEffect(()=>{
    const array=[location.state.useremail,location.state.tok];
     setdata(array);
      axios.get('http://annoncesimmobilieres.pythonanywhere.com/annonces')
       .then(function (response) {
         console.log(response.data);
         setanonces(response.data);
         settablewilaya(response.data);
         settablecommune(response.data);
         settabletype(response.data);
         settabledate(response.data);
         console.log(response.data[1].photos[0].photo);
       })
       .catch(function (error) {
         console.log(error);
       });

   },[]);
   function filtrewilaya(wil){
      
      let url="https://annoncesimmobilieres.pythonanywhere.com/annonces/?Wilaya="+wil;
      if(wil!=="none")
      {
        console.log(wil);
        axios.get(url)
        .then(function (response) {
          console.log(response.data);
          settablewilaya(response.data);
          ///////intersection des 4 tableau 
          intersection(response.data , "wilaya");
          
          
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else{
       
        const array=[location.state.useremail,location.state.tok];
     setdata(array);
      axios.get('http://annoncesimmobilieres.pythonanywhere.com/annonces')
       .then(function (response) {
         console.log(response.data);
         settablewilaya(response.data);
        ///////intersection des 4 tableau 
        intersection(response.data ,"wilaya");
       })
       .catch(function (error) {
         console.log(error);
       }); 
      }
      

   }
   function postcommune(com){
     console.log(com);
     let url="https://annoncesimmobilieres.pythonanywhere.com/annonces/?Commune="+com;
     axios.get(url)
       .then(function (response) {
         console.log(response.data);
         settablecommune(response.data);
         intersection(response.data , "commune");
       })
       .catch(function (error) {
         console.log(error);
       });

   }
   function posttype(typ){
      
      let url="https://annoncesimmobilieres.pythonanywhere.com/annonces/?Type="+typ;
      if(typ !== "none"){
  
        console.log(typ);
        axios.get(url)
        .then(function (response) {
          console.log(response.data);
          settabletype(response.data);
         intersection(response.data , "type");
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else{
      
        const array=[location.state.useremail,location.state.tok];
     setdata(array);
      axios.get('http://annoncesimmobilieres.pythonanywhere.com/annonces')
       .then(function (response) {

        settabletype(response.data);
        intersection(response.data , "type");
       })
       .catch(function (error) {
         console.log(error);
       }); 
      }
      
   }
   function filtreperiode(){
    console.log(date1);
    console.log(date2);
    let url="https://annoncesimmobilieres.pythonanywhere.com/annonces/?min_date="+date1+"&max_date="+date2;
    axios.get(url)
      .then(function (response) {
        console.log(response.data);
        settabledate(response.data);
         intersection(response.data , "date");
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   function verification (valeur){
    setdate2(valeur);
    const datemin= new Date(date1);
    const datemax= new Date(valeur);

  const result = datemin< datemax;
 if(result === false)
 {
  window.alert("veillez inverser l'ordre des dates!");
 }

   }
   
    return (
   <div className="Home">
    
    <div className='homebody'>
    <img src={acceuil} alt="acceuil" id="acceuil" className="acceuil"/>
    <input type="text" id="recherche" placeholder='       Rechercher' onChange={(e)=>{setsearchkey(e.target.value)}} onKeyDown={handlekeydown} />
    <img src={bar} alt="bar" id="bar" className="bar"/>
    
    <div className='Wilaya' >
    <select onChange={(e)=>{filtrewilaya(e.target.value)}}>
       <option>none</option>
        <option>Adrar</option>
        <option> Chlef</option>
        <option> Lagouat</option>
        <option>Oum elbouaki</option>
        <option>Batna</option>
        <option>Bejaia</option>
        <option>Beskra</option>
        <option>Bechar</option>
        <option>Blida</option>
        <option>Bouira</option>
        <option>Tamanrasset</option>
        <option>Tebessa</option>
        <option>Tlemcen</option>
        <option>Tiaret</option>
        <option>Tizi Ouzou</option>
        <option> Alger</option>
        <option> Djelfa</option>
        <option>Djijel</option>
        <option>Sétif</option>
        <option>Saïda</option>
        <option>Skikda </option>
        <option>Sidi Bel Abbès</option>
        <option>Annaba</option>
        <option>Guelma</option>
        <option>Constantine</option>
        <option>Médéa</option>
        <option>Mostaganem</option>
        <option>M'Sila</option>
        <option>Mascara</option>
        <option>Ouargla</option>
        <option>Oran</option>
        <option>El Bayadh </option>
        <option>Illizi</option>
        <option>Bordj Bou Arreridj</option>
        <option>Boumerdès</option>
        <option>El Tarf</option>
        <option>Tindouf</option>
        <option>Tissemsilt</option>
        <option>El Oued</option>
        <option>Khenchela</option>
        <option>Souk Ahras</option>
        <option>Tipaza</option>
        <option>Mila</option>
        <option>Aïn Defla</option>
        <option>Naâma</option>
        <option>Aïn Témouchent</option>
        <option>Ghardaia</option>
        <option>Relizane</option>
        <option>Timimoun</option>
        <option>Bordj Badji Mokhtar</option>
        <option>Ouled Djellal</option>
        <option>Béni Abbès</option>
        <option>In Salah</option>
        <option>In Guezzam</option>
        <option>Touggourt</option>
        <option>Djanet</option>
        <option>El M’Ghaier</option>
        <option>El Meniaa</option>
    </select>
    <input type="text" placeholder='La commune' onChange={(e)=>{postcommune(e.target.value)}}/>
    </div>
    <div className='Type' onChange={(e)=>{posttype(e.target.value)}}>
       <select>
        <option>none</option>
        <option>Terrain</option>
        <option>Terrain Agricole</option>
        <option>Appartement</option>
        <option>Maison</option>
        <option>Bangalow</option>
        <option>villa</option>
        <option>Autre</option>
       </select>
    </div>
    <div className='periode'>
    <div className='Categorie'>
    <input type="date" placeholder='date1' onChange={(e)=>{setdate1(e.target.value)}}/>
    <input type="date" placeholder='date2' onChange={(e)=>{verification(e.target.value)}}/>
    
    </div>
    <button id='subbutton' onClick={filtreperiode} > submit</button>
    </div>
    
    
   

    <div className='shopcard'>
    <img src={result} alt="result" id="result" className="result"/>
    <div className='nd_part'>
    { 
   anonces.map(card =>(
    
      
      <div className='Product'>
      <img src={modele} alt="modele" id="modele" className="modele"/>
        <h2>{card.titre}</h2>
        <h4>{card.Wilaya}</h4>
        <div className='det'>
           <h2>{card.Prix+"DA"}</h2>
           <button  >Details</button>
           </div>
       
      </div>
   ))}
   </div>
       
    </div>
  
    </div>
    <Nav data={data}/>
   </div>

);
}
export default Home;