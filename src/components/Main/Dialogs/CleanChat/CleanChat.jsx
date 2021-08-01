import style from "./CleanChat.module.css";

function CleanChat(){
    // Return XML
    return(
        <div className={style.chat}>
            <div className={style.navigation}>
                <h3 className={style.title}>Начни новый разговор!</h3>
            </div>
            <div className={style.content}>
                <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" className={style.image} />
                <h5 className={style.subtitle}>Найди новых друзей!</h5>
            </div>
        </div>
    );
}

export default CleanChat;