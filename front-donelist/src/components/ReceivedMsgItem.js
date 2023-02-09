import React, { Component } from "react";
import NavAfterLogin from "./NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import "../styles/AllAboutMsg.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ReceivedMsgItem({ message, index }) {
  return (
    <div>
        <Link to={`/msgs-to-me-detail/${message._id}`}>
      <div className="received-msg-items">
        <span className="received-msg-id">{index}</span>
        <span className="received-msg-title">{message.doneId.title}</span>
        <span className="received-msg-userId">{message.sendId.Nickname}</span>
        <span className="received-msg-dateString">{message.time}</span>
      </div></Link>
    </div>
  );
}

export default ReceivedMsgItem;