import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

// state = INITIAL_STATE, this is an ES6 function to give state an initial value if its null
const cartReducer = (state = INITIAL_STATE ,action) => {

    switch (action.type)
    {
        case CartActionTypes.HIDE_CART_DROPDOWN:
            return {
                // We spread all values currently on state
            ...state,
            //Toggle between true and false
            hidden: !state.hidden
            };
        default:
            return state;
    }


}

export default cartReducer;