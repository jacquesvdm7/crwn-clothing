import React, { Component } from 'react';

import { SignInContainer } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase-utils';
import { auth} from '../../firebase/firebase-utils';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: ''
        }

    }

    handleSubmit = async event => {
        // prevent default submit handler
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});
        } catch(error) {
           alert('Unable to signin : ', error.message);
        }
    }

    handleChange = event => {
        // prevent default submit handler
        event.preventDefault();
        //this dynamicall sets whatever field change, can either be email or password
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    

    render () {
        return (
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                    <div className='buttons'>
                       <CustomButton type='submit'>SIGN IN</CustomButton>
                       <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>SIGN IN with Google</CustomButton>
                    </div>
                    
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;