import '../styles/JoinPage.css';
import logo from "../imgs/webTi_logo.png";
import NavBeforeLogin from "../components/NavBeforeLogin";
import UnderBar from "../components/UnderBar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// 회원가입 페이지

function JoinPage () {

    const [inputNick, setInputNick] = useState();
    const [inputId, setInputId] = useState();
    const [inputPw, setInputPw] = useState();
    const [inputPwc, setInputPwc] = useState();
    const [inputAdYear, setInputAdYear] = useState();
    

    const handleInputNick = (e) => {
        setInputNick(e.target.value)
    }
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleInputPwc = (e) => {
        setInputPwc(e.target.value)
    }
    const handleInputAdYear = (e) => {
        setInputAdYear(e.target.value)
    }
    const history = useNavigate();


    const onClickJoin = async () => {
        if (inputNick==undefined || inputId===undefined || inputPw===undefined || inputPwc===undefined || inputAdYear===undefined) {
            alert("빈칸이 있습니다.");
        }
        else if (inputPw != inputPwc) {
            alert("비밀번호가 서로 다릅니다.");
        }
        else {
            try {
                await axios.post('/member/', {
                    Nickname: inputNick,
                    userId: inputId,
                    Password: inputPw,
                    Year: inputAdYear,
            }) .then((response) => {
                console.log(response.status);
                console.log(response.data);
                sessionStorage.setItem('userNick', inputNick);
                sessionStorage.setItem('userId', inputId);
                sessionStorage.setItem('userAdYear', inputAdYear);
                history(`/main`)
            })} catch(e) {
                console.log(e);
            }
        }
    }
    return (
        <div>
        <NavBeforeLogin/>
        <div className="join-main">
            <div className="join-imgs">
                <div className="join-container-image">
                <img src={logo} alt="logo" className="join-logo"/>
                </div>
            </div>
            
            <div className="join-sub-main">            
                <div className='join-first-input'>
                    <div className='join-v-line'></div>
                    <span className="join-nickname">nickname</span>
                    <input className="join-input-nickname" value={inputNick} onChange={handleInputNick} type="text"/>
                </div>
                
                <div className="join-second-input">
                    <div className="join-v-line2"></div>
                    <span className="join-id">id</span>
                    <input className="join-input-id" value={inputId} onChange={handleInputId} type="text"/>
                </div>

                <div className='join-third-input'>
                    <div className='join-v-line3'></div>
                    <span className="join-pwd">password</span>
                    <input className="join-input-pwd" value={inputPw} onChange={handleInputPw} type="password"/>
                </div>
                
                <div className="join-fourth-input">
                    <div className="join-v-line4"></div>
                    <span className="join-cpwd">confrim pw</span>
                    <input className="join-input-cpwd" value={inputPwc} onChange={handleInputPwc} type="password"/>
                </div>

                <div className="join-fiveth-input">
                    <div className="join-v-line5"></div>
                    <span className="join-ad-year">입학년도</span>
                    <input className="join-input-ad-year" value={inputAdYear} onChange={handleInputAdYear} type="text"/>
                </div>
                
                <div className="sign-up-button">
                    <button className="sign-up-button-Ui" onClick={onClickJoin}>SIGN UP</button>
                </div>
            </div>
        </div>
    <UnderBar/>
    </div>
    );
}

export default JoinPage;