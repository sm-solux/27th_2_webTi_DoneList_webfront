import React, { Component } from "react";
import NavAfterLogin from "./NavAfterLogin_blue";
import UnderBar from "./UnderBar";
import "../styles/AllAboutMsg.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SendedMsgItem({ message, index }) {
  return (
    <div>
        <Link to={`/msgs-from-me-detail/${message._id}`}>
      <div className="received-msg-items">
        <span className="received-msg-id">{index}</span>
        <span className="received-msg-title">{message.doneId.title}</span>
        <span className="received-msg-userId">{message.receiveId.Nickname}</span>
        <span className="received-msg-dateString">{message.time}</span>
      </div></Link>
    </div>
  );
}

export default SendedMsgItem;