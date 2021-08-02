// Constants
const FIND_MY_ACCOUNT = "FIND-MY-ACCOUNT";
const CONVERT_FRIENDS = "CONVERT-FRIENDS";
const ADD_POST = "ADD-POST";
const EDIT_INPUT_VALUE = "EDIT-INPUT-VALUE";
const CONVERT_PROFILES = "CONVERT-PROFILES";
const CONVERT_POSTS = "CONVERT-POSTS";
const CONVERT_NEW_PROFILE = "CONVERT-NEW-PROFILE";
const RENDER_MY_PROFILE_INFO = "RENDER-MY-PROFILE-INFO";
const TOGGLE_EDIT_PROFILE_MODAL = "TOGGLE-EDIT-PROFILE-MODAL";
const EDIT_PROFILE = "EDIT-PROFILE";
const ADD_MESSAGE = "ADD-MESSAGE";
const CONVERT_MY_DIALOGS = "CONVERT-MY-DIALOGS";
const CONVERT_CHATS = "CONVERT-CHATS";
const SIGN_IN = "SIGN-IN";
const CLEAR_SIGN_IN_INPUTS = "CLEAR-SIGN-IN-INPUTS";
const SIGN_UP = "SIGN-UP";
const CLEAR_SIGN_UP_INPUTS = "CLEAR-SIGN-UP-INPUTS";
const FIND_USER = "FIND-USER";

