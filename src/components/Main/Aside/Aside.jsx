import style from "./Aside.module.css";
import Friends from "./Friends/Friends";
import Navigation from "./Navigation/Navigation";

function Aside(props){
    // Return XML
    return(
        <aside className={style.section}>
            <Navigation/>
            <Friends friends={props.sidebar.friends}/>
        </aside>
    );
}

export default Aside;