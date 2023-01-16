import '../styles/JoinPage.css';
import logo from "../imgs/webTi_logo.png";
import NavBeforeLogin from "../components/NavBeforeLogin";
import UnderBar from "../components/UnderBar";

function JoinPage () {
    return (
        <div>
        <NavBeforeLogin/>
        <div className="main">
            <div className="imgs">
                <div className="container-image">
                <img src={logo} alt="logo" className="logo"/>
                </div>
            </div>
            
            <div className="sub-main">            
                <div className='first-input'>
                    <div className='v-line'></div>
                    <span className="text-nickname">nickname</span>
                    <input className="user-nickname" type="text"/>
                </div>
                
                <div className="second-input">
                    <div className="v-line2"></div>
                    <span className="text-id">id</span>
                    <input className="user-id" type="text"/>
                </div>

                <div className='third-input'>
                    <div className='v-line3'></div>
                    <span className="text-pwd">password</span>
                    <input className="user-pwd" type="password"/>
                </div>
                
                <div className="fourth-input">
                    <div className="v-line4"></div>
                    <span className="text-cpwd">confrim pw</span>
                    <input className="user-cpwd" type="password"/>
                </div>

                <div className="fiveth-input">
                    <div className="v-line5"></div>
                    <span className="text-ad-year">입학년도</span>
                    <input className="user-ad-year" type="text"/>
                </div>
                
                <div className="sign-up-button">
                    <button className="sign-up-button-Ui">SING UP</button>
                </div>
            </div>
        </div>
        <UnderBar/>
    </div>
    );
}

export default JoinPage;