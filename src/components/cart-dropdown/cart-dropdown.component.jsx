import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageSpan, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer >
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageSpan >Your cart is empty</EmptyMessageSpan>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//if we do not pass dispatch as second paramter connect will create a dispatch property for us like this example, see line 28
export default withRouter(connect(mapStateToProps)(CartDropdown));