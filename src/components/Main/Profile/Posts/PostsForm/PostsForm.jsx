import React from "react";
import { addPostCreateAction, editInputValueCreateAction } from "../../../../../redux/state";
import style from "./PostsForm.module.css";

function PostsForm (props) {
    const input = React.createRef();
    function sendPost(event){
        event.preventDefault();
        props.dispatch(addPostCreateAction(props.id, input.current.value));
    }

    function editNewPostText(){
        props.dispatch(editInputValueCreateAction("profilePage", "newPostText", input.current.value));
    }

    // Return XML
    return(
        <form className={style.form} onSubmit={sendPost}>
            <input type="text" placeholder="Введите сообщение..." value={props.profile.newPostText} className={style.input} onChange={editNewPostText} ref={input} />
            <button className={style.button}>Опубликовать</button>
        </form>
    );
}

export default PostsForm;