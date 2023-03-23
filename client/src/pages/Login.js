import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { MUTATION_LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ username: '', password: ''});

    const [login, { error }] = useMutation(MUTATION_LOGIN);
    
    // Updating form
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: {...formState}
            });

        Auth.login(data.login.token);
        
        } catch (e) {
            console.error(e);
        }
    };

    return(
        <section class="login">
            <div class="login-header">
                <h1>LOGIN</h1>
            </div>
            <div class="login-form">
                <form onSubmit={handleFormSubmit}>
                    <input
                    placeholder='Your username'
                    name= 'username'
                    type= 'text'
                    id= 'username'
                    value= {formState.username}
                    onChange={handleChange}                    
                    />
                    <input
                    placeholder='********'
                    name= 'password'
                    type= 'password'
                    id= 'password'
                    value= {formState.password}
                    onChange={handleChange}                    
                    />
                    <button type="submit" class="login-form-btn">
                        Login
                    </button>
                </form>
                {error && <div>Login failed</div>}
            </div>
        </section>
    )
};

export default Login;