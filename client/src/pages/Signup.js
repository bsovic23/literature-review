import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { MUTATION_ADD_USER, MUTATION_LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () =>{

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

    } catch (e) {
        console.error(e);
    }
    };

    return(
        <section class="signup">
            <div class="signup-card">
                <h2>Sign Up</h2>
                <div>
                    <form class="signup-form" onSubmit={handleFormSubmit}>
                        <input
                            placeholder='Username'
                            name='username'
                            id='username'
                            value={formState.username}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Email'
                            name='email'
                            id='email'
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='********'
                            name='password'
                            id='password'
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button type='submit'>
                            SUBMIT
                        </button>
                    </form>
                    {error && <div>Sign up failed</div>}
                </div>
            </div>
        </section>
    )
};

export default Signup;