const INITIAL_STATE = {
    currentUser: null
}

// state = INITIAL_STATE, this is an ES6 function to give state an initial value if its null
const userReducer = (state = INITIAL_STATE ,action) => {

    switch (action.type)
    {
        case 'SET_CURRENT_USER':
            return {
                // We spread all values currently on state
            ...state,
            currentUser: action.payload
            };
        default:
            return state;
    }


}

export default userReducer;