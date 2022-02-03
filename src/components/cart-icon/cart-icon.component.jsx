import React from "react";

import { connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIconContainer ,ItemCountSpan } from "./cart-icon.styles"; 

const CartIcon = ({toggleCartHiddenFlag, itemCount}) =>  (
    <CartIconContainer onClick={toggleCartHiddenFlag}>
        <ShoppingIconContainer/>
        <ItemCountSpan>{itemCount}</ItemCountSpan>
        
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => 
(
    {
        toggleCartHiddenFlag: () => dispatch(toggleCartHidden())
    }
)

//We replace the above with cart.selector component in redux folder
const mapStatetoProps = createStructuredSelector
(
    {
        itemCount: selectCartItemsCount
    }
)

export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);
