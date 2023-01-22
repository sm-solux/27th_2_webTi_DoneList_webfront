import '../styles/ModifyMyInfo.css';
import logo from "../imgs/webTi_logo.png";
import NavAfterLogin from "../components/NavAfterLogin";
import UnderBar from "../components/UnderBar";

function ModifyMyInfo () {
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
                    <input className="mod-user-nickname" type="text" placeholder="빠타"/>
                </div>
                
                <div className="mod-second-input">
                    <div className="mod-v-line2"></div>
                    <span className="mod-text-id">id</span>
                    <input className="mod-user-id" type="text" placeholder='kimbutter'/>
                </div>

                <div className='mod-third-input'>
                    <div className='mod-v-line3'></div>
                    <span className="mod-text-pwd">password</span>
                    <input className="mod-user-pwd" type="password" placeholder='12345678'/>
                </div>
                
                <div className="mod-fourth-input">
                    <div className="mod-v-line4"></div>
                    <span className="mod-text-cpwd">confrim pw</span>
                    <input className="mod-user-cpwd" type="password" placeholder='12345678'/>
                </div>

                <div className="mod-fiveth-input">
                    <div className="mod-v-line5"></div>
                    <span className="mod-text-ad-year">입학년도</span>
                    <input className="mod-user-ad-year" type="text" placeholder='2021'/>
                </div>
                
                <div className="mod-button">
                    <button className="mod-button-Ui">SIGN UP</button>
                </div>
            </div>
        </div>
        <UnderBar/>
    </div>
    );
}

export default ModifyMyInfo;