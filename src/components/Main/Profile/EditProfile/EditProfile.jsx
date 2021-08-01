import React from "react";
import style from "./EditProfile.module.css";
import modalStyle from "./EditProfileModal/EditProfileModal.module.css";
import EditProfileModal from "./EditProfileModal/EditProfileModal";

function EditProfile(props) {
    function openModal(){
        props.dispatch({type: "TOGGLE-EDIT-PROFILE-MODAL", className: modalStyle.openModal});
    }

    // Return XML
    return (
        <div className={style.navigation}>
            <h1 className={style.title}>Профиль</h1>
            <button className={style.button} onClick={openModal}>Редактировать<img src="https://img.icons8.com/ios/2x/settings.png" alt=""/></button>
            <EditProfileModal profile={props.profile} dispatch={props.dispatch} />
        </div>
    );
}

export default EditProfile;