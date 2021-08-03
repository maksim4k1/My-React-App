import { findUser } from "./store";

const CONVERT_FRIENDS = "CONVERT-FRIENDS";

function asideReducer(state, action){
    switch(action.type){
        case CONVERT_FRIENDS: { // { type: "" }
            state.sidebar.friends = [];
            for(let i = 0; i < 5; i++){
                state.sidebar.friends.push(findUser(state.myAccount.myFriends[i]));
            }
            state.sidebar.friends.push({id: 0, username: "Add", image: "https://www.freepnglogos.com/uploads/plus-icon/add-plus-icon-28.png"});

            // Return state
            return state;
        }
        default: {
            // Return state
            return state;
        }
    }
}

// Render Actions
export function convertFriendsCreateAction(){
    return{
        type: CONVERT_FRIENDS
    };
}

export default asideReducer;