import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { MUTATION_LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {

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
        window.location.href = '/home';
        
        } catch (e) {
            console.error(e);
        }
    };

    return(
        <section class="login">
            <div class="login-card">
                <h2>LOGIN</h2>
                <div class='form-container'>
                    <form class="login-form" onSubmit={handleFormSubmit}>
                        <input
                            type= 'text'
                            placeholder='Your username'
                            name= 'username'
                            value= {formState.username}
                            onChange={handleChange}
                            autoComplete='off'                    
                        />
                        <input
                            placeholder='Password'
                            name= 'password'
                            type= 'password'
                            id= 'password'
                            value= {formState.password}
                            onChange={handleChange}
                            autoComplete='off'                     
                        />
                        <button type="submit" class="login-form-btn">
                            Login
                        </button>
                    </form>
                    {error && <div>Login failed</div>}
                </div>
            </div>
        </section>
    )
};

export default Login;