import React, {useEffect, useState} from "react";
import "../styles/CalendarBar.css";

function CalendarBar(props) {
    return (
        <div className="calendarbar-container">
            <p className="yearCircle"></p>
            <div className="horizontal-line"></div>
                <div className="monthCircles">
                <p className="monthCircle1"></p>
                <p className="monthCircle2"></p>
                <p className="monthCircle3"></p>
                <p className="monthCircle4"></p>
                <p className="monthCircle5"></p>
                <p className="monthCircle6"></p>
                <p className="monthCircle7"></p>
                <p className="monthCircle8"></p>
                <p className="monthCircle9"></p>
                <p className="monthCircle10"></p>
                <p className="monthCircle11"></p>
                </div>
            <div class="year-line"></div>
        </div>
    )
}

export default CalendarBar;