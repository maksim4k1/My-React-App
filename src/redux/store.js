import otherReducer from "./other-reducer";
import asideReducer, { convertFriendsCreateAction } from "./aside-reducer";
import profileReducer, { convertPostsCreateAction, convertProfilesCreateAction, renderMyProfileInfoCreateAction } from "./profile-reducer";
import dialogsReducer, { convertChatsCreateAction, convertMyDialogsCreateAction } from "./dialogs-reducer";
import signInReducer from "./signIn-reducer";
import signUpReducer from "./signUp-reducer";

export let store = {
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
        this.state = otherReducer(this.state, action);
        this.state = asideReducer(this.state, action);
        store = profileReducer(store, action);
        store = dialogsReducer(store, action);
        store = signInReducer(store, action);
        store = signUpReducer(store, action);

        // Rerender app
        this.renderApp();
    },
}

// Other functions
export function findMyAccount(){
    store.users.forEach(item => {
        if(item.id === store.state.myAccount.id){
            item.myAccount = true;
        }
    });
}
export function findUser(id){
    return store.users.find(item => item.id === id);
}

// Activate functions
findMyAccount();
store.dispatch(convertFriendsCreateAction());
store.dispatch(convertProfilesCreateAction());
store.dispatch(convertPostsCreateAction());
store.dispatch(renderMyProfileInfoCreateAction());
store.dispatch(convertMyDialogsCreateAction());
store.dispatch(convertChatsCreateAction());