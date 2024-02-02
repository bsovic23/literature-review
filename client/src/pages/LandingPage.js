import React, { useState } from 'react';

// Component Imports
import Login from './Login';
import SignUp from './SignUp';

const LandingPage = () => {

    // Blank, Login, or Sign Up View
    const [formView, setFormView] = useState('');

    return(
        <section id='landing-page'>
            <div>
                <h1>Brit-ature Review</h1>
                <div>
                    <button onClick={() => setFormView("login")}>
                        Login
                    </button>
                    <button onClick={() => setFormView("signup")}>
                        Sign Up
                    </button>
                </div>
            </div>
            <div>
                {formView === 'login' ? (
                    <div>
                        < Login />
                    </div>
                ) : formView === 'signup' ? (
                    <div>
                        < SignUp />
                    </div>
                ) : null}
            </div>
            <div>
                Slide show of examples
            </div>
        </section>
    )
};

export default LandingPage;