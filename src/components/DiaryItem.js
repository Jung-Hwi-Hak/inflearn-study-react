import MyButton from "./MyButton";

import React from "react";
import {useNavigate} from "react-router-dom";

const DiaryItem = ({id, emotion, content, date}) =>{

    const startDt = new Date(parseInt(date)).toLocaleDateString();
    const navigate = useNavigate();

    /* 디테일 페이지 이동 */
    const goDetail = ()=>{
        navigate(`/diary/${id}`);
    }

    const goEdit = ()=>{
        navigate(`/edit/${id}`);
    }

    return (
        <div className={"DiaryItem"}>
            <div className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(" ")}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt=""/>
            </div>
            <div className={"info_wrapper"} onClick={goDetail}>
                <div className={"diary_date"}>
                    {startDt}
                </div>
                <div className={"diary_content_preview"}>
                    {content.slice(0,25)}
                </div>
            </div>
            <div className={"btn_wrapper"}>
                <MyButton text={"수정하기"} onClick={goEdit}/>
            </div>
        </div>
    )
}

export default React.memo(DiaryItem);