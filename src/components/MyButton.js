
const MyButton = ({text,type,onClick}) =>{

    const btnType = ['positive', 'negative'].includes(type) ? type:'default';

    return <>
        <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick = {onClick}>
            {text}
        </button>
    </>
}

MyButton.defaultProps = {
    text: "버튼",
    type: "default",
}

export default MyButton;