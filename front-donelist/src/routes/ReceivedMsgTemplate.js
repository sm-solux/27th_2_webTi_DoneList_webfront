import React from 'react';
import NavAfterLogin from '../components/NavAfterLogin_blue';
import UnderBar from '../components/UnderBar';
import "../styles/AllAboutMsg.css";
import ReceivedMsgItem from '../components/ReceivedMsgItem';
import MsgModalForm from '../components/MsgModal';
import ReceivedMsgList from '../components/ReceivedMsgList';
import { useEffect, useState } from "react";
import axios from 'axios';

function ReceivedMsgTemplate() {
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    
    var dateString = year + '-' + month  + '-' + day;

    const [messages, setMessages] = useState([]);

    const getMsg = async () => {
        const Msgs = await axios.get('dm/receive/').then((res) => {
            return res.data
        })

        const Msg = Msgs.filter((item) => {
            return item.receiveId === sessionStorage.userId
        })

        setMessages(Msg)

    }

    useEffect(() => {
        getMsg();
    }, []) 


    return(
        
        <div className='msg-template'>
            <NavAfterLogin/>
            <div className='msg-title'>받은 쪽지함</div>
            <div><hr className="msg-line"/></div>
            <ul className='msg-list-titles'>
                <li className='msg-list-title1'>No.</li>
                <li className='msg-list-title2'>쪽지를 받은 Donelist</li>
                <li className='msg-list-title3'>보낸 이</li>
                <li className='msg-list-title4'>등록일</li>
            </ul>
            <div><hr className='msg-title-line'/></div>
            <div  className="received-msg-item-div">
            {messages.slice(0).reverse().map((item, index) => <ReceivedMsgList messages={item} len={messages.length} index={index} key={item._id}/>)}
            </div>
            <UnderBar/>
        </div>
    );
}

export default ReceivedMsgTemplate;