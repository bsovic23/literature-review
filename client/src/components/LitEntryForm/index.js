import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { MUTATION_ADD_LITENTRY } from '../../utils/mutations';

import Auth from '../../utils/auth';

const LitEntryForm = () => {

    const loggedIn = Auth.loggedIn();

    const [ formState, setFormState ] = useState({
        searchTerm: '',
        project: '',
        articleSubject: '',
        articleLink: '',
        articleDatabase: '',
        articleYear: '',
        articleNotes: ''
    });
    
    const [addLitReview, { error }] = useMutation(MUTATION_ADD_LITENTRY);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addLitReview({
                variables: {...formState}
            });

            Auth.login(data.addLitReview.token);

        } catch (e) {
            console.error(e);
        }
    };

    return(
        <div>
            <form class="litreview-form" onSubmit={handleFormSubmit}>
                <input
                    placeholder='Search Term'
                    name='searchTerm'
                    id='searchTerm'
                    value={formState.searchTerm}
                    onChange={handleChange}
                />
                <input
                    placeholder='Project'
                    name='project'
                    id='project'
                    value={formState.project}
                    onChange={handleChange}
                />
                <input
                    placeholder='Article Subject'
                    name='articleSubject'
                    id='articleSubject'
                    value={formState.articleSubject}
                    onChange={handleChange}
                />
                <input
                    placeholder='Article Link'
                    name='articleLink'
                    id='articleLink'
                    value={formState.articleLink}
                    onChange={handleChange}
                />
                <input
                    placeholder='Article Database'
                    name='articleDatabase'
                    id='articleDatabase'
                    value={formState.articleDatabase}
                    onChange={handleChange}
                />
                <input
                    placeholder='Article Year'
                    name='articleYear'
                    id='articleYear'
                    value={formState.articleYear}
                    onChange={handleChange}
                />
                <textarea
                    palceholder='Enter Notes Here'
                    name='articleNotes'
                    id='articleNotes'
                    value={formState.articleNotes}
                    onChange={handleChange}
                />
                <button type='submit'>
                    Submit Brit-ature Review
                </button>
            </form>
        </div>
    )
};

export default LitEntryForm;