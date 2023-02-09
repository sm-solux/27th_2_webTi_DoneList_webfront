import { useEffect, useState } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import moment from 'moment';

const Info_period = styled.div`
position: absolute;
float:left;
margin-top: 55px;
margin-left: 700px;
@font-face {
    font-family: 'han-Regular';
    src: url("../fonts/NotoSansKR-Regular.otf") format('truetype');
}
font-family: 'han-Regular';
font-size: 15px;
`;

function Period({start, finish}) {
    const startDate = moment(start).format('YYYY.MM')
    const finishDate = moment(finish).format('YYYY.MM')

    useEffect(() => {
    }, [])


    return (
        <div>
        <Info_period>
            {startDate} ~ {finishDate}
        </Info_period>
        </div>
    );
}

export default Period;