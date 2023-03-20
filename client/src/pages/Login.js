import React, { useState } from 'react';

const Login = (props) => {
    const [formState, setFormState] = useState({ username: '', password: ''});
    
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

        setFormState({
            username: '',
            password: '',
        });
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
            </div>
        </section>
    )
};

export default Login;