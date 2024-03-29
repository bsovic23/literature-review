import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { MUTATION_ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = () =>{

    const [formState, setFormState] = useState({ username: '', email: '', password: ''});

    const [addUser, { error }] = useMutation(MUTATION_ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Submit Form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
    try {
    
    const { data } = await addUser({
      variables: { ...formState }
    });

    Auth.login(data.addUser.token);
    window.location.href = '/home';

    } catch (e) {
        console.error(e);
    }
    };

    return(
        <section class="signup">
            <div class="signup-card">
                <h2>SIGN UP</h2>
                <div class="form-container">
                    <form class="signup-form" onSubmit={handleFormSubmit}>
                        <input
                            type='text'
                            placeholder='Username'
                            name='username'
                            value={formState.username}
                            onChange={handleChange}
                            autoComplete='off' 
                        />
                        <input
                            type='text'
                            placeholder='Email'
                            name='email'
                            value={formState.email}
                            onChange={handleChange}
                            autoComplete='off' 
                        />
                        <input
                            type='text'
                            placeholder='Password'
                            name='password'
                            value={formState.password}
                            onChange={handleChange}
                            autoComplete='off' 
                        />
                        <button type="submit" class="signup-form-btn">
                            Sign Up
                        </button>
                    </form>
                    {error && <div>Sign up failed</div>}
                </div>
            </div>
        </section>
    )
};

export default SignUp;