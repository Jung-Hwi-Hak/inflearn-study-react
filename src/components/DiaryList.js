import {useState} from 'react';

const sortOptionList = [
    {
        value: "lastest",
        name: "최신순"
    },
    {
        value: "oldest",
        name: "오래된 순"
    }
]


const ControlMenu = ({value, setSortType, optionList}) => {
    return(
        <select value={value}
                onChange={(e)=>{
                    setSortType(e.target.value)
                }}
        >
            {optionList.map((it,idx) => (
                <option key={idx} value={it.value}>
                    {it.name}
                </option>
            ))}
        </select>
    );
};

const DiaryList = ({diaryList}) => {

    const [sortType, setSortType] = useState('lastest');

    const getProcessedDiaryList = ()=>{
        const compare = (a,b) =>{
            if(sortType === 'lastest'){
                return parseInt(b.date) - parseInt(a.date);
            }else{
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));
        return copyList.sort(compare);
    };

    return (
        <div>
            <ControlMenu value={sortType}
                         setSortType={setSortType}
                         optionList={sortOptionList}
            />
            {getProcessedDiaryList().map((it) => (
                <div key={it.id}>{it.content}</div>
            ))}
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList: []
}

export default DiaryList;