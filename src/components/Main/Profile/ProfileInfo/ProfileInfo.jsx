import style from "./ProfileInfo.module.css";

function ProfileInfo(props){
    // Return XML
    return(
        <div className={style.content}>
            <img src={props.profile.image} alt="" className={style.image} />
            <div className={style.info}>
                <h4 className={style.username}>{props.profile.username}</h4>
                <h6 className={style.name}><b>Имя: </b>{props.profile.name}</h6>
                <p className={style.deskription}><b>Информация: </b>{props.profile.deskription}</p>
                <p className={style.deskription}><b>Хобби: </b>{props.profile.hobby}</p>
                <p className={style.deskription}><b>Website: </b><a href={props.profile.website} rel="noreferrer" target="_blank" className={style.link}>{props.profile.website}</a></p>
            </div>
        </div>
    );
}

export default ProfileInfo;