import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(){
    // Return XML
    return(
        <header className={style.header}>
            <div className={style.container + " container"}>
                <h1 className={style.logo}><NavLink exact to="/">Logo</NavLink></h1>
                <nav className={style.navigation}>
                    <ul className={style.menu}>
                        <li className={style.link}><NavLink exact to="/" activeClassName={style.active}>Главная</NavLink></li>
                        <li className={style.link}><NavLink to="/profile" activeClassName={style.active}>Профиль</NavLink></li>
                        <li className={style.link}><NavLink to="/dialogs" activeClassName={style.active}>Беседы</NavLink></li>
                        <li className={style.link}><NavLink to="/signin" className={style.button}>Войти</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;