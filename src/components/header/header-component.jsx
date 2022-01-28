import React from 'react';
//We import this to connect to our reducers
import { connect} from 'react-redux';

import { Link } from 'react-router-dom';
//This is special syntax in React for importing SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase-utils';

import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';



// We destruct the currentUser property that was passed to component
const Header = ({currentUser, hideCartDropDown}) => {
    return (
      <div className='header'>   

         {/* Link to home */}
         <Link className='logo-container' to='/'>
            <Logo className='logo'/>
         </Link>
         <div className='options'>
            <Link className='option' to='/shop'>
               SHOP
            </Link>
            <Link className='option' to='/contact'>
               CONTACT
            </Link>
            {
               // Example of conditionally showing component
               currentUser ? 
               <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
               :
               <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
         </div>
         {
            hideCartDropDown ? null : <CartDropdown/>
            
         }
         
      </div>
    )

};

//This is how we extract properties from our reducers
//we use an advance method to only destruct currentUser from property user and cart
const mapStateToProps = ({user: {currentUser}, cart: { hidden}}) => (
   {
      currentUser: currentUser,
      hideCartDropDown: hidden
   }
)

// We have to now include connect as a higher order compoent
export default connect(mapStateToProps)(Header);