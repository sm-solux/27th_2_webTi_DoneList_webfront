import { useEffect, useState, useRef } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import "../styles/WriteDetail.css"
import Period from "../components/Period_write";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WriteInfo_title = styled.div`
float:left;
font-family: "BlackOpsOne";
color: white;
background-color: ${props => props.color || "#BA6AA4"};
width: 500px;
height: 40px;
line-height: 40px;
border-radius: 20px;
font-size: 25px;
text-align: center;
margin-top: 35px;
margin-left: 185px;
`;


const WriteQ1_question = styled.div`
float:left;
margin-top: 110px;
margin-left: -500px;
font-family: "BlackOpsOne";
font-size: 20px;
color: ${props => props.color || "#BA6AA4"};
`;

const WriteQ1_area = styled.textarea`
border-radius: 10px;
    width: 980px;
    height: 60px;
    padding: 10px;
    background-color: transparent;
    border-color: ${props => props.color || "#BA6AA4"};
    border-width: 3px;
    margin-left: 185px;
    margin-top: 65px;
    resize: none;
    @font-face {
    font-family: 'han-Regular';
    src: url("../fonts/NotoSansKR-Regular.otf") format('truetype');
}
font-family: 'han-Regular';
`;

const WriteQ2_question = styled.div`
margin-top: 30px;
margin-left: 185px;
font-family: "BlackOpsOne";
font-size: 20px;
color:  ${props => props.color || "#BA6AA4"};
`;

const WriteQ2_area = styled.textarea`
border-radius: 10px;
width: 980px;
height: 80px;
padding: 10px;
background-color: transparent;
border-color: ${props => props.color || "#BA6AA4"};
border-width: 3px;
margin-left: 185px;
margin-top: 10px;
resize: none;
@font-face {
    font-family: 'han-Regular';
    src: url("../fonts/NotoSansKR-Regular.otf") format('truetype');
}
font-family: 'han-Regular';
`;

const WriteQ3_question = styled.div`
margin-top: 30px;
    margin-left: 185px;
    font-family: "BlackOpsOne";
    font-size: 20px;
    color:  ${props => props.color || "#BA6AA4"};
`;

const WriteQ3_area = styled.textarea`
    border-radius: 10px;
    width: 980px;
    height: 80px;
    padding: 10px;
    background-color: transparent;
    border-color: ${props => props.color || "#BA6AA4"};
    border-width: 3px;
    margin-left: 185px;
    margin-top: 10px;
    resize: none;
    @font-face {
    font-family: 'han-Regular';
    src: url("../fonts/NotoSansKR-Regular.otf") format('truetype');
}
font-family: 'han-Regular';
`;

function WriteDetail_pink() {


    const history = useNavigate();

    const handleChangeState = (e) => {
        e.preventDefault();
        
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    {/*const movePage = useNavigate();
    function writePost(){
        movePage('/visit-detail');
        console.log('move to here',state);
    }*/}

    // post
    const handleSubmit = async (e) => {
        e.preventDefault();

        // setState((prevState) => ({
        //     ...prevState,
        //     Activity: activityTagActive,
        //     Major: majorTagActive,
        // }))

            console.log(state);


        // writePost();
        // activity, major (????????????) ??? ?????????
        // ?????? ?????? ??? ??? ?????? undefined??? ????????? -> ??????
        try {
            await axios.post('/donelist/', state)
            .then((response) => {
                sessionStorage.removeItem('DLColor')
                sessionStorage.removeItem('Title')
                sessionStorage.removeItem('finishDate')
                sessionStorage.removeItem('startDate')
                history('/main')
            })} catch(e) {
                console.log(e);
            }
    }

    let activityTag = ["# ?????????", "# ?????????", "# ??????", "# ????????????", "# ??????", "# ????????????"];
    let majorTag = ["# ????????????", "# ????????????", "# ????????????", "# ????????????", "# ????????????", "# ???????????????", "# ??????"];

    let [activityTagActive, setactivityTagActive] = useState("");
    let [majorTagActive, setmajorTagActive] = useState("");

    const toggleActive1 = (e) => {
        setactivityTagActive(e.target.value);
        setState({
            ...state,
            Activity: e.target.value,
        });
            e.preventDefault();
    };

    const toggleActive2 = (e) => {
        setmajorTagActive(e.target.value);
        setState({
            ...state,
            Major: e.target.value,
        });
        e.preventDefault();
    };

    const [state, setState] = useState({
        Whatis:"",
        Whatdid:"",
        Episode:"",
        title: sessionStorage.Title,
        startDate: sessionStorage.startDate,
        finishDate: sessionStorage.finishDate,
        Major: majorTagActive,
        Activity: activityTagActive,
        Colorcode: sessionStorage.DLColor,
        userId: sessionStorage.userId
        }
    );

    return (
        <form>
            <div>
            <WriteInfo_title color="#BA6AA4">{sessionStorage.Title}</WriteInfo_title>
            <Period  start={sessionStorage.startDate} finish={sessionStorage.finishDate}/>
            </div>
            <div>
            <WriteQ1_question color="#BA6AA4">WHAT IS ? </WriteQ1_question>
            <WriteQ1_area name="Whatis" color="#BA6AA4"
            value={state.Whatis} onChange={handleChangeState}
            maxLength={200} placeholder="?????? ?????????????????? ????????? ??????????????????"></WriteQ1_area>
            </div>
            <div>
            <WriteQ2_question color="#BA6AA4">WHAT DID YOU DO ? </WriteQ2_question>
            <WriteQ2_area name="Whatdid" color="#BA6AA4"
            value={state.Whatdidyoudo} onChange={handleChangeState}
            maxLength={350} placeholder="??????????????? ?????? ?????? ?????????(?????? ?????? ???) ??????????????????"></WriteQ2_area>
            </div>
            <div>
            <WriteQ3_question color="#BA6AA4">EPISODE or ADVICE ? </WriteQ3_question>
            <WriteQ3_area name="Episode" color="#BA6AA4"
            value={state.Episode} onChange={handleChangeState}
            maxLength={350} placeholder="??? ????????? ???????????? ?????? ?????? ????????? ????????????, ????????? ?????? ????????? ?????????????????? ??? ???????????? ??????????????????"></WriteQ3_area>
            </div>
            <div className="WritePink-letsHashtag" >Hashtag</div>
            <div className="WritePink-hashtag-activity">
        {activityTag.map((item1,idx1) => {
        return (
            <>
            <button key={idx1}
            value={item1}
            className={"WritePink-hashtagBtn-act" + (item1 == activityTagActive ? "-active" : "")}
            onClick={toggleActive1}
            >
            {item1}
            </button>
        </>
        );
    })}
    </div>
    <div className="WritePink-hashtag-major">
    {majorTag.map((item2, idx2) => {
        return (
            <>
            <button key={idx2} 
            value={item2}
            className={"WritePink-hashtagBtn-major" + (item2 == majorTagActive ? "-active" : "")}
            onClick={toggleActive2}
            >
            {item2}
            </button>
        </>
        );
    })}
    </div>
    <div>
        <button className="write-complete-pink" onClick={handleSubmit}>COMPLETE</button>
    </div>
            </form>
    );
}

export default WriteDetail_pink;