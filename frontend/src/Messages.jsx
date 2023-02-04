import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
function Messages(){
    const location=useLocation();
    const [data,setdata]=useState([]);
    useEffect(()=>{
        const array=[location.state.useremail,location.state.tok];
         setdata(array);
       },[]);
    return (
   <div className="Messages">
    <Navbar data={data}/>
    <h1>Hello it's messages page  </h1>
   </div>

);
}
export default Messages;