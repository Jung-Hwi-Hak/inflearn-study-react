import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {

    /**
     * ex) http://localhost:3002/edit?id=10&mode=dark
     *
     * useSearchParams 를 이용해 QuringString 값을 꺼내올수 있음.
     * */
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    const who = searchParams.get("who");
    console.log("default : ", id, mode);
    console.log("change : ", who);

    /* useNavigate 를 사용해서 페이지 이동 */
    const navigate = useNavigate();
    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 수정 페이지 입니다.</p>
            {/* QuringString 을 바꿔 현재 URI 를 변경할 수 있음. */}
            {/*<button onClick={()=> setSearchParams({who: "winterlood"})}>QS 바꾸기</button>*/}
            <button onClick={() => {
                navigate('/home')
            }}>HOME 이동
            </button>
            <button onClick={() => {
                navigate(-1)
            }}>뒤로가기
            </button>

        </div>
    )
}
export default Edit;