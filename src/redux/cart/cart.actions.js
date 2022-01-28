import { CartActionTypes } from './cart.types';
export const toggleCartHidden = () => (
    {
        //We use naming convention for const with snakecase names for action types
        type: CartActionTypes.HIDE_CART_DROPDOWN,
    }
);