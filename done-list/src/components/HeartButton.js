import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeartImg from "../imgs/fullheart.png";
import EmptyHeartImg from "../imgs/emptyheart.png";


class HeartButton extends React.Component {
    render(){
        return(
            <div className="icons-list">
                <img src={HeartImg} />
                <img src={EmptyHeartImg} />
            </div>
        )
};
}

export default HeartButton;