import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {Component} from 'react';
import NavBeforeLogin from "./components/NavBeforeLogin";
import MyPage from './routes/MyPage.js';
import Home from './routes/Home.js';
import HowtoUse from './routes/HowtoUse.js';
import LoginUi from "./routes/LoginUi";
import JoinPage from "./routes/JoinPage";

function App(props) {
return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/mypage" element={<MyPage />}/>
    <Route path="/how-to-use" element={<HowtoUse />}/>
    <Route path="/login-page" element={<LoginUi />}/>
    <Route path="/join-page" element={<JoinPage />}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;