// Class new User
class User{
    constructor(id, username, password, email, name){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.deskription = "";
        this.hobby = "";
        this.website = "";
        this.image = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
}

export const store = {
    // Render App
    renderApp(){},
    subscribe(observer){
        this.renderApp = observer;
    },

    // Users
    users: [
        {id: 0, username: "maksim4k1", password: "1234", email: "maksim4k1@gmail.com", name: "Баженов Максим", deskription: "Здравствуйте, я Front-end разработчик. Мои ключевые навыки: JavaScript, React, HTML, CSS. Также имел опыт работы с Git, SASS/SCSS, TypeScript. Постоянно обучаюсь, и изучаю новые технологии.", hobby: "Web-разработка", website: "https://github.com/maksim4k1", image: "https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg" },
        {id: 1, username: "Sasha", password: "1234", email: "sasha@gmail.com", name: "Pak Sasha", deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt?", hobby: "Python-разработчик", website: "", image: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" },
        {id: 2, username: "Ilya", password: "1234", email: "ilya@gmail.com", name: "Fomin Ilya", deskription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, voluptatum?", hobby: "Android-разработка", website: "", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
        {id: 3, username: "Isa", password: "1234", email: "isa@gmail.com", name: "Maratov Isa", deskription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, exercitationem.`, hobby: "Автомобили", website: "", image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" },
        {id: 4, username: "Tair", password: "1234", email: "tair@gmail.com", name: "Isaev Tair", deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt?", hobby: "Гулять", website: "", image: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" },
        {id: 5, username: "Stas", password: "1234", email: "stat@gmail.com", name: "Shishkin Stas", deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt?", hobby: "Смотреть аниме", website: "", image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" },
        {id: 6, username: "Egor", password: "1234", email: "egor@gmail.com", name: "Bazhenov Egor", deskription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, velit.", hobby: "Играть в игры", website: "", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
        {id: 7, username: "Vlad", password: "1234", email: "vlad@gmail.com", name: "Pak Vlad", deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt?", hobby: "UFC", website: "", image: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" },
        {id: 8, username: "...", password: "1234", email: "username@gmail.com", name: "Some People", deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt?", hobby: "Нету", website: "", image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" },
    ],

    // State
    state: {
        myAccount: {
            id: 0,
            myFriends: [1, 2, 3, 4, 5, 6, 7],
            myDialogs: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        sidebar: {
            friends: [],
        },
        profilePage: {
            profiles: [],

            newPostText: "",
            modalClassName: "",
            
            profileUsername: "",
            profileName: "",
            profileDeskription: "",
            profileHobby: "",
            profileWebsite: "",
            profileError: "",
        },
        dialogsPage: {
            dialogs: [],
            chats: [],

            newMessageText: "",
        },
        signInPage: {
            signInLogin: "",
            signInPassword: "",
            signInError: "",
        },
        signUpPage: {
            signUpLogin: "",
            signUpEmail: "",
            signUpName: "",
            signUpPassword: "",
            signUpConfirmPassword: "",
            signUpError: "",
        },
    },

    // Dispatch
    dispatch(action){ // { type: "", value: "", ... }
        if(action.type === FIND_MY_ACCOUNT){ // { type: "" }
            this.users.forEach(item => {
                if(item.id === this.state.myAccount.id){
                    item.myAccount = true;
                }
            });
        } else if(action.type === CONVERT_FRIENDS){ // { type: "" }
            let thisPage = this.state.sidebar;
            for(let i = 0; i < 5; i++){
                thisPage.friends.push(this.dispatch(findUserCreateAction(this.state.myAccount.myFriends[i])));
            }
            thisPage.friends.push({id: 0, username: "Add", image: "https://www.freepnglogos.com/uploads/plus-icon/add-plus-icon-28.png"});
        } else if(action.type === ADD_POST){ // { type: "", userId: 0, text: "" }
            let thisPage = this.state.profilePage;
            if(action.text.trim() !== "" && typeof(action.userId) === "number"){
                let profiles = thisPage.profiles;
                let index = profiles.findIndex(item => item.profileInfo.id === action.userId);
                profiles[index].posts.unshift({
                    id: this.state.myAccount.id,
                    message: action.text
                });
                this.dispatch(convertPostsCreateAction());
                thisPage.newPostText = "";

                // Rerender app
                this.renderApp();
            }
        } else if(action.type === EDIT_INPUT_VALUE){ // { type: "", page: "", input: "", value: "" }
            let thisPage = this.state[action.page]
            thisPage[action.input] = action.value;

            // Rerender app
            this.renderApp();
        } else if(action.type === CONVERT_PROFILES){ // { type: "" }
            let thisPage = this.state.profilePage;
            thisPage.profiles = this.users.map((element, index) => {
                let user = this.dispatch(findUserCreateAction(element.id));
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
        } else if(action.type === CONVERT_POSTS){ // { type: "" }
            let thisPage = this.state.profilePage;
            thisPage.profiles.forEach(item => {
                item.posts.forEach(element => {
                    let user = this.dispatch(findUserCreateAction(element.id));
                    element.username = user.username;
                    element.image = user.image;
                });
            });
        } else if(action.type === CONVERT_NEW_PROFILE){ // { type: "", id: 0 }
            let thisPage = this.state.profilePage;
            let user = this.dispatch(findUserCreateAction(action.id));
            thisPage.profiles.push({profileInfo: user, posts: []});
        } else if(action.type === RENDER_MY_PROFILE_INFO){ // { type: "" }
            let thisPage = this.state.profilePage;
            const myAccount = this.users.find(item => item.id === this.state.myAccount.id);
            thisPage.profileUsername = myAccount.username;
            thisPage.profileName = myAccount.name;
            thisPage.profileDeskription = myAccount.deskription;
            thisPage.profileHobby = myAccount.hobby;
            thisPage.profileWebsite = myAccount.website;
        } else if(action.type === TOGGLE_EDIT_PROFILE_MODAL){ // { type: "", className: "" }
            let thisPage = this.state.profilePage;
            thisPage.profileClassName = action.className;
            this.dispatch(renderMyProfileInfoCreateAction());

            // Rerender app
            this.renderApp();
        } else if(action.type === EDIT_PROFILE){ // { type: "" }
            let thisPage = this.state.profilePage;
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
            let userWithEnteredUsername = this.users.find(item => item.username === username && item.myAccount === false);
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

                let myAccount = this.users.find(item => item.id === this.state.myAccount.id)
                if(
                    username === myAccount.username &&
                    name === myAccount.name
                ){
                    this.dispatch(toggleEditModalCreateAction(""));
                } else if(name === ""){
                    error = "Введите имя пользователя"
                } else if(isHasForbiddenSymbolsInName === true){
                    error = "Имя не должно содержать цифры и следующие символы ( , : ; ? ! * + % < > @ [ ] { } / \\ \" $ # ` . )";
                } else if(name.length < 4 || name.length > 100){
                    error = "Длина имени 4-100 символов";
                } else{
                    let isEditProfile = window.confirm("Вы уверены что хотите внести изменения?");
                    if(isEditProfile === true){
                        this.dispatch(findUserCreateAction(this.state.myAccount.id)).username = username;
                        this.dispatch(findUserCreateAction(this.state.myAccount.id)).name = name;

                        this.dispatch(toggleEditModalCreateAction(""));
                    } else{
                        this.dispatch(toggleEditModalCreateAction(""));
                    }
                    error = "";
                }
            }
            this.dispatch(findUserCreateAction(this.state.myAccount.id)).deskription = deskription;
            this.dispatch(findUserCreateAction(this.state.myAccount.id)).hobby = hobby;
            this.dispatch(findUserCreateAction(this.state.myAccount.id)).website = website;
            thisPage.profileError = error;

            this.dispatch(convertPostsCreateAction());
            this.dispatch(renderMyProfileInfoCreateAction());

            // Rerender app
            this.renderApp();
        } else if(action.type === ADD_MESSAGE){ // { type: "", chatId: 0, isMyMessage: true, message: "" }
            let thisPage = this.state.dialogsPage;
            if(action.message.trim() !== "" && typeof(action.chatId) === "number" && typeof(action.isMyMessage) === "boolean"){
                let index = thisPage.dialogs.findIndex(item => item.id === action.chatId);
                thisPage.chats[index].messages.push({
                    id: thisPage.chats[index].messages.length,
                    isMyMessage: action.isMyMessage,
                    message: action.message.trim(),
                });
                thisPage.newMessageText = "";

                // Rerender app
                this.renderApp();
            }
        } else if(action.type === CONVERT_MY_DIALOGS){ // { type: "" }
            let thisPage = this.state.dialogsPage;
            thisPage.dialogs = this.state.myAccount.myDialogs.map(element  => {
                return this.dispatch(findUserCreateAction(element));
            });
        } else if(action.type === CONVERT_CHATS){ // { type: "" }
            let thisPage = this.state.dialogsPage;
            thisPage.chats = thisPage.dialogs.map(item => {
                return ({
                    id: item.id,
                    username: item.username,
                    image: item.image,
                    messages: [
                        // { id: 0, isMyMessage: false, message: "Hello World!" },
                    ]
                });
            });
        } else if(action.type === SIGN_IN){ // { type: "" }
            let thisPage = this.state.signInPage;
            let login = thisPage.signInLogin.trim();
            let password = thisPage.signInPassword.trim();
            let error = thisPage.signInError;

            if(login === ""){
                error = "Введите логин";
            } else if(password === ""){
                error = "Введите пароль";
            } else{
                let user = this.users.find(item => item.username === login && item.password === password);
                if(user === undefined) user = this.users.find(item => item.email === login && item.password === password);

                if(user === undefined){
                    error = "Пользователь не найден, попробуйте снова";
                } else{
                    this.users[this.state.myAccount.id].myAccount = false;
                    this.state.myAccount.id = user.id;
                    this.dispatch(findMyAccountCreateAction());

                    error = "";
                    thisPage.signInLogin = "";
                    thisPage.signInPassword = "";
                }
            }
            thisPage.signInError = error;

            // Rerender app
            this.renderApp();
        } else if(action.type === CLEAR_SIGN_IN_INPUTS){ // { type: "" }
            let thisPage = this.state.signInPage
            thisPage.signInLogin = "";
            thisPage.signInPassword = "";
            thisPage.signInError = "";

            // Rerender app
            this.renderApp();
        } else if(action.type === SIGN_UP){ // { type: "" }
            let thisPage = this.state.signUpPage;
            let login = thisPage.signUpLogin.trim();
            let email = thisPage.signUpEmail.trim();
            let name = thisPage.signUpName.trim();
            let password = thisPage.signUpPassword.trim();
            let confirmPassword = thisPage.signUpConfirmPassword.trim();
            let error = thisPage.signUpError.trim();

            // Validate login
            let isHasForbiddenSymbolsInLogin = false;
            let isHasSpaceInLogin = false;
            let isNotValidFirstCharacterInLogin = false;
            // Check for correct characters
            for(let i = 0; i < login.length; i++){
                let item = login[i];
                let validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890._- ";

                if(i === 0 && (item === "-" || item === ".")){
                    isNotValidFirstCharacterInLogin = true;
                    break;
                }
                if(item === " "){
                    isHasSpaceInLogin = true;
                    break;
                }

                for(let j = 0; j < validCharacters.length; j++){
                    let validCharactersItem = validCharacters[j];
                    if(item !== validCharactersItem){
                        isHasForbiddenSymbolsInLogin = true;
                    } else{
                        isHasForbiddenSymbolsInLogin = false;
                        break;
                    }
                }

                if(isHasForbiddenSymbolsInLogin === true) break;
            }

            // Validate password
            let isHasForbiddenSymbolsInPassword = false;
            let isHasSpaceInPassword = false;
            let isNotValidFirstCharacterInPassword = false;
            let isHasNumbersInPassword = false;
            let isHasLettersInPassword = false;
            // Check for letters and numbers
            for(let i = 0; i < password.length; i++){
                let item = password[i];
                let numbers = "0123456789";
                let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

                for(let j = 0; j < numbers.length; j++){
                    let numbersItem = numbers[j];
                    if(item === numbersItem){
                        isHasNumbersInPassword = true;
                        break;
                    }
                }
                for(let j = 0; j < letters.length; j++){
                    let lettersItem = letters[j];
                    if(item === lettersItem){
                        isHasLettersInPassword = true;
                        break;
                    }
                }

                if(isHasNumbersInPassword === true && isHasLettersInPassword === true) break;
            }
            // Check for correct characters
            for(let i = 0; i < password.length; i++){
                let item = password[i];
                let validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._- ";

                if(i === 0 && (item === "-" || item === ".")){
                    isNotValidFirstCharacterInPassword = true;
                    break;
                }

                for(let j = 0; j < validCharacters.length; j++){
                    let validCharactersItem = validCharacters[j];
                    if(item !== validCharactersItem){
                        isHasForbiddenSymbolsInPassword = true;
                    } else{
                        isHasForbiddenSymbolsInPassword = false;
                        break;
                    }
                }

                if(isHasForbiddenSymbolsInPassword === true) break;
                if(item === " "){
                    isHasSpaceInPassword = true;
                    break;
                }
            }

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
            
            // Enter errors
            if(login === "") {
                error = "Введите логин";
            } else if(login.length < 6 || login.length > 30){
                error = "Длина логина 6-30 символов";
            } else if(isHasForbiddenSymbolsInLogin === true){
                error = `Логин может содержать следующие символы (A-Z), (a-z), (0-9), (.), (_), (-)`;
            } else if(isHasSpaceInLogin === true){
                error = "Логин не может содержать пробелов";
            } else if(isNotValidFirstCharacterInLogin === true){
                error = "Логин не может начинаться с (-) и (.)";
            } else if(email === "") {
                error = "Введите Email";
            } else if(email.length > 320){
                error = "Длина email не должна превышать 320 символов";
            } else if(name === "") {
                error = "Введите имя";
            } else if(name.length < 4 || name.length > 100){
                error = "Длина имени 4-100 символов";
            } else if(isHasForbiddenSymbolsInName === true){
                error = `Имя не должно содержать цифры и следующие символы ( , : ; ? ! * + % < > @ [ ] { } / \\ " $ # \` . )`;
            } else if(password === "") {
                error = "Введите пароль";
            } else if(password.length < 6 || password.length > 30){
                error = "Длина пароля 6-30 символов";
            } else if(isHasForbiddenSymbolsInPassword === true){
                error = `Логин может содержать следующие символы (A-Z), (a-z), (0-9), (.), (_), (-)`;
            } else if(isHasSpaceInPassword === true){
                error = "Пароль не может содержать пробелов";
            } else if(isNotValidFirstCharacterInPassword === true){
                error = "Пароль не может начинаться с (-) и (.)";
            } else if(isHasNumbersInPassword === false){
                error = "Пароль должен содержать цифры";
            } else if(isHasLettersInPassword === false){
                error = "Пароль должен содержать буквы";
            } else if(confirmPassword === "") {
                error = "Подтвердите пароль";
            } else if(password !== confirmPassword){
                error = "Пароли не совпадают";
            } else {
                let userWithEnteredLogin = this.users.find(item => item.username === login);
                let userWithEnteredEmail = this.users.find(item => item.email === email);

                if(userWithEnteredLogin !== undefined){
                    error = "Данный логин уже занят, попробуйте другое имя";
                } else if(userWithEnteredEmail !== undefined){
                    error = "Данный Email уже зарегистрирован, попробуйте войти в систему";
                } else{
                    this.users.find(item => item.myAccount === true).myAccount = false;
                    
                    this.users.push(new User(this.users.length, login, password, email, name));

                    this.state.myAccount.id = this.users[this.users.length - 1].id;
                    this.dispatch(findMyAccountCreateAction());
                    this.dispatch({type: CONVERT_NEW_PROFILE, id: this.users[this.users.length - 1].id});

                    error = "";
                    thisPage.signUpLogin = "";
                    thisPage.signUpEmail = "";
                    thisPage.signUpName = "";
                    thisPage.signUpPassword = "";
                    thisPage.signUpConfirmPassword = "";
                }
            }
            thisPage.signUpError = error;

            // Rerender app
            this.renderApp();
        } else if(action.type === CLEAR_SIGN_UP_INPUTS){ // { type: "" }
            let thisPage = this.state.signUpPage;
            thisPage.signUpLogin = "";
            thisPage.signUpEmail = "";
            thisPage.signUpName = "";
            thisPage.signUpPassword = "";
            thisPage.signUpConfirmPassword = "";
            thisPage.signUpError = "";

            // Rerender app
            this.renderApp();
        } else if(action.type === FIND_USER){ // { type: "", id: 0 }
            return this.users.find(item => item.id === action.id);
        }
    },
}

