import {useParams} from "react-router-dom";

const Diary = () =>{

    /* useParams 를 이용해 uri에 작성된 PathValiable 값을 가져올수 있음 */
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>Diary {id}</h1>
            <p>이곳은 다이어리 페이지 입니다.</p>
        </div>
    )
}
export default Diary;