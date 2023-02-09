import { useEffect, useState } from "react";
import NavAfterLogin from "./NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import { renderMatches, useLocation, useResolvedPath } from "react-router-dom";
import "../styles/likedList.css";
import { Link } from "react-router-dom";
import axios from "axios";
import donelist_D from "../imgs/donelist_D.png"

const LikedList= ({doneId}) => {
    console.log(doneId)

    const [likedUserNick, setLikedUserNick] = useState()
    const [title, setTitle] = useState()

    useEffect(()=> {

        setLikedUserNick(doneId.userId.Nickname)

        axios.get("/donelist/" + doneId._id + '/').then((res) => {
            console.log(res.data)
            let titlefilter = res.data.title;
            setTitle(titlefilter)
    })}, [])

    // css 수정 -> '닉네임'의 '활동명' 앞에 D 로고 같은 거 넣으면 좋을 듯
        return (
            <div>
                <div className="liked-list-items">
                    <Link to={`/visit-detail/${doneId._id}`}>
                        <div className="liked-text">
                        <img src={donelist_D} alt="dl_D" className="img-DL_D"></img>
                        <div className="liked-texts">
                            <span className="liked-text-item-nick">{likedUserNick}의 </span><span className="liked-text-item-title"> {title}</span>
                        </div>
                    </div></Link>
                </div>

            </div>      
    );
}

export default LikedList;