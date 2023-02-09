import '../styles/ModifyMyInfo.css';
import logo from "../imgs/webTi_logo.png";
import NavAfterLogin from "../components/NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";

// 내 정보 수정화면.

function ModifyMyInfo () {

    const [inputNick, setInputNick] = useState(sessionStorage.getItem('userNick'));
    const [inputPw, setInputPw] = useState(sessionStorage.getItem('userPw'));
    const [inputPwc, setInputPwc] = useState(sessionStorage.getItem('userPw'));
    
    const handleInputNick = (e) => {
        setInputNick(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleInputPwc = (e) => {
        setInputPwc(e.target.value)
    }
    const history = useNavigate();

    // 세션스토리지에서 유저 정보 가져와 placeholder로 띄우기 -> 완.
    // 이때, pw == pwc 인 것 확인해야 함.
    // sessionStorage에 변경된 유저 정보 저장.

    const onClickModify = async () => {

        const preId = sessionStorage.getItem('userId');
        console.log(preId);
        if (inputPw != inputPwc) {
            alert("비밀번호가 서로 다릅니다.");
        }
        else {
            try {
                await axios.patch('/member/'+ preId +"/", {
                    Nickname: inputNick,
                    Password: inputPw,
            }) .then((response) => {
                sessionStorage.removeItem('userNick')
                sessionStorage.setItem('userNick', inputNick);
                sessionStorage.removeItem('userPw')
                sessionStorage.setItem('userPw', inputPw)
                history(`/mypage`);
            })} catch(e) {
                console.log(e);
            }
        }
    }
    
    useEffect(() => {

    }, [])
    

    return (
        <div>
        <NavAfterLogin/>
        <div className="mod-main">
            <div className="mod-imgs">
                <div className="mod-container-image">
                <img src={logo} alt="logo" className="mod-logo"/>
                </div>
            </div>
            
            <div className="mod-sub-main">            
                <div className='mod-first-input'>
                    <div className='mod-v-line'></div>
                    <span className="mod-text-nickname">nickname</span>
                    <input className="mod-user-nickname" value={inputNick} onChange={handleInputNick} type="text" placeholder={sessionStorage.getItem('userNick')}/>
                </div>
                
                <div className="mod-second-input">
                    <div className="mod-v-line2"></div>
                    <span className="mod-text-id">id</span>
                    <input className="mod-user-id" type="text" placeholder={sessionStorage.getItem('userId')} readOnly/>
                </div>

                <div className='mod-third-input'>
                    <div className='mod-v-line3'></div>
                    <span className="mod-text-pwd">password</span>
                    <input className="mod-user-pwd" onChange={handleInputPw} type="password" placeholder="protected"/>
                </div>
                
                <div className="mod-fourth-input">
                    <div className="mod-v-line4"></div>
                    <span className="mod-text-cpwd">confrim pw</span>
                    <input className="mod-user-cpwd" onChange={handleInputPwc} type="password" placeholder="protected"/>
                </div>

                <div className="mod-fiveth-input">
                    <div className="mod-v-line5"></div>
                    <span className="mod-text-ad-year">입학년도</span>
                    <input className="mod-user-ad-year" type="text" placeholder={sessionStorage.getItem('userAdYear')} readOnly/>
                </div>
                
                <div className="mod-button">
                    <button className="mod-button-Ui" onClick={onClickModify}>MODIFY</button>
                </div>
            </div>
        </div>
        <UnderBar/>
    </div>
    );
}

export default ModifyMyInfo;