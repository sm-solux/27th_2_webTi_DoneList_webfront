import { useEffect, useState } from "react";
import React, {Component} from 'react';
import home from "../styles/home.css";
import UnderBar from "../components/UnderBar";
import NavBeforeLogin from "../components/NavBeforeLogin";
import NavAfterLogin from "../components/NavAfterLogin_blue";
import logo from "../imgs/webTi_logo.png";
import { Link } from "react-router-dom";

const Home = (props) => {

    
    return (
        <div>
        {sessionStorage.length > 0 ? <NavAfterLogin/> : <NavBeforeLogin />}
        <div className="home-main">
            <div className="home-text">
                <h2 className="slogan">What Have You Done?
                <br/>Let's Talk About It!
                </h2>
                {sessionStorage.length >0 ? <Link to="/main"  style={{ textDecoration: "none" }}><h1 className="home-title">Done List</h1></Link> : <Link to="/login-page"  style={{ textDecoration: "none" }}><h1 className="home-title">Done List</h1></Link>}
                <h3 className="introduce1">대학생 활동 이력 연표(timeline) 제작/공유 웹, 'Done List'입니다.</h3>
                <h3 className="introduce2">자신의 대학생활을 기록하고 다른 사람들과 공유해보세요.</h3>
                <h3 className="introduce3">내가 걸어온 길을 정리해서 기록해보는 것만으로도 큰 힘이 됩니다.</h3>
                <br/><br/>
            </div>
            <div className="home-img">
            <div className="container-image">
            <img src={logo} alt="logo" className="home-logoImage"/>
            </div>
        </div>
        </div>
        <UnderBar />
        </div>

    )
}

export default Home;