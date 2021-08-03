import { findUser } from "./store";

const ADD_POST = "ADD-POST";
const CONVERT_PROFILES = "CONVERT-PROFILES";
const CONVERT_POSTS = "CONVERT-POSTS";
const CONVERT_NEW_PROFILE = "CONVERT-NEW-PROFILE";
const RENDER_MY_PROFILE_INFO = "RENDER-MY-PROFILE-INFO";
const TOGGLE_EDIT_PROFILE_MODAL = "TOGGLE-EDIT-PROFILE-MODAL";
const EDIT_PROFILE = "EDIT-PROFILE";

function profileReducer(store, action){
    switch(action.type){
        case  ADD_POST: { // { type: "", userId: 0, text: "" }
            let thisPage = store.state.profilePage;
            if(action.text.trim() !== "" && typeof(action.userId) === "number"){
                let profiles = thisPage.profiles;
                let index = profiles.findIndex(item => item.profileInfo.id === action.userId);
                profiles[index].posts.unshift({
                    id: store.state.myAccount.id,
                    message: action.text
                });
                store.dispatch(convertPostsCreateAction());
                thisPage.newPostText = "";
            }

            // Return state
            return store;
        }
        case CONVERT_PROFILES: { // { type: "" }
            let thisPage = store.state.profilePage;
            thisPage.profiles = store.users.map((element, index) => {
                let user = findUser(element.id);
                let posts = thisPage.profiles[index];
                let profile = {
                    profileInfo: user,
                    posts: [
                        //  { id: 0, message: "Lorem ipsum dolor sit amet consectetur."}
                    ],
                }
                if(posts !== undefined){
                    profile.posts = thisPage.profiles[index].posts;
                }
                return profile;
            });

            // Return state
            return store;
        }
        case CONVERT_POSTS: { // { type: "" }
            let thisPage = store.state.profilePage;
            thisPage.profiles.forEach(item => {
                item.posts.forEach(element => {
                    let user = findUser(element.id);
                    element.username = user.username;
                    element.image = user.image;
                });
            });

            // Return state
            return store;
        }
        case CONVERT_NEW_PROFILE: { // { type: "", id: 0 }
            let thisPage = store.state.profilePage;
            let user = findUser(action.id);
            thisPage.profiles.push({profileInfo: user, posts: []});

            // Return state
            return store;
        }
        case RENDER_MY_PROFILE_INFO: { // { type: "" }
            let thisPage = store.state.profilePage;
            const myAccount = store.users.find(item => item.id === store.state.myAccount.id);
            thisPage.profileUsername = myAccount.username;
            thisPage.profileName = myAccount.name;
            thisPage.profileDeskription = myAccount.deskription;
            thisPage.profileHobby = myAccount.hobby;
            thisPage.profileWebsite = myAccount.website;

            // Return state
            return store;
        }
        case TOGGLE_EDIT_PROFILE_MODAL: { // { type: "", className: "" }
            let thisPage = store.state.profilePage;
            thisPage.profileClassName = action.className;
            store.dispatch(renderMyProfileInfoCreateAction());

            // Return state
            return store;
        }
        case EDIT_PROFILE: { // { type: "" }
            let thisPage = store.state.profilePage;
            let username = thisPage.profileUsername.trim();
            let name = thisPage.profileName.trim();
            let deskription = thisPage.profileDeskription.trim();
            let hobby = thisPage.profileHobby.trim();
            let website = thisPage.profileWebsite.trim();
            let error = thisPage.profileError.trim();

            // Validate username
            let isHasForbiddenSymbolsInUsername = false;
            let isHasSpaceInUsername = false;
            let isNotValidFirstCharacterInUsername = false;
            let userWithEnteredUsername = store.users.find(item => item.username === username && item.myAccount === false);
            // Check for correct characters
            for(let i = 0; i < username.length; i++){
                let item = username[i];
                let validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890._- ";

                if(i === 0 && (item === "-" || item === ".")){
                    isNotValidFirstCharacterInUsername = true;
                    break;
                }
                if(item === " "){
                    isHasSpaceInUsername = true;
                    break;
                }

                for(let j = 0; j < validCharacters.length; j++){
                    let validCharactersItem = validCharacters[j];
                    if(item !== validCharactersItem){
                        isHasForbiddenSymbolsInUsername = true;
                    } else{
                        isHasForbiddenSymbolsInUsername = false;
                        break;
                    }
                }

                if(isHasForbiddenSymbolsInUsername === true) break;
            }

            if(username === ""){
                error = "Введите имя пользователя";
            } else if(userWithEnteredUsername !== undefined){
                error = "Пользователь с таким именем уже существует";
            } else if(isHasForbiddenSymbolsInUsername === true){
                error = `Имя пользователя может содержать следующие символы (A-Z), (a-z), (0-9), (.), (_), (-)`;
            } else if(isHasSpaceInUsername === true){
                error = "Имя пользователя не может содержать пробелов";
            } else if(isNotValidFirstCharacterInUsername === true){
                error = "Имя пользователя не может начинаться с (-) и (.)";
            } else if(username.length < 6 || username.length > 30){
                error = "Длина имени пользователя 6-30 символов";
            } else{
                // Validate name
                let isHasForbiddenSymbolsInName = false;
                for(let i = 0; i < name.length; i++){
                    let item = name[i];
                    let notValidCharacters = ",:;?!*+%<>@[]{}/\\\"$#`.0123456789"

                    for(let j = 0; j < notValidCharacters.length; j++){
                        let notValidCharactersItem = notValidCharacters[j];
                        if(item === notValidCharactersItem){
                            isHasForbiddenSymbolsInName = true;
                            break;
                        }
                    }
                }

                let myAccount = store.users.find(item => item.id === store.state.myAccount.id)
                if(
                    username === myAccount.username &&
                    name === myAccount.name
                ){
                    store.dispatch(toggleEditProfileModalCreateAction(""));
                } else if(name === ""){
                    error = "Введите имя пользователя"
                } else if(isHasForbiddenSymbolsInName === true){
                    error = "Имя не должно содержать цифры и следующие символы ( , : ; ? ! * + % < > @ [ ] { } / \\ \" $ # ` . )";
                } else if(name.length < 4 || name.length > 100){
                    error = "Длина имени 4-100 символов";
                } else{
                    let isEditProfile = window.confirm("Вы уверены что хотите внести изменения?");
                    if(isEditProfile === true){
                        findUser(store.state.myAccount.id).username = username;
                        findUser(store.state.myAccount.id).name = name;

                        store.dispatch(toggleEditProfileModalCreateAction(""));
                    } else{
                        store.dispatch(toggleEditProfileModalCreateAction(""));
                    }
                    error = "";
                }
            }
            findUser(store.state.myAccount.id).deskription = deskription;
            findUser(store.state.myAccount.id).hobby = hobby;
            findUser(store.state.myAccount.id).website = website;
            thisPage.profileError = error;

            store.dispatch(convertPostsCreateAction());
            store.dispatch(renderMyProfileInfoCreateAction());


            // Return state
            return store;
        }
        default: {
            // Return state
            return store;
        }
    }
}

// Render Actions
export function addPostCreateAction(id, text){
    return{
        type: ADD_POST,
        userId: id,
        text: text
    };
}
export function convertNewProfileCreateAction(id){
    return{
        type: CONVERT_NEW_PROFILE,
        id: id
    };
}
export function convertProfilesCreateAction(){
    return{
        type: CONVERT_PROFILES
    };
}
export function convertPostsCreateAction(){
    return{
        type: CONVERT_POSTS
    };
}
export function renderMyProfileInfoCreateAction(){
    return{
        type: RENDER_MY_PROFILE_INFO
    };
}
export function toggleEditProfileModalCreateAction(className){
    return{
        type: TOGGLE_EDIT_PROFILE_MODAL,
        className: className
    };
}
export function editProfileCreateAction(){
    return{
        type: EDIT_PROFILE
    };
}

export default profileReducer;