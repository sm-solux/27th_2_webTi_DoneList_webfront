import { useEffect, useState } from "react";
import React, {Component} from 'react';
import home from "../styles/home.css";
import UnderBar from "../components/UnderBar";
import NavBeforeLogin from "../components/NavBeforeLogin";
import logo from "../imgs/webTi_logo.png";
import Initial_donelist from './Initial_donelist'

const Home = (props) => {
    return (
        // <div>
        // <NavBeforeLogin/>
        // <div className="main">
        //     <div className="text">
        //         <h2 className="slogan">What Have You Done?
        //         <br/>Let's Talk About It!
        //         </h2>
        //         <h1 className="title">Done List</h1>
        //         <h3 className="introduce1">대학생 활동 이력 연표(timeline) 제작/공유 웹, 'Done List'입니다.</h3>
        //         <h3 className="introduce2">자신의 대학생활을 기록하고 다른 사람들과 공유해보세요.</h3>
        //         <h3 className="introduce3">내가 걸어온 길을 정리해서 기록해보는 것만으로도 큰 힘이 됩니다.</h3>
        //         <br/><br/>
        //     </div>
        //     <div className="img">
        //     <div className="container-image">
        //     <img src={logo} alt="logo" className="logoImage"/>
        //     </div>
        // </div>
        // </div>
        // <UnderBar />
        // </div>
        <div>

<Initial_donelist />

        </div>
    )
}

export default Home;