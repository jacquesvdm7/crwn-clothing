import React, { Component } from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';

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

handleSubmit = event => {
    // prevent default submit handler
    event.preventDefault();
    this.setState({email: '', password: '', displayName: '', confirmPassword: ''});
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
        <div className='sign-up'>
             <h2>I don't have an account</h2>
             <span>Sign up with your email and password</span>
             <form onSubmit={this.handleSubmit}>
                 <FormInput name='displayName' type='text' value={this.state.displayName} required handleChange={this.handleChange} label='Display Name'/>
                 <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                 <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                 <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword} required handleChange={this.handleChange} label='Confirm Password'/>
             </form>
        </div>
    )
}
}

export default SignUp;