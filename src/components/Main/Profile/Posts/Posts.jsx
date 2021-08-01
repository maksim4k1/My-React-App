import style from "./Posts.module.css";
import Post from "./Post/Post";
import PostsForm from "./PostsForm/PostsForm";

function Posts (props) {
    const posts = props.thisProfile.posts;

    const postsElements = posts.map(item => {
        return <Post post={item} />
    });

    if(postsElements.length === 0) postsElements[0] = <h4 className={style.subtitle}><img src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-coopera-web-design-12.png" alt="" className={style.image} /><span>Здесь пока пусто...</span></h4>

    // Return XML
    return(
        <div className={style.content}>
            <h4 className={style.title}>Напишите отзыв о пользователе</h4>
            <PostsForm profile={props.profile} dispatch={props.dispatch} id={props.thisProfile.profileInfo.id}/>
            <ul className={style.list}>
                { postsElements }
            </ul>
        </div>
    );
}

export default Posts;