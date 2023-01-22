import '../styles/LoginUi.css';
import logo from "../imgs/webTi_logo.png";
import NavBeforeLogin from "../components/NavBeforeLogin";
import UnderBar from "../components/UnderBar";

function LoginUi() {
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
            <input className="login-user-id" type="text"/>
        </div>
        
        <div className="login-second-input">
            <div className="login-v-line2"></div>
            <span className="login-text-pwd">Password</span>
            <input className="login-user-pwd" type="password"/>
        </div>
        
        <div className="login-button">
            <button className="login-button-Ui">Login</button>
        </div>
    </div>
    </div>
    <UnderBar/>
    </div>
    );
}

export default LoginUi;