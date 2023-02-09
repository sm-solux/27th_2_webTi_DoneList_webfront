import { useEffect, useState } from "react";
import "../styles/myPage.css"
import NavAfterLogin from "../components/NavAfterLogin";

function MyPage() {
    return (
        <div>
        <NavAfterLogin/>
        <div className="profile">
        <p className="user-picture"></p>
        <h2 className="profile-hi">UserID 님, 안녕하세요!</h2>
        <button className="modify-Info">정보 수정</button>
        <button className="log-out">로그아웃</button>
        </div>
        <img className="img-DL" src="../imgs/donelist_mini.png"></img>
        <button className="directToDL">나의 던리스트 바로가기</button>
        <button className="receivedMsg">받은 쪽지함</button>
        <button className="sendMsg">보낸 쪽지함</button>
        {/*<hr className="real-line"/>
        <p className="circle1"></p><p className="circle2"></p><p className="circle3"></p>*/}

        </div>
    );
}

export default MyPage;