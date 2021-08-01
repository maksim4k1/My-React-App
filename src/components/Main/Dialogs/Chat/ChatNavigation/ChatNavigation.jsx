import { NavLink } from "react-router-dom";
import style from "./ChatNavigation.module.css";

function ChatNavigation(props){
    // Return XML
    return(
        <div className={style.navigation}>
            <NavLink to={`/profile/${props.chat.id}`}>
                <div className={style.userInfo}>
                    <img src={props.chat.image} alt="" className={style.image} />
                    <h4 className={style.username}>{props.chat.username}</h4>
                </div>
            </NavLink>
        </div>
    );
}

export default ChatNavigation;