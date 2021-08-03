const EDIT_INPUT_VALUE = "EDIT-INPUT-VALUE";

function otherReducer(state, action){
    switch(action.type){
        case EDIT_INPUT_VALUE: { // { type: "", page: "", input: "", value: "" } //
            let thisPage = state[action.page];
            thisPage[action.input] = action.value;

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
export function editInputValueCreateAction(page, input, value){
    return{
        type: EDIT_INPUT_VALUE,
        page: page,
        input: input,
        value: value
    };
}

export default otherReducer;