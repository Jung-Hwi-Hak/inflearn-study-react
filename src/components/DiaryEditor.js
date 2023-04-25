import {useNavigate} from "react-router-dom";
import React, {useCallback, useContext, useEffect, useRef, useState} from "react";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";
import {DiaryDispatchContext} from "../App";
import {getStringDate} from "../util/date";
import {emotionList} from "../util/emotion";


const DiaryEditor = ({isEdit, originData}) =>{

    const contentRef = useRef();
    const [content, setContent] = useState("");
    const [emotion,setEmotion] = useState(3);
    const [date,setDate] = useState(getStringDate(new Date()));

    const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchContext);

    /* 감정 클릭 */
    const handleClickEmote = useCallback((emotion) =>{
        setEmotion(emotion);
    },[]);
    const navigate = useNavigate();
    /* 뒤로가기 */
    const goBack = ()=>{
        navigate(-1);
    }


    /* 작성 완료 */
    const handleSubmit = ()=>{
        if(content.length < 1){
            contentRef.current.focus();
            return;
        }

        if(window.confirm(isEdit? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?")){
            if(!isEdit){
                onCreate(date, content, emotion);
            }else{
                onEdit(originData.id, date, content, emotion);
            }
        }
        navigate('/',{replace: true});
    }

    /* 삭제 이벤트 */
    const handleRemove = ()=>{
        if(window.confirm("정말 삭제하시겠습니까?")){
            onRemove(originData.id);
            navigate('/',{replace: true});
        }
    }
    /* effect */
    useEffect(()=>{
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContent(originData.content);
        }else{

        }
    },[isEdit,originData]);
    return (
        <div className={"DiaryEditor"}>
            <MyHeader
                left={<MyButton text={"< 뒤로가기"} onClick={goBack}/>}
                right={isEdit && (<MyButton text={"삭제하기"}  type={"negative"} onClick={handleRemove}/>)}
                text={isEdit ? "일기 수정하기" : "새로운 일기쓰기"}
            />
            <div>
                <section className={"section_date"}>
                    <h4>오늘은 언제인가요?</h4>
                    <div className={"input_box"}>
                        <input className={"input_date"} type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                </section>
                <section className={"section_emotion"}>
                    <h4>오늘의 감정</h4>
                    <div className={"input_box emotion_list_wrapper"}>
                        {emotionList.map((it)=> (
                            <EmotionItem
                                key={it.emotion_id} {...it}
                                onClick={handleClickEmote}
                                isSelected={it.emotion_id === emotion}
                                />
                        ))}
                    </div>
                </section>
                <section className={"section_content"}>
                    <h4>오늘의 일기</h4>
                    <div className={"input_box text_wrapper"}>
                        <textarea ref={contentRef} value={content} onChange={(e)=>setContent(e.target.value)}/>
                    </div>
                </section>
                <section className={"section_control"}>
                    <div className={"control_box"}>
                        <MyButton text={"취소하기"} onClick={goBack} type={"negative"}/>
                        <MyButton text={"작성완료"} type={"positive"} onClick={()=>{handleSubmit()}}/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default  DiaryEditor;