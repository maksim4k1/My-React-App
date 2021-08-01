import { NavLink } from "react-router-dom";
import style from "./Friend.module.css";

function Friend(props){
    // Return XML
    return(
        <li className={style.item}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.image} alt="" />
                <h6 className={style.username}>{props.username}</h6>
            </NavLink>
        </li>
    );
}

export default Friend;