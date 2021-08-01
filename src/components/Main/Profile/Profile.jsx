import React from "react";
import { Route } from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile";
import Posts from "./Posts/Posts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    const myAccountIndex = props.profile.profiles.findIndex(item => item.profileInfo.myAccount === true);

    const profiles = props.profile.profiles;

    const profilesElements = profiles.map(item => {
        return (
            <Route exact path={`/profile/${item.profileInfo.id}`} render={() => {
                return (
                    <div>
                        <h1 className={style.title}>Профиль</h1>
                        <ProfileInfo profile={item.profileInfo} />
                        <Posts profile={props.profile} thisProfile={item} dispatch={props.dispatch} />
                    </div>
                )
            }} />
        )
    });


    // Return XML
    return (
        <div>
            <section className={style.section}>
                {profilesElements}
                <Route exact path="/profile" render={() => {
                    return (
                        <div>
                            <EditProfile profile={props.profile} dispatch={props.dispatch} />
                            <ProfileInfo profile={props.profile.profiles[myAccountIndex].profileInfo} />
                            <Posts profile={props.profile} thisProfile={props.profile.profiles[myAccountIndex]} dispatch={props.dispatch} />
                        </div>
                    )
                }} />
            </section>
        </div>
    );
}

export default Profile;