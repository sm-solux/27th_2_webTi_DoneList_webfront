import React, { Component } from "react";
import "../styles/AllAboutMsg.css";
import SendedMsgItem from "../components/SendedMsgItem";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const MsgList = styled.ul`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

function SendMsgList({ messages, len , index}) {
  return (
    <div>
      <div className="received-msg-item">
        <MsgList>
          <SendedMsgItem message={messages} index={len-index}/>
          <hr className="received-msg-line" />
          <br />
          <br />
        </MsgList>
      </div>
    </div>
  );
}

export default SendMsgList;