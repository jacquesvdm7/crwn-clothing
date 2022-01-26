import React from 'react';
import { Link } from 'react-router-dom';
//This is special syntax in React for importing SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase-utils';

import './header.styles.scss';

// We destruct the currentUser property that was passed to component
const Header = ({currentUser}) => {
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
               currentUser ? 
               <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
               :
               <Link className='option' to='/signin'>SIGN IN</Link>
            }
         </div>
      </div>
    )

};

export default Header;