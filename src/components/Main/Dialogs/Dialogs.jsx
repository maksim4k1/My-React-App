import { Route } from "react-router-dom";
import Chat from "./Chat/Chat";
import CleanChat from "./CleanChat/CleanChat";
import style from "./Dialogs.module.css";
import MyDialogs from "./MyDialogs/MyDialogs"

function Dialogs(props){
    const chats = props.dialogs.dialogs;

    const chatsElements = chats.map((item, index) => {
        return <Route exact path={`/dialogs/${item.id}`} render={() => <Chat dialogs={props.dialogs} chat={props.dialogs.chats[index]} dispatch={props.dispatch}/>}/>;
    });

    // Return XML
    return(
        <div>
            <section className={style.section}>
                <h1 className={style.title}>Беседы</h1>
            </section>
            <section className={style.section + " " + style.content}>
                <MyDialogs myDialogs={props.dialogs.dialogs}/>
                { chatsElements }
                <Route exact path={`/dialogs`} render={() => <CleanChat/>}/>
            </section>
        </div>
    );
}

export default Dialogs;