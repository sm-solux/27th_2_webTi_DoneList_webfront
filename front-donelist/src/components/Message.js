import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import React, {Component} from 'react';
import NavAfterLogin from "./NavAfterLogin_blue";
import UnderBar from "./UnderBar";
import "../styles/AllAboutMsg.css";
import styled from "styled-components";

function MessageTest(msgState) {
    /*const location = useLocation();
    const messageDetail_title = location.state.messageTitle;
    const messageDetail_content = location.state.messageContent;*/

    return (
        <div>
            <NavAfterLogin/>
        <div className="msg-title">받은 쪽지함 {'>'} 쪽지 열람</div>
        <hr className="msg-line"/>
        <div className="msgDetailTitle">제목</div>
        <div className="msgDetailTitle-area">
            {/*{messageDetail_title}*/}
        </div>
        <div className="msgDetailContent">내용</div>
        <div className="msgDetailContent-area">
            {/*{messageDetail_content}*/}
        </div>
        <div>
            <button className="re-sending-btn">답장 보내기</button>
        </div>
        <UnderBar/>
        </div>
    );
}

export default MessageTest;