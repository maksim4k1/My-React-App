import style from "./Chat.module.css";
import ChatForm from "./ChatForm/ChatForm";
import ChatNavigation from "./ChatNavigation/ChatNavigation";
import Messages from "./Messages/Messages";

function Chat(props){
    // Return XML
    return(
        <div className={style.chat}>
            <ChatNavigation chat={props.chat}/>
            <Messages chat={props.chat}/>
            <ChatForm dialogs={props.dialogs} dispatch={props.dispatch} id={props.chat.id}/>
        </div>
    );
}

export default Chat;