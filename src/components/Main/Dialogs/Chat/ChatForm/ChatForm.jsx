import React from "react";
import { addMessageCreateAction } from "../../../../../redux/dialogs-reducer";
import { editInputValueCreateAction } from "../../../../../redux/other-reducer";
import style from "./ChatForm.module.css";

function ChatForm(props){
    const input = React.createRef();
    function addMessage(event){
        event.preventDefault();
        props.dispatch(addMessageCreateAction(props.id, true, input.current.value));
    }

    function editNewMessageText(){
        props.dispatch(editInputValueCreateAction("dialogsPage", "newMessageText", input.current.value));
    }

    // Return XML
    return(
        <form className={style.form} onSubmit={addMessage}>
            <input type="text" placeholder="Введите сообщение..." value={props.dialogs.newMessageText} className={style.input} onChange={editNewMessageText} ref={input} />
            <button type="submit" className={style.button}>Отправить</button>
        </form>
    );
}

export default ChatForm;