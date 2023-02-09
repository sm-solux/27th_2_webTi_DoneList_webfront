//DoneListsItem.js
import React from 'react';
import "../styles/AllAboutViewingDL.css";
import { useNavigate } from 'react-router-dom';


function DoneListsItem({oneofData}) {
    const { id, imgsrc, nickName, startYear } = oneofData;
    const history = useNavigate();
    const MoveOtherMain = () => {
        history('/other-main')
    }

    return(
        <div>
            <div className='last_view_area' onClick={MoveOtherMain}>
            <img src={imgsrc} className="last_dl_image" />
            <div className='last_dl_nickName_area'><span className='last_dl_nickName1'>{nickName}</span>
        <span className='last_dl_nickName2'> 님의 던리스트</span></div>
        <div className='last_dl_startYear_area'>
        <span className='last_dl_startYear1'>{startYear}</span>
        <span className='last_dl_startYear2'>년 ~ing</span>
        </div>
            </div>
        </div>
    );
}

export default DoneListsItem;