import React, { useState } from 'react';

const Login = (props) => {
    const [formState, setFormState] = useState({ username: '', password: ''});
    return(
        <section>
            <div>
                <h1>LOGIN</h1>
            </div>
            <div>
                <form>
                    <p>Choice 1</p>
                </form>
            </div>
        </section>
    )
};

export default Login;