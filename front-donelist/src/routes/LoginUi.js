import '../styles/LoginUi.css';
import logo from "../imgs/webTi_logo.png";
import NavBeforeLogin from "../components/NavBeforeLogin";
import UnderBar from "../components/UnderBar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

// 로그인 페이지.

function LoginUi() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
  
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const history = useNavigate();
    const onClickLogin = async () => {
        const users = await axios.get('/member/' + inputId + "/").then((res) => {return res.data});
        
        console.log(users)
    
        try{
          
        if (users.status === 404) {
          alert("아이디 존재하지 않거나 바르지 않습니다.");
        } else if (users.Password !== inputPw) {
          alert("비말번호가 바르지 않습니다.");
        }
        else {
          sessionStorage.setItem('userNick', users.Nickname)
          sessionStorage.setItem('userId', users.userId)
          sessionStorage.setItem('userAdYear', users.Year)
          sessionStorage.setItem('userPw', users.Password)
          history(`/main`);
    
        }
                
        } catch (error) {
    
          //실패하면 throw new Error("") 값 출력
        window.alert(error);
      }
    }
    
    

    return (
    <div>
    <NavBeforeLogin/>
    <div className="login-main">
    <div className="login-sub-main">
        <div className="login-imgs">
            <div className="login-container-image">
            <img src={logo} alt="logo" className="login-logo"/>
            </div>
        </div>
            
        <div className='login-first-input'>
            <div className='login-v-line'></div>
            <span className="login-text-id">ID</span>
            <input className="login-user-id" value={inputId} onChange={handleInputId} type="text"/>
        </div>
        
        <div className="login-second-input">
            <div className="login-v-line2"></div>
            <span className="login-text-pwd">Password</span>
            <input className="login-user-pwd" value={inputPw} onChange={handleInputPw} type="password"/>
        </div>
        
        <div className="login-button">
            <button className="login-button-Ui" onClick={onClickLogin}>Login</button>
        </div>
    </div>
    </div>
    <UnderBar/>
    </div>
    );
}

export default LoginUi;