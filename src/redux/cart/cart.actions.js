import { CartActionTypes } from './cart.types';
export const toggleCartHidden = () => (
    {
        //We use naming convention for const with snakecase names for action types
        type: CartActionTypes.HIDE_CART_DROPDOWN
    }

);

export const addItemToCart = (item) => (
    {
        type: CartActionTypes.ADD_TO_CART,
        payload: item
    })

export const removeItemFromCart = (item) => (
    {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: item
    })

export const reduceItemQuantity = (item) => (
    {
        type: CartActionTypes.REDUCE_CART_QTY,
        payload: item
    })