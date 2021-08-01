import style from "./Message.module.css";

function Message(props){
    // Return XML
    return(
        <li className={style.item}>
            <p className={style.message}>{props.message}</p>
        </li>
    );
}

export default Message;