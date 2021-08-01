import Friend from "./Friend/Friend";
import style from "./Friends.module.css";

function Friends(props){
    const friends = props.friends;

    const friendsElements = friends.map(item => {
        return <Friend username={item.username} image={item.image} id={item.id} />
    });

    // Return XML
    return(
        <div className={style.content}>
            <h3 className={style.title}>Друзья:</h3>
            <ul className={style.list}>
                { friendsElements }
            </ul>
        </div>
    );
}

export default Friends;