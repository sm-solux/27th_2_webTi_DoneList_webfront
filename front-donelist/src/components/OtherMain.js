import OtherDL from '../imgs/exDonelist.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/OtherMain.css'

function OtherMain() {

    const CreateDL = styled.div`
    position: absolute;
    width: 100px;
    height: 40px;
    background-color: #BA6AA4;
    border-radius: 50px;
    margin-top: 0;
    margin-left: 0;
    z-index: 999;
`;

    const history = useNavigate();

    const OnClickDL =() => {
        history('/visit-detail/17')
    }

    return (
        <div>
        <div>
        <img className="image-othermain" src={OtherDL} onClick={OnClickDL}></img>
        </div>
        </div>
    )
}

export default OtherMain;
