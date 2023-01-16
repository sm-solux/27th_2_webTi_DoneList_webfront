import { useEffect, useState } from "react";
import React, {Component} from 'react';
import "./styles/home.css"
import NavBeforeLogin from "./components/NavBeforeLogin";

const Home = (props) => {
    return (
        <div>
        <NavBeforeLogin/>
            <div className="main">
                <div className="text">
                <h2 className="slogan">What Have You Done?
                <br/>Let's Talk About It!
                </h2>
                <h1 className="title">Done List</h1>
                <h3 className="introduce1">대학생 활동 이력 연표(timeline) 제작/공유 웹, 'Done List'입니다.</h3>
                <h3 className="introduce2">자신의 대학생활을 기록하고 다른 사람들과 공유해보세요.</h3>
                <h3 className="introduce3">내가 걸어온 길을 정리해서 기록해보는 것만으로도 큰 힘이 됩니다.</h3>
                <br/><br/>
                </div>
                <div className="logoImage">
                    <img src="./webTi_logo.png"></img>
                </div>
                </div>
                <hr className="real-line"/>
                <p className="circle1"></p><p className="circle2"></p><p className="circle3"></p>      
            </div>
        );
    }

export default Home;