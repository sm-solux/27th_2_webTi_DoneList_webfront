import { useEffect, useState } from "react";
import React, {Component} from 'react';
import Modal from 'react-modal';
import styled from "styled-components";
import "../styles/MsgModal.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MsgModal(props) {
    
    const [msg, setMsg] = useState(
        {
            sendId: sessionStorage.userId,
            receiveId: props.receiveId,
            doneId: props.doneId,
            message: "",
        }
    )
    function closeModal() {
        props.closeModal();
    }
    const navigate = useNavigate();
    const handleChangeMsgState = (e) => {
        e.preventDefault();
        setMsg({
            ...msg,
            [e.target.name]: e.target.value,
        });
    }
    const handleMsgSubmit = async(e) => {
        e.preventDefault();
        await axios.post('/dm/', msg).then((res) => closeModal())
    }

    return (
        <div className="msgModal">
        <div className="msgmodalBody">
            <button className="msgmodalCloseBtn" type="button" onClick={closeModal}>
            ✖</button>
            <form>
            <div className="msgmodal-title">Donelist Title</div>
            <div className="msgmodal-titledetail">
                {props.donetitle}
            </div>

            <div className="msgmodal-contents">내용</div>
            <textarea className="msgmodal-contents-txtarea" 
            name="message" value={msg.message} 
            onChange={handleChangeMsgState}></textarea>
            <div>
        <button className="msgmodal-sendBtn" type="submit" onClick={handleMsgSubmit}>쪽지 보내기</button>
        </div>
            </form>
        </div>
        <div></div>
        </div>
    );
}

export default MsgModal;