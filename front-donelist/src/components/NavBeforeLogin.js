import React, {Component} from 'react';
import "../styles/fixedNav.css"
import { Link } from 'react-router-dom';

class NavBeforeLogin extends Component {
	render(){
        function toHome() {
            console.log("Go to home!");
        }
        function toLogin() {
            console.log("로그인화면으로");
        }
        function toJoin() {
            console.log("회원가입화면으로");
        }
        function howtoUse() {
            console.log("이용방법");
        }

        return (
            <div>
            <nav className="nav1">
                <Link to="view-other-donelists"><button className="go-to-see-all"> {'>'} View other DoneLists
                </button></Link>
                <ul>
                    <Link to='/'><li><button className="topBar" onClick={toHome}>Home</button></li></Link>
                    <Link to="/login-page"><li><button className="topBar" onClick={toLogin}>Login</button></li></Link>
                    <Link to="/join-page"><li><button className="topBar" onClick={toJoin}>Join</button></li></Link>
                    <Link to="/how-to-use"><li><button className="topBar" onClick={howtoUse}>About</button></li></Link>
                </ul>
                </nav>   
            </div>
        );
	}
}

export default NavBeforeLogin;