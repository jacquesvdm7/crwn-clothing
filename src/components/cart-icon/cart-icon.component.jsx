import React from "react";

import { connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHiddenFlag, itemCount}) =>  (
    <div className="cart-icon" onClick={toggleCartHiddenFlag}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
        
    </div>
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
