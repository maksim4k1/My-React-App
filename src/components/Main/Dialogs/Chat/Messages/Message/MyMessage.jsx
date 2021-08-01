import style from "./Message.module.css";

function MyMessage(props){
    return(
        <li className={`${style.item} ${style.myMessage}`}>
            <p className={style.message}>{props.message}</p>
        </li>
    );
}

export default MyMessage;