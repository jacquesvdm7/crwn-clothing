import React from 'react';

import { SignInAndSignUpContainer } from './security.styles';
import SignIn from './sign-in.component';
import SignUp from './sign-up.component';

const Security = () => {
    return (
        <div>
           <SignInAndSignUpContainer>
               <SignIn></SignIn>
               <SignUp></SignUp>
           </SignInAndSignUpContainer>
        </div>
    )
    
};

export default Security;