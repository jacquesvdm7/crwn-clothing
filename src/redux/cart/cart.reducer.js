import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart , reduceItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
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
        case CartActionTypes.ADD_TO_CART:
            return {
                // We spread all values currently on state
            ...state,
            //This is how we can add more items to an array
            //we spread the exisitng values and then add the new one
            cartItems: addItemToCart(state.cartItems,action.payload)
            };
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                // We spread all values currently on state
            ...state,
            //This is how we can remove items from an array
            //we spread the exisitng values and then add the new one
            cartItems: removeItemFromCart(state.cartItems,action.payload)
            };
        case CartActionTypes.REDUCE_CART_QTY:
            return {
                // We spread all values currently on state
            ...state,
            //This is how we can update items in an array
            //we spread the exisitng values and then add the new one
            cartItems: reduceItemFromCart(state.cartItems,action.payload)
            };
        default:
            return state;
    }


}

export default cartReducer;