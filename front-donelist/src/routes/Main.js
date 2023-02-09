import { useEffect, useState } from "react";
import React, { Component } from "react";
import NavAfterLogin from "../components/NavAfterLogin_blue";
import CalendarBar from "../components/CalendarBar";
import "../styles/Main.css";
import ModalCreateDL from "../components/ModalCreateDL";
import DonelistBar from "../components/DonelistBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";

const Main = (props) => {
let [adYear, setAdYear] = useState(2020); //가입년도를 숫자로 받는다고 가정
let [nowYear, setNowYear] = useState(2023);

// 던리스트 생성창 모달
const [ModalHandle, setModalHandle] = React.useState(false);

// 모달 창 열기
const showModal = () => {
    setModalHandle(true);
};

const [Bar, getBar] = useState([]);

let { userId } = useParams();
//console.log(userId)
//console.log(sessionStorage.userId)

const GetDonelist = async () => {
    const DL = await axios.get("/donelist/").then((res) => {
    return res.data;
    });
    //console.log(DL);

    let DLfilter = DL.filter((item) => {
    return item.userId === sessionStorage.userId;
    });

    console.log(DLfilter);
    getBar(DLfilter);
};

useEffect(() => {
    GetDonelist();
}, []);

// 임시데이터, DB에 저장된 사용자의 DL 정보 모두 가져와 돌려야 함, Y 값 어떻게할지 생각해봐야함.
// const [donelist, setDonelist] = useState({
//     title : 'Programming Club "SOLUX"',
//     color : "blue",
//     startY : 2022,
//     startM : 3,
//     endY : 2023,
//     endM : 1,
//     // 몇 번째 던리스트인지. 0 부터, 1씩 증가. (Y 좌표)
//     index : 0,
// });

//const [counter, setCounter] = useState(0)
const MakeDonelist = (donelist) => {
    // donelist  = {
    //     ...donelist,
    //     index: counter
    // }
    console.log(donelist);
    DonelistBar(donelist);
    //setCounter((prev)=>(prev+1) )
};

const doneRef = useRef();
const onDownloadBtn = () => {
    const done = doneRef.current;
    const filter = (done => {
        return done.className !== 'downBtn' ||'create-DL-btn-container'
    })
    domtoimage
    .toBlob(document.querySelector(".DL-down"), {filter: filter})
    .then((blob) => {
        saveAs(blob, "mydonelist.png");
    });
};

return (
    <div className="DL-container">
    <NavAfterLogin />
    <div>
        <button className="downBtn" onClick={onDownloadBtn}>
        save Done
        </button>
    </div>
    <div className="DL-down">
    <div className="DL-sub-container">
        {[...Array(nowYear - adYear + 1)].map((undefined, index) => {
        //calendar 1세트를, 현재에서 가입연도를 뺀 만큼 반복 나열하고자 함
        return (
            <div key={index.id}>
            <span key={index.id} className="LD-year">{`${
                nowYear - index
            }`}</span>
            <CalendarBar key={index.id} />
            </div>
        );
        })}
    </div>
    {Bar.map((bar, index) => (
        <DonelistBar donelist={bar} index={index} />
    ))}
    </div>

    <div className="create-DL-btn-container">
        <button className="create-DL-btn" onClick={showModal}>
        {" "}
        +{" "}
        </button>
        {ModalHandle && <ModalCreateDL setModalOpen={setModalHandle} />}
    </div>
    </div>
);
};

export default Main;