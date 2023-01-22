import { useEffect, useState } from "react";
import React, { Component } from "react";
import NavAfterLogin from "../components/NavAfterLogin";
import Calendar from "../components/Calendar";
import "../styles/Initial_donelist.css";

const Initial_DL = (props) => {
  let [year, setYear] = useState(2020); //가입년도를 숫자로 받는다고 가정
  const now = 2046; //현재 연도
  return (
    <div>
      <div className="container">
        <div>
        <NavAfterLogin />

        </div>
        <div className="Calendar">
          
            {[...Array(now - year)].map((n, index) => {
              //calendar 1세트를, 현재에서 가입연도를 뺀 만큼 반복 나열하고자 함
              // -> 문제: 계속 가로로 배치되지 않고 어느 정도 이상은 밑에 나열됨..
              return (
                <div>
                  <Calendar />
                </div>
              );
            })}
          
        </div>
      </div>
    </div>
  );
};

export default Initial_DL;
