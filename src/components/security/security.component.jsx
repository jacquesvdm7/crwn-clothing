import React from 'react';

import './security.styles.scss';
import SignIn from './sign-in.component';
import SignUp from './sign-up.component';

const Security = () => {
    return (
        <div>
           <div className='sign-in-and-sign-up'>
               <SignIn></SignIn>
               <SignUp></SignUp>
           </div>
        </div>
    )
    
};

export default Security;