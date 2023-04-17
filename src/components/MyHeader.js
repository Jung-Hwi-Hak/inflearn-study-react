const MyHeader = ({text, left, right}) => {
    return (
        <header>
            <div className={"head_btn_left"}>{left}</div>
            <div className={"head_text"}>{text}</div>
            <div className={"head_btn_right"}>{right}</div>
        </header>
    )
}

export default MyHeader;