import { convertNewProfileCreateAction } from "./profile-reducer";
import { findMyAccount } from "./store";

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

const SIGN_UP = "SIGN-UP";
const CLEAR_SIGN_UP_INPUTS = "CLEAR-SIGN-UP-INPUTS";

function signUp(store, action){
    let thisPage = store.state.signUpPage;
    switch(action.type){
        case SIGN_UP: {
            let thisPage = store.state.signUpPage;
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
                error = "?????????????? ??????????";
            } else if(login.length < 6 || login.length > 30){
                error = "?????????? ???????????? 6-30 ????????????????";
            } else if(isHasForbiddenSymbolsInLogin === true){
                error = `?????????? ?????????? ?????????????????? ?????????????????? ?????????????? (A-Z), (a-z), (0-9), (.), (_), (-)`;
            } else if(isHasSpaceInLogin === true){
                error = "?????????? ???? ?????????? ?????????????????? ????????????????";
            } else if(isNotValidFirstCharacterInLogin === true){
                error = "?????????? ???? ?????????? ???????????????????? ?? (-) ?? (.)";
            } else if(email === "") {
                error = "?????????????? Email";
            } else if(email.length > 320){
                error = "?????????? email ???? ???????????? ?????????????????? 320 ????????????????";
            } else if(name === "") {
                error = "?????????????? ??????";
            } else if(name.length < 4 || name.length > 100){
                error = "?????????? ?????????? 4-100 ????????????????";
            } else if(isHasForbiddenSymbolsInName === true){
                error = `?????? ???? ???????????? ?????????????????? ?????????? ?? ?????????????????? ?????????????? ( , : ; ? ! * + % < > @ [ ] { } / \\ " $ # \` . )`;
            } else if(password === "") {
                error = "?????????????? ????????????";
            } else if(password.length < 6 || password.length > 30){
                error = "?????????? ???????????? 6-30 ????????????????";
            } else if(isHasForbiddenSymbolsInPassword === true){
                error = `?????????? ?????????? ?????????????????? ?????????????????? ?????????????? (A-Z), (a-z), (0-9), (.), (_), (-)`;
            } else if(isHasSpaceInPassword === true){
                error = "???????????? ???? ?????????? ?????????????????? ????????????????";
            } else if(isNotValidFirstCharacterInPassword === true){
                error = "???????????? ???? ?????????? ???????????????????? ?? (-) ?? (.)";
            } else if(isHasNumbersInPassword === false){
                error = "???????????? ???????????? ?????????????????? ??????????";
            } else if(isHasLettersInPassword === false){
                error = "???????????? ???????????? ?????????????????? ??????????";
            } else if(confirmPassword === "") {
                error = "?????????????????????? ????????????";
            } else if(password !== confirmPassword){
                error = "???????????? ???? ??????????????????";
            } else {
                let userWithEnteredLogin = store.users.find(item => item.username === login);
                let userWithEnteredEmail = store.users.find(item => item.email === email);

                if(userWithEnteredLogin !== undefined){
                    error = "???????????? ?????????? ?????? ??????????, ???????????????????? ???????????? ??????";
                } else if(userWithEnteredEmail !== undefined){
                    error = "???????????? Email ?????? ??????????????????????????????, ???????????????????? ?????????? ?? ??????????????";
                } else{
                    store.users.find(item => item.myAccount === true).myAccount = false;
                    
                    store.users.push(new User(store.users.length, login, password, email, name));

                    store.state.myAccount.id = store.users[store.users.length - 1].id;
                    findMyAccount()
                    store.dispatch(convertNewProfileCreateAction(store.users[store.users.length - 1].id));

                    error = "";
                    thisPage.signUpLogin = "";
                    thisPage.signUpEmail = "";
                    thisPage.signUpName = "";
                    thisPage.signUpPassword = "";
                    thisPage.signUpConfirmPassword = "";
                }
            }
            thisPage.signUpError = error;

            // Return store
            return store;
        }
        case CLEAR_SIGN_UP_INPUTS: {
            thisPage.signUpLogin = "";
            thisPage.signUpEmail = "";
            thisPage.signUpName = "";
            thisPage.signUpPassword = "";
            thisPage.signUpConfirmPassword = "";
            thisPage.signUpError = "";

            // Return store
            return store;
        }
        default: {
            // Return state
            return store;
        }
    }
}

// Render Actions
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

export default signUp;