import React from "react";
import Message from "./Message/Message";
import MyMessage from "./Message/MyMessage";
import style from "./Messages.module.css";

function Messages(props){
    const messages = props.chat.messages;

    const messagesElements = messages.map( item => {
        if(item.isMyMessage === true){
            return <MyMessage message={item.message}/>
        } else{
            return <Message message={item.message}/>
        }
    });
    if(messagesElements.length === 0) messagesElements[0] = <h4 className={style.subtitle}><img src="https://pngimg.com/uploads/hello/hello_PNG3.png" alt="" className={style.image} /><span>Начните разговор первым!</span></h4>

    // Return XML
    return(
        <ul className={style.messages}>
            { messagesElements }
        </ul> 
    );
}

export default Messages;