import React, { useState } from 'react';
import { useCallback,useEffect, useRef } from 'react';
import Nav from "./Navbar.jsx";
import "./Messages.css";
import MessagesIcon from "./assets/messages.png";
import placeholder from "./assets/placeholder.jpg";

function Messages(){
    return (
   <div className="Messages">
    <div className='None'><Nav/></div>
    <div className='MessagesBody'>
        <div className='ContactList'>
            <img src={MessagesIcon} alt='messages' id='messagesIcon'/>
            <div className='MiniContact'>
                <div className='ContactPFP'>
                    <img src={placeholder} alt='pfp' className='pfp'/>
                </div>
                <div className='ContactName'>
                    <p>Nom Prénom</p>
                </div>
            </div>
        </div>
        <div className='MessageInterface'>
            <div className='ContactInfoTopBar'>
                <div className='ContactPFPTop'>
                    <img src={placeholder} alt='pfp' className='pfp'/>
                </div>
                <div className='ContactNameTop'>
                    <div className='TopName'>Nom Prénom</div>
                    <div className='TopTitreAnnonce'>Titre Annonce</div>
                </div>
            </div>
            <div className='MessagesSection'>
                <div className='ReceiverMessage'>
                    <div className='tinyPFP'>
                        <img src={placeholder} className='tinyphoto'/>
                    </div>
                    <div className='MessageContentReceiver'>
                        Bonjour, je veux faire un offre!
                    </div>
                </div>
                <div className='SenderMessage'>
                    <div className='tinyPFP'>
                        <img src={placeholder} className='tinyphoto'/>
                    </div>
                    <div className='MessageContentSender'>
                        Oui bien sûr!
                    </div>
                </div>
            </div>
            <div className='messageBarWrapper'>
                <input type="text" id="messageBar" placeholder='Ecrire un message'/>
            </div>
        </div>

    </div>
   </div>

);
}
export default Messages;