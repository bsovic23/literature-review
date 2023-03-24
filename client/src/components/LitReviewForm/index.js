import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { MUTATION_ADD_LITENTRY } from '../../utils/mutations';

const LitReviewForm = () => {

    const [ searchTerm, setVar1 ] = useState('');
    const [ project, setVar2 ] = useState('');
    const [ articleSubject, setVar3 ] = useState('');
    const [ articleLink, setVar4 ] = useState('');
    const [ articleDatabase, setVar5 ] = useState('');
    const [ articleYear, setVar6 ] = useState('');
    const [ articleNotes, setVar7 ] = useState('');
    
    
    const [addLitReview, { error }] = useMutation(MUTATION_ADD_LITENTRY);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addLitReview({
                variables: {
                    searchTerm,
                    project,
                    articleSubject,
                    articleLink,
                    articleDatabase,
                    articleYear,
                    articleNotes
                },
            });

            setVar1('');
            setVar2('');
            setVar3('');
            setVar4('');
            setVar5('');
            setVar6('');
            setVar7('');

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
                    value={searchTerm}
                    onChange={(e) => setVar1(e.target.value)}
                />
                <input
                    placeholder='Project'
                    name='project'
                    id='project'
                    value={project}
                    onChange={(e) => setVar2(e.target.value)}
                />
                <input
                    placeholder='Article Subject'
                    name='articleSubject'
                    id='articleSubject'
                    value={articleSubject}
                    onChange={(e) => setVar3(e.target.value)}
                />
                <input
                    placeholder='Article Link'
                    name='articleLink'
                    id='articleLink'
                    value={articleLink}
                    onChange={(e) => setVar4(e.target.value)}
                />
                <input
                    placeholder='Article Database'
                    name='articleDatabase'
                    id='articleDatabase'
                    value={articleDatabase}
                    onChange={(e) => setVar5(e.target.value)}
                />
                <input
                    placeholder='Article Year'
                    name='articleYear'
                    id='articleYear'
                    value={articleYear}
                    onChange={(e) => setVar6(e.target.value)}
                />
                <textarea
                    palceholder='Enter Notes Here'
                    name='articleNotes'
                    id='articleNotes'
                    value={articleNotes}
                    onChange={(e) => setVar7(e.target.value)}
                />
                <button type='submit'>
                    Submit Brit-ature Review
                </button>
            </form>
        </div>
    )
};

export default LitReviewForm;