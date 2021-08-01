import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css";

function Dialog(props){
    // Return XML
    return(
        <li className={style.item}>
            <NavLink to={"/dialogs/" + props.dialog.id} className={style.link}><img src={props.dialog.image} alt="" /><span>{props.dialog.username}</span></NavLink>
        </li>
    )
}

export default Dialog;