import React from "react";
import { editProfileCreateAction } from "../../../../../redux/profile-reducer";
import style from "./EditProfileModal.module.css";
import EditProfileModalInput from "./EditProfileModalInput/EditProfileModalInput";

function EditProfileModal(props) {
    function editProfile(event){
        event.preventDefault();

        props.dispatch(editProfileCreateAction());
    }

    function closeModal(event){
        if(event.target === event.currentTarget){
            props.dispatch(editProfileCreateAction());
        }
    }

    // Return XML
    return (
        <div className={`${style.modal} ${props.profile.profileClassName}`} onClick={closeModal}>
            <form className={style.form} onSubmit={editProfile}>
                <h3 className={style.title}>Редактировать профиль</h3>

                <EditProfileModalInput profile={props.profile} dispatch={props.dispatch} labelText="Имя пользователь:" value="profileUsername" type="text"/>
                <EditProfileModalInput profile={props.profile} dispatch={props.dispatch} labelText="Имя:" value="profileName" type="text"/>
                <EditProfileModalInput profile={props.profile} dispatch={props.dispatch} labelText="Информация о вас:" value="profileDeskription" type="text"/>
                <EditProfileModalInput profile={props.profile} dispatch={props.dispatch} labelText="Ваше хобби:" value="profileHobby" type="text"/>
                <EditProfileModalInput profile={props.profile} dispatch={props.dispatch} labelText="Ссылка на website:" value="profileWebsite" type="text"/>

                <div className={style.error}>{props.profile.profileError}</div>
                <button type="submit" className={style.button}>Сохранить изменения</button>
            </form>
        </div>
    );
}

export default EditProfileModal;