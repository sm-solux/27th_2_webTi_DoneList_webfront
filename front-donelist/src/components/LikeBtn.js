import { useEffect, useState } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import EmptyHeartImg from "../imgs/emptyheart.png";
import FullHeartImg from "../imgs/fullheart.png";
import "../styles/Btns.css";
import LikedList from "./LikedList";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LikeBtn = ({doneId}) => {

    const [state, setState] = useState(false)


    const onClick = async (e) => {
        e.preventDefault();

        if (state === false) {
            setState(true);

            await axios.post('/like/', {userId: sessionStorage.userId, doneId: doneId});

        }

        else {
            setState(false);
            await axios.delete('/like/'+heartid)
        }
    }

    
    const [heartid, setHeartid] = useState("");

    const heartlists = async () => {
        const hearts = await axios.get('/like/').then((res) => { return res.data });  ///hearts에 _id있음


        let heartname = hearts.find((item) => item.userId == sessionStorage.userId && item.doneId == doneId)
        if (heartname !== undefined) {
          setHeartid(heartname._id)
          setState(true);
        }
      }

      useEffect(() => {
        heartlists();

      }, )

    return (
        <React.Fragment>
        <div>
            <div>
            {state ?
            <button className="heartBtn" onClick={onClick}><img width="47px" src={FullHeartImg} /></button>
            : <button className="heartBtn" onClick={onClick}><img width="47px" src={EmptyHeartImg} /></button>}
            <div className="liked">좋아요</div>
            </div>
        </div>
        </React.Fragment>
    );
}


export default LikeBtn;