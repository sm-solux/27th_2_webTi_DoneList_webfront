import '../styles/ModalCreateDL.css';
import '../styles/RadioButton.css';

import { useEffect, useState } from "react";
import React, { Component } from "react";
import YearMonthSelectBox from './YearMonthSelectBox_start';
import YearMonthSelectBox_finish from './YearMonthSelectBox_finish';
import { Link } from 'react-router-dom';
import RadioButton from './RadioButton';

// 메인화면에서 던리스트 생성하는 모달 창
function ModalCreateDL({setModalOpen}) {

    const [DLcolor, setDLColor] = useState("blue");

    // 모달 창 끄기
    const closeModal = () => {
        setModalOpen(false);
    }

    const [donename, setDonename] = useState('');
    const onName = (e) => {
        setDonename(e.target.value)
        
    }

    const onAdd = () => {
        sessionStorage.setItem("Title", donename)
        sessionStorage.setItem("startDate", sessionStorage.startYear + "-" + sessionStorage.startMonth + "-1")
        sessionStorage.setItem("finishDate", sessionStorage.finishYear + "-" + sessionStorage.finishMonth + "-1")
        sessionStorage.removeItem("startYear")
        sessionStorage.removeItem("startMonth")
        sessionStorage.removeItem("finishYear")
        sessionStorage.removeItem("finishMonth")

    }

    return(
        <div className="cdlw-container">
            <div className='cdlw-Graph-Color'>
                <span className='cdlw-choose'>Graph Color</span>
                <div>

                <RadioButton/>

                </div>
            </div>

            <div className='cdlw-Donelist-Name'>
                <span className='cdlw-choose' >Donelist Title</span>
                <input className='cdlw-input' value={donename} onChange={onName}  type="text"/>
            </div>

            <div className='cdlw-Period'>
                <span className='cdlw-choose'>Period</span>
                <div className='cdlw-date'>
                <div className='cdlw-date-start'>
                    <YearMonthSelectBox />
                </div>
                    <span className='cdlw-date-hyp'> ~ </span>
                <div className='cdlw-date-done'>
                    <YearMonthSelectBox_finish />
                </div>
                </div>
            </div>

            <div className='cdlw-buttons'>
                <Link to ={`/write-detail/${sessionStorage.DLColor}`}><button className='cdlw-add' 
                onClick={onAdd}>Add</button></Link>
                <button className='cdlw-cancel' onClick={closeModal}>Cancel</button>
            </div>
        </div>
    );
}

// add 버튼 누를 경우 : 입력받은 Donelist 정보 -> DB에 저장 후, main에서 새로고침..? 해야 함.

export default ModalCreateDL;