import { useEffect, useState } from "react";
import React, {Component} from 'react';
import { useParams } from "react-router-dom";
import WriteDetail_blue from "../components/WriteDetail_blue";
import WriteDetail_orange from "../components/WriteDetail_orange";
import WriteDetail_pink from "../components/WriteDetail_pink";
import WriteDetail_green from "../components/WriteDetail_green";
import axios from "axios";
import NavAfterLogin from "../components/NavAfterLogin_blue";
import NavAfterLogin_pink from "../components/NavAfterLogin_pink"
import NavAfterLogin_orange from "../components/NavAfterLogin_orange"
import NavAfterLogin_green from "../components/NavAfterLogin_green"




function WriteDetail() {

    let {DLcolor} = useParams();


    switch (DLcolor) {
        case "blue":
            return (
                <div>
                    <NavAfterLogin/>
                    <WriteDetail_blue/>
                </div>
                );
        case "orange" :
            return (
                <div>
                    <NavAfterLogin_orange/>
                    <WriteDetail_orange />
                </div>
                );
        case "pink":
            return (
                <div>
                    <NavAfterLogin_pink/>
                    <WriteDetail_pink />
                </div>
                );
        case "green":
            return (
                <div>
                    <NavAfterLogin_green/>
                    <WriteDetail_green />
                </div>
                );
        default:
            return (
                <div>
                    <NavAfterLogin/>
                    <WriteDetail_blue />
                </div>
                );
                 
    }

}

export default WriteDetail;
