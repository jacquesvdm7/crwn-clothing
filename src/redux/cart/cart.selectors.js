// We are going to add reusable redux components here for cart
import  { createSelector } from 'reselect';

//Input selector
//select part of the state (just the cart state)
const selectCart = state => state.cart;

//createSelector(array,callBackFunction)
//This is now considered a memoized selector
// Memoization is remebering the result of a calculation with th same paramaters so it does not need to be done again (caching result with specific paramters)
//createSelector([inputSlectors], fucntion to perform)
export const selectCartItems= createSelector(
    [selectCart], 
    cart => cart.cartItems 
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

// reduce() is an array method
// the result of reduce is one value
// reduce((accumulator, currentrElement) => the_operatation we want to perform ), initial value)
// This will iterate through the array staring at element 0 and pass the elment as cuurentElement plus the accumulatyed value which would start as 0 as per the default
// each time the process iterates it will re-render the component which in effect updates the item-count above
// itemCount: cartItems.reduce((accumulatedQuanity, cartItem) => accumulatedQuanity + cartItem.quantity, 0)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
       cartItems.reduce(
           (accumulatedQuanity, cartItem) => 
               accumulatedQuanity + cartItem.quantity, 
               0
        )

);

export const selectCartItemsPriceTotal = createSelector(
    [selectCartItems],
    cartItems => 
       cartItems.reduce(
           (accumulatedTotal, cartItem) => 
           accumulatedTotal + (cartItem.price * cartItem.quantity), 
               0
        )

);

