import { useEffect, useState } from "react";
import React, {Component} from 'react';
import { useParams } from "react-router-dom";
import Visit_blue from "../components/Visit_blue";
import Visit_orange from "../components/Visit_orange";
import Visit_pink from "../components/Visit_pink";
import Visit_green from "../components/Visit_green";
import axios from "axios";
import NavAfterLogin from "../components/NavAfterLogin"
import NavAfterLogin_blue from "../components/NavAfterLogin_blue";
import NavAfterLogin_pink from "../components/NavAfterLogin_pink"
import NavAfterLogin_orange from "../components/NavAfterLogin_orange"
import NavAfterLogin_green from "../components/NavAfterLogin_green"


function VisitDetail() {

   
    let { doneId } = useParams();
    const [donelist, getDonelist] = useState([]);
    const getDonelists = async() => {

    const donelists = await axios.get("/donelist/" + doneId +"/").then((res) => res.data)
    
    getDonelist(donelists)
    }
      
    

    useEffect(() => {
        getDonelists();
        console.log(donelist)
    }, [])

    switch (donelist.Colorcode) {
        case "blue":
            return (
                <div>
                    <NavAfterLogin_blue/>
                    <Visit_blue donelist={donelist}/>
                </div>
                );
        case "orange" :
            return (
                <div>
                    <NavAfterLogin_orange/>
                    <Visit_orange donelist={donelist}/>
                </div>
                );
        case "pink":
            return (
                <div>
                    <NavAfterLogin_pink/>
                    <Visit_pink donelist={donelist}/>
                </div>
                );
        case "green":
            return (
                <div>
                    <NavAfterLogin_green/>
                    <Visit_green donelist={donelist}/>
                </div>
                );
        default:
            return (
                <div>
                    <NavAfterLogin/>
                    <Visit_blue donelist={donelist}/>
                </div>
                );
    }

}

export default VisitDetail;
