import React from 'react';

import LitEntryForm from '../components/LitEntryForm';

import Auth from '../utils/auth';

function AddLitEntry() {

    const loggedIn = Auth.loggedIn();

    return(
        <section class="addlitentry">
            ADD LIT ENTRY
            <div>
                {loggedIn && (
                    <div>        
                        <LitEntryForm />
                    </div>
                )}
            </div>
        </section>
    )
};

export default AddLitEntry;