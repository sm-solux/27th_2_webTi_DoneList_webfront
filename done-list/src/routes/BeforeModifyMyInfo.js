import '../styles/BeforeModifyMyInfo.css';
import logo from "../imgs/webTi_logo.png";
import NavAfterLogin from "../components/NavAfterLogin";
import UnderBar from "../components/UnderBar";

function BeforeModifyMyInfo() {
return (
    <div>
    <NavAfterLogin/>
    <div className="b-mod-main">
    <div className="b-mod-sub-main">
        <div className="b-mod-imgs">
            <div className="b-mod-container-image">
            <img src={logo} alt="logo" className="b-mod-logo"/>
            </div>
        </div>
        <div className='b-mod-first-input'>
            <div className='b-mod-v-line'></div>
            <span className="b-mod-text-id">ID</span>
            <input className="b-mod-user-id" type="text"/>
        </div>
        
        <div className="b-mod-second-input">
            <div className="b-mod-v-line2"></div>
            <span className="b-mod-text-pwd">Password</span>
            <input className="b-mod-user-pwd" type="password"/>
        </div>
        
        <div className="b-mod-button">
            <button className="b-mod-button-Ui">정보 수정</button>
        </div>
    </div>
    </div>
    <UnderBar/>
    </div>
);
}

export default BeforeModifyMyInfo;