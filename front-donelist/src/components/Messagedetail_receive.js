import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import React, {Component} from 'react';
import NavAfterLogin from "./NavAfterLogin_blue";
import UnderBar from "./UnderBar";
import "../styles/AllAboutMsg.css";
import styled from "styled-components";
import axios from "axios";


function Messagedetail({message}) {
    /*const location = useLocation();
    const messageDetail_title = location.state.messageTitle;
    const messageDetail_content = location.state.messageContent;*/
    


    return (
        <div>
        <div className="msg-title">받은 쪽지함 {'>'} 쪽지 열람</div>
        <hr className="msg-line"/>
        <div className="msgDetailTitle">Donelist</div>
        <div className="msgDetailTitle-area">
            {message.doneId.title}
        </div>
        <div className="msgsender">
            보낸 사람
        </div>
        <div className="msgsenderdetail">
            {message.sendId.Nickname}
        </div>
        <div className="msgDetailContent">내용</div>
        <div className="msgDetailContent-area">
           {message.message}
        </div>
        <div>
            <button className="re-sending-btn">답장 보내기</button>
        </div>
        <UnderBar/>
        </div>
    );
}

export default Messagedetail;