import React from "react";

import { CartItemConainer, ImageContainer, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({item: {name, price, imageUrl, quantity}}) => {
    return (
    <CartItemConainer className='cart-item'>
       <ImageContainer src={imageUrl} alt='item'/>
       <ItemDetailsContainer className='item-details'>
           <span className='name'>{name}</span>
           <span className='price'>{quantity} x $ {price}</span>
       </ItemDetailsContainer> 
   </CartItemConainer>

)};

export default CartItem;