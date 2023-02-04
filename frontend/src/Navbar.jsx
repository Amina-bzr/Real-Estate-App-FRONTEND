import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png'
import {AiFillHome , AiOutlineUser ,AiTwotoneNotification , AiTwotoneEdit, AiFillAliwangwang , AiTwotoneLock} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import { useCallback,useEffect, useRef } from 'react';
import './topbar.css';
import axios from 'axios';
import avatar from './assets/avatar.jpg';
import {AiOutlineBell} from 'react-icons/ai';
import TopBar from './topbar';
function Navbar (props){
  const donnee =props.data;
  const [avat,setavat]=useState(avatar);
  const [userinfo,setuserinfo]=useState([]);
    let navigate = useNavigate(); 
    const Routerchange = event =>{ 
      
      let str =event.currentTarget.id;
      let path = '/'+str; 
      navigate(path, {
        state: {
          useremail: donnee[0],
          tok:donnee[1],
        }
      });
    }

    useEffect(() => {
      let url='https://annoncesimmobilieres.pythonanywhere.com/users/?email='+props.data[0];
       axios.get(url)
      .then(function (response) {
       
       setuserinfo(response.data);
       setavat(response.data[0].contact.picture);
  })
  .catch(function (error) {
    console.log(error);
  });
 
      }, [props]);
    
    return (
   <div className="Navbar">
    <div className='toptop'>
    {userinfo.map(cmpt=>(
       <div class="topbar">
 <AiOutlineBell size={25}/>
            <a href="#" >{cmpt.last_name+" "+cmpt.first_name}</a>
             <img src={avat} id="profilepic" style={{
                width:"30px",
                height:"30px",
                borderRadius:"50%",
                objectFit:"cover",
                

            }} />
        </div>
      )
      )}
    </div>
      
           
        
        
      
    <img src={logo} alt="logo" id="logo"/>
   <button onClick={Routerchange} id="compte"><AiOutlineUser/> Compte</button>
   <button onClick={Routerchange} id="mesannonces"><AiTwotoneNotification/>Mes Annonces</button>
   <button onClick={Routerchange} id="home"><AiFillHome/> Acceuil</button>
   <button onClick={Routerchange} id="publier"><AiTwotoneEdit/>Publier</button>
   <button onClick={Routerchange} id="messages"><AiFillAliwangwang/>Messages</button>
   <button onClick={Routerchange} id=""><AiTwotoneLock/>Deconnection</button>
   </div>
  

);
}
export default Navbar;