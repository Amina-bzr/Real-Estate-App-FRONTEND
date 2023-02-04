import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hero from './herosection';
import Home from './Home';
import Navbar from "./Navbar";
import Details from './Details';
import Messages from "./Messages";
import Compte from "./Compte";
import Publier from "./Publier";
import Topbar from "./topbar";
import Contactus from './Contactus';
import Mesannonces from './Mesannonces';
import {BrowserRouter , createBrowserRouter, RouterProvider,Route} from "react-router-dom";
const router=createBrowserRouter([
{
  path: "/",
  element: <App/>,
},
{
  path: "/mesannonces",
  element: <Mesannonces/>,
},
{
  path: "/home",
  element: <Home/>,
},
{
  path: "/contactus",
  element: <Contactus/>,
},
{
  path: "/nav",
  element: <Navbar/>,
},
{
  path:"/topbar",
  element:<Topbar/>

},
{
  path: "/details",
  element: <Details/>,
},
{
  path: "/messages",
  element: <Messages/>,
},
{
  path: "/compte",
  element: <Compte/>,
},
{
  path: "/publier",
  element: <Publier/>,
},

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

