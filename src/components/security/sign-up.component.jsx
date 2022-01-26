import React, { Component } from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';


class SignUp extends Component {
constructor (props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        displayName: '',
        confirmPassword: ''
    }
}

handleSubmit = async event => {
    // prevent default submit handler
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if (password !== confirmPassword)
    {
       alert('Passwords do not match');
       return;
    }

    try {
        const { user} = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user, {displayName});
        this.setState({email: '', password: '', displayName: '', confirmPassword: ''});
    } catch(error) {
       console.log('An error occurred creating user : ', error.message);
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
    const {displayName, email, password, confirmPassword} = this.state;
    return (
        
        <div className='sign-up'>
             <h2>I don't have an account</h2>
             <span>Sign up with your email and password</span>
             <form className='sign-up-form' onSubmit={this.handleSubmit}>
                 <FormInput name='displayName' type='text' value={displayName} required handleChange={this.handleChange} label='Display Name'/>
                 <FormInput name='email' type='email' value={email} required handleChange={this.handleChange} label='Email'/>
                 <FormInput name='password' type='password' value={password} required handleChange={this.handleChange} label='Password'/>
                 <FormInput name='confirmPassword' type='password' value={confirmPassword} required handleChange={this.handleChange} label='Confirm Password'/>
                 <CustomButton type='submit'>SIGN UP</CustomButton>
             </form>
        </div>
    )
}
}

export default SignUp;