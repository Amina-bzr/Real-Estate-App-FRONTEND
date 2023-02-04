import React from "react";
import Hero from './herosection';
import Home from './Home';
import Navbar from "./Navbar";
import Details from './Details';
import Messages from "./Messages";
import Compte from "./Compte";
import { Route, Link  } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from "react-router-dom";
function App (){
    return (
       
        <div className="App">
           
            <Hero/>
            
          
        </div>
       
    );
}
export default App;
