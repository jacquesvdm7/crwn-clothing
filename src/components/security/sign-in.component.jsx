import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: ''
        }

    }

    handleSubmit = event => {
        // prevent default submit handler
        event.preventDefault();
        this.setState({email: '', password: ''});
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
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                </form>
            </div>
        )
    }
}

export default SignIn;