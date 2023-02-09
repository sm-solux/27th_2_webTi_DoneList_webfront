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
import Main from './routes/Main';
import ModalCreateDL from './components/ModalCreateDL';
import WriteDetail from './routes/WriteDetail';
import VisitDetail from './routes/VisitDetail';
import YearMonthSelectBox from './components/YearMonthSelectBox_start';
import ReceivedMsgs from './routes/ReceivedMsgTemplate';
import MessageTest from './routes/MessageTest';
import SendMsgs from './routes/SendMsgTemplate';
import DonelistBar from './components/DonelistBar';
import ShowAllDoneLists from './routes/ShowAllDoneLists';
import { useEffect } from 'react';
import Message from './routes/Message_receive';
import Messagesend from './routes/Message_send.js'
import OtherMain from './components/OtherMain.js'


const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin:0;
    padding:0;
    background-color : #EAE9D5;
    @font-face {
    font-family: 'han-Bold';
    src: url("../fonts/NotoSansKR-Bold.otf") format('truetype');
}
  @font-face {
    font-family: 'han-Regular';
    src: url("../fonts/NotoSansKR-Regular.otf") format('truetype');
}
  }
`;

function App() {


  useEffect(() => {
    
    
  }, [])

  
  return (
    <div>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mypage/" element={
              <MyPage />
              }/>
        <Route path="/how-to-use" element={<HowtoUse />}/>
        <Route path="/login-page" element={<LoginUi />}/>
        <Route path="/join-page" element={<JoinPage />}/>
        <Route path="/modify-my-info-page" element={<ModifyMyInfo />}/>
        <Route path="/before-modify-my-info-page" element={<BeforeModifyMyInfo />}/>
        {/*<Route path="/liked-list" element={<LikedList/>}/>*/}
        <Route path="/main" element={<Main />}/>
        {/* <Route path="/main/:userId" element={<Main/>}/> */}
        <Route path="/write-detail/:DLcolor" element={<WriteDetail/>}/>
        <Route path="/visit-detail/:doneId" element={<VisitDetail/>}/>
        {/* <Route path="/cdlw-page" element={<ModalCreateDL />}/> */}
        {/* <Route path="/selectbox-page" element={<YearMonthSelectBox />}/> */}
        <Route path="/msgs-to-me" element={<ReceivedMsgs />}/>
        <Route path="/msgs-to-me-detail/:msgid" element={<Message />}/>
        <Route path="/msgs-from-me" element={<SendMsgs />}/>
        <Route path="/msgs-from-me-detail/:msgid" element={<Messagesend />}/>
        {/* <Route path="/donelistbar" element={<DonelistBar />}/> */}
        <Route path="/view-other-donelists" element={<ShowAllDoneLists/>}/>
        <Route path="/other-main" element={<OtherMain/>}/>
  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
