import React from 'react';
//We import this to connect to our reducers
import { connect} from 'react-redux';

//This is special syntax in React for importing SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase-utils';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { 
   HeaderContainer, 
   OptionsContainer,
   OptionLinkContainer,
   LogoContainer } 
   from './header.styles';



// We destruct the currentUser property that was passed to component
const Header = ({currentUser, hideCartDropDown}) => {
    return (
      <HeaderContainer>   
{/* Link to home */}
         <LogoContainer to='/'>
            <Logo className='logo'/>
         </LogoContainer>
         <OptionsContainer >
            <OptionLinkContainer  to='/shop'>
               SHOP
            </OptionLinkContainer>
            <OptionLinkContainer  to='/contact'>
               CONTACT
            </OptionLinkContainer>
            {
               // Example of conditionally showing component
               currentUser ? 
               <OptionLinkContainer  as='dev' onClick={() => auth.signOut()}>SIGN OUT</OptionLinkContainer>
               :
               <OptionLinkContainer  to='/signin'>SIGN IN</OptionLinkContainer>
            }
            <CartIcon/>
         </OptionsContainer>
         {
            hideCartDropDown ? null : <CartDropdown/>
            
         }
         
      </HeaderContainer>
    )

};

//This is how we extract properties from our reducers
//we use an advance method to only destruct currentUser from property user and cart
const mapStateToProps =  createStructuredSelector(
   
   {
      currentUser: selectCurrentUser,
      hideCartDropDown: selectCartHidden
   }
)

//all this below can be replaced with createStructuredSelector like above and can become eveident if we have allot of variables to set
// const mapStateToProps = (state) => (
   
//    {
//       currentUser: selectCurrentUser(state),
//       hideCartDropDown: selectCartHidden(state)
//    }
// )

// We have to now include connect as a higher order compoent
export default connect(mapStateToProps)(Header);