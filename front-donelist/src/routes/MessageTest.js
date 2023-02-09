import { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import React, {Component} from 'react';
import NavAfterLogin from "../components/NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import "../styles/AllAboutMsg.css";
import styled from "styled-components";
import axios from "axios";

function MessageTest() {
    

    let { msgid } = useParams();
    const [msg, getMsg] = useState([]);

    const getMsgs = async () => {
        const Msgs = await axios.get('dm/').then((res) => {
            return res.data
        })
        console.log(Msgs)

    }

    useEffect(() => {
        getMsgs();
    }, [])

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