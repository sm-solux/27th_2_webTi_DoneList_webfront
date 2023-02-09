import '../styles/RadioButton.css';
import React, {useEffect, useState} from "react";


// ModalCreateDL.js 에 들어가는 색상선택 컴포넌트.

function RadioButton() {
    // blue, pink, orange, green
    // #6582BB, #BA6AA4, #C7705E, #8BBB65
    //const DLcolors = ["blue", "pink", "orange", "green"];
    const [DLcolor, setDLColor] = useState("blue");

    const onDLColor = (e) => {
        setDLColor(e.target.value)
        
        sessionStorage.setItem("DLColor", e.target.value)
    }

    useEffect(() => {
        sessionStorage.setItem("DLColor", DLcolor)
    }, [])
    return (
            <label className='radioBtn'>
                <input className='selectBtn'
                    name='blue'
                    value="blue"
                    type="radio"
                    onChange= {onDLColor}
                    checked={DLcolor === "blue"}/>
                <span className='custom-radio'></span>
                <div className='colorBar-blue' color={DLcolor}></div>

                <input className='selectBtn'
                    name='pink'
                    value="pink"
                    type="radio"
                    onChange= {onDLColor}
                    checked={DLcolor === "pink"}/>
                <span className='custom-radio'></span>
                <div className='colorBar-pink' color={DLcolor}></div>
                
                <input className='selectBtn'
                    name='orange'
                    value="orange"
                    type="radio"
                    onChange= {onDLColor}
                    checked={DLcolor === "orange"} />
                <span className='custom-radio'></span>
                <div className='colorBar-orange' color={DLcolor}></div>

                <input className='selectBtn'
                    name='green'
                    value="green"
                    type="radio"
                    onChange= {onDLColor}
                    checked={DLcolor === "green"} />
                <span className='custom-radio'></span>
                <div className='colorBar-green' color={DLcolor}></div>
            </label>
        
    );
}

export default RadioButton;