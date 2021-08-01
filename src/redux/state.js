// Class new user
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

const store = {
    // Render App
    renderApp(){},
    subscribe(observer){
        this.renderApp = observer;
    },

    // Users
    users: [
        {id: 0, username: "maksim4k1", password: "1234", email: "maksim4k1@gmail.com", name: "Баженов Максим", deskription: "Здравствуйте, я начинающий Front-end разработчик. Мои ключевые навыки: JavaScript, React, HTML, CSS, GIT. Имел опыт работы с TypeScript, SASS/SCSS. Постоянно обучаюсь, и изучаю новые технологии.", hobby: "Web-разработка", website: "https://github.com/maksim4k1", image: "https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg" },
        {id: 1, username: "Sasha", password: "1234", email: "sasha@gmail.com", name: "Pak Sasha", deskription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt?", hobby: "Python-разработчик", website: "", image: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" },
        {id: 2, username: "Ilya", password: "1234", email: "ilya@gmail.com", name: "Fzomin Ilya", deskription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, voluptatum?", hobby: "Android-разработка", website: "", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" },
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

    dispatch(action){ // { type: "", value: "", ... }
        if(action.type === "FIND-MY-ACCOUNT"){ // { type: "" }
            this.users.forEach(item => {
                if(item.id === this.state.myAccount.id){
                    item.myAccount = true;
                }
            });
        } else if(action.type === "CONVERT-FRIENDS"){ // { type: "" }
            let thisPage = this.state.sidebar;
            for(let i = 0; i < 5; i++){
                thisPage.friends.push(this.dispatch({type: "FIND-USER", id: this.state.myAccount.myFriends[i]}));
            }
            thisPage.friends.push({id: 0, username: "Add", image: "https://www.freepnglogos.com/uploads/plus-icon/add-plus-icon-28.png"});
        } else if(action.type === "ADD-POST"){ // { type: "", userId: 0, text: "" }
            let thisPage = this.state.profilePage;
            if(action.text.trim() !== "" && typeof(action.userId) === "number"){
                let profiles = thisPage.profiles;
                let index = profiles.findIndex(item => item.profileInfo.id === action.userId);
                profiles[index].posts.unshift({
                    id: this.state.myAccount.id,
                    message: action.text
                });
                this.dispatch({type: "CONVERT-POSTS"});
                thisPage.newPostText = "";

                // Rerender app
                this.renderApp();
            }
        } else if(action.type === "EDIT-INPUT-VALUE"){ // { type: "", page: "", input: "", value: "" }
            let thisPage = this.state[action.page]
            thisPage[action.input] = action.value;

            // Rerender app
            this.renderApp();
        } else if(action.type === "CONVERT-PROFILES"){ // { type: "" }
            let thisPage = this.state.profilePage;
            thisPage.profiles = this.users.map((element, index) => {
                let user = this.dispatch({type: "FIND-USER", id: element.id});
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
        } else if(action.type === "CONVERT-POSTS"){ // { type: "" }
            let thisPage = this.state.profilePage;
            thisPage.profiles.forEach(item => {
                item.posts.forEach(element => {
                    let user = this.dispatch({type: "FIND-USER", id: element.id});
                    element.username = user.username;
                    element.image = user.image;
                });
            });
        } else if(action.type === "CONVERT-NEW-PROFILE"){ // { type: "", id: 0 }
            let thisPage = this.state.profilePage;
            let user = this.dispatch({type: "FIND-USER", id: action.id});
            thisPage.profiles.push({profileInfo: user, posts: []});
        } else if(action.type === "RENDER-MY-PROFILE-INFO"){ // { type: "" }
            let thisPage = this.state.profilePage;
            const myAccount = this.users.find(item => item.id === this.state.myAccount.id);
            thisPage.profileUsername = myAccount.username;
            thisPage.profileName = myAccount.name;
            thisPage.profileDeskription = myAccount.deskription;
            thisPage.profileHobby = myAccount.hobby;
            thisPage.profileWebsite = myAccount.website;
        } else if(action.type === "TOGGLE-EDIT-PROFILE-MODAL"){ // { type: "", className: "" }
            let thisPage = this.state.profilePage;
            thisPage.profileClassName = action.className;
            this.dispatch({type: "RENDER-MY-PROFILE-INFO"});

            // Rerender app
            this.renderApp();
        } else if(action.type === "EDIT-PROFILE"){ // { type: "" }
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
                    this.dispatch({type: "TOGGLE-EDIT-PROFILE-MODAL", className: ""});
                } else if(name === ""){
                    error = "Введите имя пользователя"
                } else if(isHasForbiddenSymbolsInName === true){
                    error = "Имя не должно содержать цифры и следующие символы ( , : ; ? ! * + % < > @ [ ] { } / \\ \" $ # ` . )";
                } else if(name.length < 4 || name.length > 100){
                    error = "Длина имени 4-100 символов";
                } else{
                    let isEditProfile = window.confirm("Вы уверены что хотите внести изменения?");
                    if(isEditProfile === true){
                        this.dispatch({type: "FIND-USER", id: this.state.myAccount.id}).username = username;
                        this.dispatch({type: "FIND-USER", id: this.state.myAccount.id}).name = name;

                        this.dispatch({type: "TOGGLE-EDIT-PROFILE-MODAL", className: ""});
                    } else{
                        this.dispatch({type: "TOGGLE-EDIT-PROFILE-MODAL", className: ""});
                    }
                    error = "";
                }
            }
            this.dispatch({type: "FIND-USER", id: this.state.myAccount.id}).deskription = deskription;
            this.dispatch({type: "FIND-USER", id: this.state.myAccount.id}).hobby = hobby;
            this.dispatch({type: "FIND-USER", id: this.state.myAccount.id}).website = website;
            thisPage.profileError = error;

            this.dispatch({type: "RENDER-MY-PROFILE-INFO"});

            // Rerender app
            this.renderApp();
        } else if(action.type === "ADD-MESSAGE"){ // { type: "", chatId: 0, isMyMessage: true, message: "" }
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
        } else if(action.type === "CONVERT-MY-DIALOGS"){ // { type: "" }
            let thisPage = this.state.dialogsPage;
            thisPage.dialogs = this.state.myAccount.myDialogs.map(element  => {
                return this.dispatch({type: "FIND-USER", id: element});
            });
        } else if(action.type === "CONVERT-CHATS"){ // { type: "" }
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
        } else if(action.type === "SIGN-IN"){ // { type: "" }
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
                    this.dispatch({type: "FIND-MY-ACCOUNT"});

                    error = "";
                    thisPage.signInLogin = "";
                    thisPage.signInPassword = "";
                }
            }
            thisPage.signInError = error;

            // Rerender app
            this.renderApp();
        } else if(action.type === "CLEAR-SIGN-IN-INPUTS"){ // { type: "" }
            let thisPage = this.state.signInPage
            thisPage.signInLogin = "";
            thisPage.signInPassword = "";
            thisPage.signInError = "";

            // Rerender app
            this.renderApp();
        } else if(action.type === "SIGN-UP"){ // { type: "" }
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
                    this.dispatch({type: "FIND-MY-ACCOUNT"});
                    this.dispatch({type: "CONVERT-NEW-PROFILE", id: this.users[this.users.length - 1].id});

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
        } else if(action.type === "CLEAR-SIGN-UP-INPUTS"){ // { type: "" }
            let thisPage = this.state.signUpPage;
            thisPage.signUpLogin = "";
            thisPage.signUpEmail = "";
            thisPage.signUpName = "";
            thisPage.signUpPassword = "";
            thisPage.signUpConfirmPassword = "";
            thisPage.signUpError = "";

            // Rerender app
            this.renderApp();
        } else if(action.type === "FIND-USER"){ // { type: "", id: 0 }
            return this.users.find(item => item.id === action.id);
        }
    },
}

store.dispatch({type: "FIND-MY-ACCOUNT"});
store.dispatch({type: "CONVERT-FRIENDS"});
store.dispatch({type: "CONVERT-PROFILES"});
store.dispatch({type: "CONVERT-POSTS"});
store.dispatch({type: "RENDER-MY-PROFILE-INFO"});
store.dispatch({type: "CONVERT-MY-DIALOGS"});
store.dispatch({type: "CONVERT-CHATS"});

export default store;