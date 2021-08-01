import style from "./MyDialogs.module.css";
import Dialog from "./Dialog/Dialog";

function MyDialogs(props){
    const dialogs = props.myDialogs;

    const dialogsElements = dialogs.map( item => {
        return <Dialog dialog={item} />
    });

    // Return XML
    return(
        <ul className={style.list}>
            { dialogsElements }
        </ul>
    )
}

export default MyDialogs;