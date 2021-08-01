import { NavLink } from "react-router-dom";
import style from "./Post.module.css";

function Post (props) {
    // Return XML
    return(
        <li className={style.post}>
            <img src={props.post.image} alt="" className={style.image}/>
            <div className={style.content}>
                <h6 className={style.name}><NavLink to={`/profile/${props.post.id}`}>{props.post.username}</NavLink></h6>
                <p className={style.message}>{props.post.message}</p>
            </div>
        </li>
    );
}

export default Post;