// Render Actions
export function findMyAccountCreateAction(){
    return{
        type: FIND_MY_ACCOUNT
    };
}
export function convertFriendsCreateAction(){
    return{
        type: CONVERT_FRIENDS
    };
}
export function addPostCreateAction(id, text){
    return{
        type: ADD_POST,
        userId: id,
        text: text
    };
}
export function editInputValueCreateAction(page, input, value){
    return{
        type: EDIT_INPUT_VALUE,
        page: page,
        input: input,
        value: value
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
export function toggleEditModalCreateAction(className){
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
export function addMessageCreateAction(chatId, isMyMessage, message){
    return{
        type: ADD_MESSAGE,
        chatId: chatId,
        isMyMessage: isMyMessage,
        message: message
    };
}
export function convertMyDialogsCreateAction(){
    return{
        type: CONVERT_MY_DIALOGS
    };
}
export function convertChatsCreateAction(){
    return{
        type: CONVERT_CHATS
    };
}
export function signInCreateAction(){
    return{
        type: SIGN_IN
    };
}
export function clearSignInInputsCreateAction(){
    return{
        type: CLEAR_SIGN_IN_INPUTS
    };
}
export function signUpCreateAction(){
    return{
        type: SIGN_UP
    };
}
export function clearSignUpInputsCreateAction(){
    return{
        type: CLEAR_SIGN_UP_INPUTS
    };
}
export function findUserCreateAction(id){
    return{
        type: FIND_USER,
        id: id
    };
}

// Activate functions
store.dispatch(findMyAccountCreateAction());
store.dispatch(convertFriendsCreateAction());
store.dispatch(convertProfilesCreateAction());
store.dispatch(convertPostsCreateAction());
store.dispatch(renderMyProfileInfoCreateAction());
store.dispatch(convertMyDialogsCreateAction());
store.dispatch(convertChatsCreateAction());