import React, {Component} from 'react';
import "../styles/fixedNav.css"
import { Link } from 'react-router-dom';

class NavAfterLogin extends Component {
	render(){
        const toLogout = () => {
            // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
              sessionStorage.removeItem('userId')
              sessionStorage.removeItem('userNick')
              sessionStorage.removeItem('userPw')
              sessionStorage.removeItem('userAdYear')

              // App 으로 이동(새로고침)
              
          }
		
        return (
            <div>
            <nav className="nav2">
            <Link to="/view-other-donelists"><button className="go-to-see-all"> {'>'} View other DoneLists
                </button></Link>
                <ul>
                    <Link to="/main"><li><button className="topBar">Home</button></li></Link>
                    <Link to="/mypage"><li><button className="topBar">My Page</button></li></Link>
                    <Link to="/"><li><button className="topBar" onClick={toLogout}>Logout</button></li></Link>
                    <Link to="/how-to-use"><li><button className="topBar">About</button></li></Link>
                </ul>
                </nav>   
            </div>
        );
	}
}

export default NavAfterLogin;