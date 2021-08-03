import { findUser } from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const CONVERT_MY_DIALOGS = "CONVERT-MY-DIALOGS";
const CONVERT_CHATS = "CONVERT-CHATS";

function dialogsReducer(store, action){
    let thisPage = store.state.dialogsPage;
    switch(action.type){
        case ADD_MESSAGE: { // { type: "", chatId: 0, isMyMessage: true, message: "" }
            if(action.message.trim() !== "" && typeof(action.chatId) === "number" && typeof(action.isMyMessage) === "boolean"){
                let index = thisPage.dialogs.findIndex(item => item.id === action.chatId);
                thisPage.chats[index].messages.push({
                    id: thisPage.chats[index].messages.length,
                    isMyMessage: action.isMyMessage,
                    message: action.message.trim(),
                });
                thisPage.newMessageText = "";
            }

            // Return store
            return store;
        }
        case CONVERT_MY_DIALOGS: { // { type: "" }
            thisPage.dialogs = store.state.myAccount.myDialogs.map(element  => {
                return findUser(element);
            });
            
            // Return store
            return store;
        }
        case CONVERT_CHATS: { // { type: "" }
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

export default dialogsReducer;