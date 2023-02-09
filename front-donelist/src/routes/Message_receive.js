import { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import React, {Component} from 'react';
import NavAfterLogin from "../components/NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import "../styles/AllAboutMsg.css";
import axios from "axios";
import Messagedetail from "../components/Messagedetail_receive.js"

function Message_receive() {
    

    let { msgid } = useParams();

    const [message, getMessage] = useState([]);
    const getMessages = async () => {
        const Msgs = await axios.get("/dm/receive/" + msgid +"/").then((res) => {return res.data})

        getMessage(Msgs)


    }

    useEffect(() => {
        
    getMessages();

    },[message])


    return (
        <div>
            <NavAfterLogin/>
            {message.length === 0 ? <div></div> : <div>
                <Messagedetail message={message}/>
            </div>}
        <UnderBar/>
        </div>
    );
}

export default Message_receive;