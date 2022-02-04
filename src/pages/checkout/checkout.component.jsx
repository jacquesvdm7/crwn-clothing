import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { 
    CheckoutPageContainer ,
    CheckoutHeaderContainer,
    HeaderBlockContainer ,
    TotalContainer ,
    TestWarningContainer} 
    from "./checkout.styles";


const CheckOutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer >
                <span>Desription</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer >
                <span>Quanity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer >
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.length ? (cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />))) 
            : (
            <span className='empty-message'>Your cart is empty</span>
        )}
        <TotalContainer>
           <span>Total: ${total}</span>
        </TotalContainer>
        <TestWarningContainer className="test-warning">
           *Please use the following test credit card for Payment*
           <br/>
           4242 4242 42424 4242 - Exp: 01/23 (or any future date) - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartItemsPriceTotal
  });

export default connect(mapStateToProps)(CheckOutPage);