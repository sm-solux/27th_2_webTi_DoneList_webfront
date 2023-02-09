//ShowAllDoneLists.js
import React from 'react';
import NavAfterLogin from '../components/NavAfterLogin_blue';
import UnderBar from '../components/UnderBar';
import { useEffect, useState } from "react";
import DoneListsMap from '../components/DoneListsMap';
import preview_1 from '../imgs/preview_1.png';
import preview_2 from '../imgs/preview_2.png';
import preview_3 from '../imgs/preview_3.png';
import preview_4 from '../imgs/preview_4.png';

function ShowAllDoneLists() {

    const [otherDLsData, setOtherDLsData] = useState([
        {
            id : 0,
            imgsrc : preview_1,
            nickName : "민지니",
            startYear : 2021,
        },
        {
            id : 1,
            imgsrc : preview_2,
            nickName : "hyeyoon",
            startYear : 2018,
        },
        {
            id : 2,
            imgsrc : preview_3,
            nickName : "경원24",
            startYear : 2020,
        },
        {
            id : 3,
            imgsrc : preview_4,
            nickName : "뿌용이",
            startYear : 2019,
        },
        
]);

    return (
        <div>
            <NavAfterLogin/>
            <div>
                <DoneListsMap otherDLsData={otherDLsData}/>
            </div>
            <UnderBar/>
        </div>
    );
}

export default ShowAllDoneLists;