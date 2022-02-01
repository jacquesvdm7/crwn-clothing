// This is an exampl to find something in an array and return some new value whne found or not
export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if (existingCartItem)
    {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
            :  cartItem 
            );
    }

    return [...cartItems, { ...cartItemsToAdd, quantity: 1}]
};

//Filter out the id we want to delete
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return  cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};

export const reduceItemFromCart = (cartItems, cartItemToReduce) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToReduce.id);

    if (existingCartItem)
    {
        if (existingCartItem.quantity === 1)
        {
                return removeItemFromCart(cartItems, cartItemToReduce);
        }
        else
        {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToReduce.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
                :  cartItem 
                );
        }
    }

    
    
};