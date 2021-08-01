import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer(props){
    // Return XML
    return(
        <footer className={style.footer}>
            <div className="container">
                <h2 className={style.logo}><NavLink exact to="/">Logo</NavLink></h2>
            </div>
        </footer>
    );
}

export default Footer;