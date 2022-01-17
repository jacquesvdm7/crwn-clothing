import React from 'react';

import './security.styles.scss';
import SignIn from './sign-in.component';
import SignUp from './sign-up.component';

const Security = () => {
    return (
        <div>
           <div className='sign-in-and-sign-up'>Sign-in</div>
           <SignIn></SignIn>
           <SignUp></SignUp>
        </div>
    )
    
};

export default Security;