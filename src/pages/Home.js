import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";

/* COMPONENTS */
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";


const Home = () => {

    const diaryList = useContext(DiaryStateContext);

    const [diaryListData,setDiaryListData] = useState([]);

    const [curDate, setCurDate] = useState(new Date());

    const headerText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

    useEffect(()=>{
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장`;
    },[])

    /* 날짜 변경에 따라 날짜에 해당하는 리스트만 표출 */
    useEffect(()=>{
        if(diaryList.length >= 1) {
            const firstDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth(),
                1
            ).getTime();
            const lastDay = new Date(
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0,
                23,
                59,
                59
            ).getTime();

            setDiaryListData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay));
        }
    },[diaryList,curDate]);

    /* Month + 1 */
    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1))
    }
    /* Month - 1 */
    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1))
    }
    return (
        <div>
            {/* HEADER */}
            <MyHeader text={headerText}
                left={<MyButton text={"<"} onClick={() => {
                    decreaseMonth();
                }}/>}
                right={<MyButton text={">"} onClick={() => {
                    increaseMonth();
                }}/>}
            />
            {/* SECTION */}
            <DiaryList diaryList={diaryListData}/>
        </div>
    )
}
export default Home;