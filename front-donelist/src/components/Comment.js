import { useEffect, useState } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import "../styles/Btns.css";

function Comment() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const onChange = (event) => setComment(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        if(comment === "") {
            return;
        }
        setComments(currentArray => [comment, ...currentArray]);
        localStorage.setItem("comment", comment);
        setComment("");
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <div><input onChange={onChange} value={comment} type="text" className="comment-area"></input></div>
            <button className="send-cmt-btn">ENTER</button>
            </form>
            <ul className="display-comments">
            {comments.map((item, index) => (<li className="cmtLi" key={index}>
                <p className="commentNick">{sessionStorage.userNick}</p>
                <p className="commentitem">{item}</p>
                <hr/>

                </li>))}

            </ul>
        </div>
    );
}

export default Comment;