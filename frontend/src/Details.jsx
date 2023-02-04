import { useCallback, useState ,useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Navbar.jsx';
import './Details.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import placeholder from "./assets/placeholder.jpg";
import axios from 'axios';


function Details(){

    const[annonce, setAnnonce] = useState({});
    const[user, setUser] = useState({});
    const location = useLocation();

    useEffect(() => {
        const getAnnonce = () => {
            axios.get('http://annoncesimmobilieres.pythonanywhere.com/annonces/43')
            .then(response => {
                console.log(response.data);
                setAnnonce(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
        getAnnonce();
    }, [location.state]);
    
    let apiuser='http://annoncesimmobilieres.pythonanywhere.com/users/?username=';
    useEffect(() => {
        const getUser = () => {
            axios.get(apiuser+annonce.utilisateur)
            .then(responseuser => {
                console.log(responseuser.data);
                setUser(responseuser.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
        getUser();
    }, [location.state]);
    
    

    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyBAti57JxEigawx1X1Uz3pVxDRHJa7URVg"});
    if (!isLoaded) return <div>Loading...</div>

   return (
   <div className="Details">
    <div className='None'><Nav /></div>
    <div className='detailsBody'>
        <div className="detailsSection">
            <div className='topBar'>
                <div className='topBarPFP'>
                    <img alt="photo" id="loggedinPFP" src={placeholder}/>
                </div>
                <div className='topBarName'>
                    {user[0]?.last_name} {user[0]?.first_name}
                </div>
            </div>
            <div className='topDetailsSection'>
                <div className='gallerySection'>
                    <div className='mainImage'>
                        <img src={annonce.photos[0]?.photo} alt="photo" className="largephoto"/>
                    </div>
                    <div className='imageSelector'>
                        <div className='miniatureHolder'><img src={annonce.photos[0].photo} alt="photo" id="miniature1" className='miniature'/></div>
                        <div className='miniatureHolder'><img src={annonce.photos[1].photo} alt="photo" id="miniature2" className='miniature'/></div>
                        <div className='miniatureHolder'><img src={annonce.photos[2].photo} alt="photo" id="miniature3" className='miniature'/></div>
                        <div className='miniatureHolder'><img src={placeholder} alt="photo" id="miniature4" className='miniature'/></div>
                    </div>
                </div>
                <div className='AIinfoSection'>
                    <h1>{annonce.titre}</h1>
                    <p>Catégorie: {annonce.Categorie}</p>
                    <p>Type: {annonce.Type}</p>
                    <p>Surface: {annonce.Surface} m²</p>
                    <h1>{annonce.Prix} DA</h1>
                    <button id='envoyerMessage'>Envoyer Message</button>
                </div>
            </div>
            <div className='bottomDetailsSection'>
                <div className='Description'>
                    <h1 id='descTitle'>Description</h1>
                    <p>{annonce.Description}</p>
                </div>
                <div className='ownerInfoSection'>
                    <div className='personalInfoSection'> 
                        <div className='ownerPFP'>
                            <img src={user[0]?.contact.picture} alt="photo" id="miniatureOwner"/>   
                        </div>  
                        <div className='ownerInfo'>                         
                            <h3>{user[0]?.last_name} {user[0]?.first_name}</h3>
                            <p>{user[0]?.contact.addresse}</p>
                            <p>{user[0]?.contact.telephone}</p>
                            <p>{user[0]?.email}</p>
                        </div>
                    </div>
                    <div className='addressSection'>
                        <h3>Adresse</h3>
                        <p>{annonce.Addresse}</p>
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