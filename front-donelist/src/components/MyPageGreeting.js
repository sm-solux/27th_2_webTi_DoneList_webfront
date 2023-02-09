import { useEffect, useState } from "react";
import styled from "styled-components";
import "../styles/myPageGreeting.css";

function MyPageGreeting() {
    return (
        <h2 className="profile-hi">{sessionStorage.userNick} 님, 안녕하세요!</h2>
    );
}

export default MyPageGreeting;