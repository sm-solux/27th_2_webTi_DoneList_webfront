import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {Component} from 'react';
import NavBeforeLogin from "./components/NavBeforeLogin";
import MyPage from './routes/MyPage.js';
import Home from './routes/Home.js';
import HowtoUse from './routes/HowtoUse.js';
import LoginUi from "./routes/LoginUi";
import JoinPage from "./routes/JoinPage";
import ModifyMyInfo from "./routes/ModifyMyInfo";
import BeforeModifyMyInfo from "./routes/BeforeModifyMyInfo";

function App(props) {
return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/mypage" element={<MyPage />}/>
    <Route path="/how-to-use" element={<HowtoUse />}/>
    <Route path="/login-page" element={<LoginUi />}/>
    <Route path="/join-page" element={<JoinPage />}/>
    <Route path="/modify-my-info-page" element={<ModifyMyInfo />}/>
    <Route path="/before-modify-my-info-page" element={<BeforeModifyMyInfo />}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;
