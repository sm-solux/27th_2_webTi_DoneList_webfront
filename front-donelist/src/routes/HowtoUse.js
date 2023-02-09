import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {Component} from 'react';
import NavAfterLogin from "../components/NavAfterLogin_blue";
import NavBeforeLogin from "../components/NavBeforeLogin";
import UnderBar from "../components/UnderBar";
import introduce1 from "../imgs/webTi_logo.png";
import introduce2 from "../imgs/donelist_mini.png";
import "../styles/HowtoUse.css"

function HowtoUse() {
    return (
        <div>
        {sessionStorage.length > 0 ? <NavAfterLogin/> : <NavBeforeLogin />}
        <div className="howtouse-container1">
            <div><img src={introduce1} alt="introduce1" className="howtouse-logoImg"/></div>
            <div className="howtouse-Team">Team WebTi</div>
            <div className="howtouse-Title">대학생활 아카이빙 웹서비스, "던리스트" 를 제공하고 있습니다.</div>
            <div className="howtouse-way">
                상단바를 통해 회원가입 및 로그인 진행 후 이용 가능한 서비스입니다.
            </div>
        </div>
        <div className="howtouse-container2">
            <div><img src={introduce2} alt="introduce2" className="howtouse-DLimg"/></div>
            <div className="howtouse-tomakeTitle">How To Enjoy DoneList</div>
            <div className="howtouse-tomake-1">1. 로그인 진행 후 던리스트 메인 화면으로 이동합니다. 
            마이페이지를 통해서도 이동 가능합니다.</div>
            <div className="howtouse-tomake-2-1">2. 오른쪽 하단에서 '+' 버튼을 클릭해 원하는 색상의 bar를 선택하고, 기록하고자 하는 </div>
            <div className="howtouse-tomake-2-2">활동의 이름과 활동한 기간을 기입하면 메인페이지에 해당 bar가 생성됩니다.</div>
            <div className="howtouse-tomake-3-1">3. 메인페이지에서 해당 바를 클릭하면, 상세 내용을 작성하고 해시태그를 달 수 있는 페이지로 이동합니다. </div>
            <div className="howtouse-tomake-3-2">간단한 틀에 기반하여 자신의 활동을 소개해주세요.</div>
            <div className="howtouse-tomake-4">4. 다른 사람의 던리스트를 구경하고 좋아요 및 쪽지, 댓글 기능을 통해 소통할 수 있습니다.</div>
        </div>
        <div><UnderBar/></div>
        </div>
    );  
}

export default HowtoUse;