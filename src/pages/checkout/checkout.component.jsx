import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import './checkout.styles.scss';


const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Desription</span>
            </div>
            <div className='header-block'>
                <span>Quanity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.length ? (cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />))) 
            : (
            <span className='empty-message'>Your cart is empty</span>
        )}
        <div className='total'>
           <span>Total: ${total}</span>
        </div>
        <div className="test-warning">
           *Please use the following test credit card for Payment*
           <br/>
           4242 4242 42424 4242 - Exp: 01/23 (or any future date) - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartItemsPriceTotal
  });

export default connect(mapStateToProps)(CheckOutPage);