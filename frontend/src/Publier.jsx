import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar';
import './Publier.css';
import Images from './images';
import pubimg from './assets/publierann.png';
import {Formik, useFormik} from 'formik';
import Topbar from './topbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function Publier(){
    const [tableauimages,settableauimage]=useState([]);
    const [changed,setchanged]=useState(false);
    const[token,settoken]=useState("");
    const [data,setdata]=useState([]);
    const location=useLocation();
    useEffect(() => {
     const array=[location.state.useremail,location.state.tok];
     setdata(array);
 
      }, []);
    
    const importimages =(imag)=>{
        settableauimage(imag);
        console.log(imag);
    }
    const forme = useFormik({
        initialValues: {
         titre:"",
         Surface:"",
         Wilaya:"",
         Commune:"",
         Description:"",
         Categorie:"",
         Type:"",
         Addresse:"",
         Prix:"",
         
        },
        onSubmit: (values) => {
            
            console.log("form submitted");
           if(tableauimages.length===0)
           {
            window.alert("upload au mois une image!");
           }
           else{
            fetch('https://annoncesimmobilieres.pythonanywhere.com/annonces/', {
              method: 'POST',
              headers: {
               'Content-Type': 'application/json',
                    Authorization: `Token ${data[1]}`,
              },
                       body:JSON.stringify(values)
            })
              .then(response => response.json())
              .then(result => {
                console.log(result);
                uploadphotos(result);
              })
              .catch(error => {
                console.error(error);
              });
              ////////Upload photos des annonces //////////

              
          
          
          }
        },
    });
    function uploadphotos(resp){
      const id_valeur=resp.id;
      console.log(tableauimages);
      for(var i=0;i<tableauimages.length;i++)
      {
        const obj={ annonce:id_valeur ,photo:tableauimages[i]  };
        const getFormData = obj => Object.keys(obj).reduce((formData, key) => {
         formData.append(key, obj[key]);
         return formData;
         }, new FormData());
      const final=getFormData(obj);
      console.log(final);
      fetch('https://annoncesimmobilieres.pythonanywhere.com/photos/', {
         method: 'POST',
         headers: {

          Authorization: `Token ${data[1]}`,
         },
         body: final
       })
         .then(response => response.json())
         .then(result => {
           console.log(result);
         })
         .catch(error => {
           console.error(error);
         });
       }


      }

    

    return (
   <div className="publier">
   <Nav data={data}/>
    <div className='form'> 
    <img src={pubimg} alt="pubimg" id="pubimg"/>
    <div className='first'>
    <label for="titre" id="ltitre"> Titre</label>
    <label for="Surface" id="lSurface"> Surface</label>
    <input type="text" placeholder='   Titre' id="titre" value={forme.values.titre} onChange={forme.handleChange} />
    <input type="text" placeholder='   Surface' id="Surface" value={forme.values.Surface} onChange={forme.handleChange} />
    </div>
    
    <label for="Description" id="lDescription"> Description</label>
    
    <textarea  cols="50" rows="10 " id="Description"  value={forme.values.Description} onChange={forme.handleChange} ></textarea>
    <div className='selects'>
    <label for="Categorie">Categorie</label>
    <label for="Type">Type</label>
    <select id="Categorie" value={forme.values.Categorie} onChange={forme.handleChange}>
        <option>Vente</option>
        <option>Echange</option>
        <option>Location</option>
        <option>Location pour vacances</option>
       
       </select>
      
    <select id="Type" value={forme.values.Type} onChange={forme.handleChange} >
        <option>Terrain</option>
        <option>Terrain Agricole</option>
        <option>Appartement</option>
        <option>Maison</option>
        <option>Bangalow</option>
        <option>Autre</option>
       </select>
    </div>
    <div className='selects'>
    <label for="Categorie">Wilaya</label>
    <label for="Type">Commune</label>
    <select id="Wilaya" value={forme.values.Wilaya} onChange={forme.handleChange}>
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
    <input type="text" placeholder='   Commune' id="Commune" value={forme.values.Commune} onChange={forme.handleChange} />
    </div>
   
       <label for="Addresse" id="lAdresse"> Adresse</label>
    <input type="text" placeholder='   Adresse' id="Addresse" value={forme.values.Addresse} onChange={forme.handleChange} />
    <label for="Prix" id="lPrix"> Prix</label>
    <input type="text" placeholder='   Prix' id="Prix" value={forme.values.Prix} onChange={forme.handleChange} />
    <div className='imgupload'>
    <Images importimages={importimages}/>
    </div>
    
    <button id="pub" type="submit" onClick={forme.handleSubmit} >Publier</button>
   
    </div>
    
   </div>

);
}
export default Publier;