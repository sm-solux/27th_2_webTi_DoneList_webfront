import React, {Component} from 'react';
import "../styles/AllAboutMsg.css";
import ReceivedMsgItem from '../components/ReceivedMsgItem';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const MsgList = styled.ul`
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
`;

function ReceivedMsgList({ messages, len, index }) {
    return (
    <div className='received-msg-item'>
        <MsgList >
            <ReceivedMsgItem message={messages} index={len-index}/><hr className='received-msg-line'/><br/><br/>
        
        </MsgList>
    </div> 
    );
}

export default ReceivedMsgList;