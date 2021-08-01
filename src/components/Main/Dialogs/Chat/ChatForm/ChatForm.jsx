import React from "react";
import style from "./ChatForm.module.css";

function ChatForm(props){
    const input = React.createRef();
    function addMessage(event){
        event.preventDefault();
        props.dispatch({type: "ADD-MESSAGE", chatId: props.id, isMyMessage: true, message: input.current.value});
    }

    function editNewMessageText(){
        props.dispatch({type: "EDIT-INPUT-VALUE", page: "dialogsPage", input: "newMessageText", value: input.current.value});
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