import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation(){
    // Return XML
    return(
        <div className={style.content}>
            <h3 className={style.title}>Навигация:</h3>
            <ul className={style.menu}>
            <li className={style.item}><NavLink exact to="/" activeClassName={style.link_active} className={style.link}>Главная</NavLink></li>
            <li className={style.item}><NavLink to="/profile" activeClassName={style.link_active} className={style.link}>Профиль</NavLink></li>
            <li className={style.item}><NavLink to="/dialogs" activeClassName={style.link_active} className={style.link}>Беседы</NavLink></li>
        </ul>
        </div>
    )
}

export default Navigation;