import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import React, {useState, Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBeforeLogin from "./components/NavBeforeLogin";
import MyPage from './routes/MyPage.js';
import Home from './routes/home.js';
import HowtoUse from './routes/HowtoUse.js';
import LoginUi from "./routes/LoginUi";
import JoinPage from "./routes/JoinPage";
import ModifyMyInfo from "./routes/ModifyMyInfo";
import BeforeModifyMyInfo from "./routes/BeforeModifyMyInfo";
import LikedList from "./components/LikedList";
import Initial_DL from './routes/Initial_donelist';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin:0;
    padding:0;
    background-color : #EAE9D5;
    overflow-x: scroll;
  }
`;

function App() {
  const [liked, setLiked] = useState([]);
  return (
    <div>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mypage" element={
              <MyPage liked={liked} setLiked={setLiked} />
              }/>
        <Route path="/how-to-use" element={<HowtoUse />}/>
        <Route path="/login-page" element={<LoginUi />}/>
        <Route path="/join-page" element={<JoinPage />}/>
        <Route path="/modify-my-info-page" element={<ModifyMyInfo />}/>
        <Route path="/before-modify-my-info-page" element={<BeforeModifyMyInfo />}/>
        <Route path="/liked-list" element={<LikedList/>}/>
        <Route path="/main" element={<Initial_DL />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
