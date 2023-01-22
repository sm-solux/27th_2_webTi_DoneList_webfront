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
                <input className="search-box"
                type="search"
                placeholder="  해시태그 검색"></input>
                <ul>
                    <li><button className="topBar" onClick={toHome}>홈</button></li>
                    <li><button className="topBar" onClick={toLogin}>로그인</button></li>
                    <li><button className="topBar" onClick={toJoin}>회원가입</button></li>
                    <Link to="/how-to-use"><li><button className="topBar" onClick={howtoUse}>이용방법</button></li></Link>
                </ul>
                </nav>   
            </div>
        );
	}
}

export default NavBeforeLogin;