import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import Nav from './Navbar.jsx';
import './Details.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import placeholder from "./assets/placeholder.jpg";


function Details(){

    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyBAti57JxEigawx1X1Uz3pVxDRHJa7URVg"});
    if (!isLoaded) return <div>Loading...</div>

   return (
   <div className="Details">
    <div className='None'><Nav /></div>
    <div className='detailsBody'>
        <div className="detailsSection">
            <div className='topBar'>account</div>
            <div className='topDetailsSection'>
                <div className='gallerySection'>
                    <div className='mainImage'>
                        <img src={placeholder} alt="photo" className="largephoto"/>
                    </div>
                    <div className='imageSelector'>
                        <div className='miniatureHolder'><img src={placeholder} alt="photo" id="miniature1" className='miniature'/></div>
                        <div className='miniatureHolder'><img src={placeholder} alt="photo" id="miniature2" className='miniature'/></div>
                        <div className='miniatureHolder'><img src={placeholder} alt="photo" id="miniature3" className='miniature'/></div>
                        <div className='miniatureHolder'><img src={placeholder} alt="photo" id="miniature4" className='miniature'/></div>
                    </div>
                </div>
                <div className='AIinfoSection'>
                    <h1>Dark House</h1>
                    <p>Categorie</p>
                    <p>Type</p>
                    <p>Surface</p>
                    <h1> 500000DA </h1>
                    <button id='envoyerMessage'>Envoyer Message</button>
                </div>
            </div>
            <div className='bottomDetailsSection'>
                <div className='Description'>
                    <h1 id='descTitle'>Description</h1>
                    <p>Description du bien immobilier</p>
                </div>
                <div className='ownerInfoSection'>
                    <div className='personalInfoSection'>                            
                        <h3>Nom Prenom</h3>
                        <p>Alger</p>
                        <p>0987654567</p>
                        <p>kwkwkwkw@kw.dz</p>
                    </div>
                    <div className='addressSection'>
                        <h3>Adresse</h3>
                        <p>45 Adresse du propriétaire</p>
                    </div>
                </div>
            </div>    
        </div>
        <div className="mapSection">
            <Map/>
        </div>
    </div>
   </div>
);
}

function Map() {

    return <GoogleMap 
    zoom={19} 
    center={{lat: 36.70442384971943, lng: 3.1748281451214413 }} 
    mapContainerClassName="mapSection"
    mapTypeId='hybrid'>

        <Marker position={{lat: 36.70442384971943, lng: 3.1748281451214413 }} />
    </GoogleMap>
}
export default Details;