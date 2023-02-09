import React, {Component} from 'react';
import "../styles/fixedNav.css"

class NavAfterLogin extends Component {
	render(){
        function toHome() {
            console.log("Go to home!");
        }
        function toMyPage() {
            console.log("마이페이지로");
        }
        function toLogout() {
            console.log("로그아웃하다");
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
                    <li><button className="topBar" onClick={toMyPage}>마이페이지</button></li>
                    <li><button className="topBar" onClick={toLogout}>로그아웃</button></li>
                    <li><button className="topBar" onClick={howtoUse}>이용방법</button></li>
                </ul>
                </nav>   
            </div>
        );
	}
}

export default NavAfterLogin;