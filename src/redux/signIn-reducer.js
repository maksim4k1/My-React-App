import { findMyAccount } from "./store";

const SIGN_IN = "SIGN-IN";
const CLEAR_SIGN_IN_INPUTS = "CLEAR-SIGN-IN-INPUTS";

function signIn(store, action){
    let thisPage = store.state.signInPage
    switch(action.type){
        case SIGN_IN: {
            let login = thisPage.signInLogin.trim();
            let password = thisPage.signInPassword.trim();
            let error = thisPage.signInError;

            if(login === ""){
                error = "Введите логин";
            } else if(password === ""){
                error = "Введите пароль";
            } else{
                let user = store.users.find(item => item.username === login && item.password === password);
                if(user === undefined) user = store.users.find(item => item.email === login && item.password === password);

                if(user === undefined){
                    error = "Пользователь не найден, попробуйте снова";
                } else{
                    store.users[store.state.myAccount.id].myAccount = false;
                    store.state.myAccount.id = user.id;
                    findMyAccount();

                    error = "";
                    thisPage.signInLogin = "";
                    thisPage.signInPassword = "";
                }
            }
            thisPage.signInError = error;

            // Return store
            return store;
        }
        case CLEAR_SIGN_IN_INPUTS: {
            thisPage.signInLogin = "";
            thisPage.signInPassword = "";
            thisPage.signInError = "";

            // Return store
            return store;
        }
        default: {
            // Return store
            return store;
        }
    }
}

// Render Actions
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

export default signIn;