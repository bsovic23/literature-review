import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { MUTATION_ADD_LITENTRY } from '../../utils/mutations';
import { QUERY_LITREVIEWS, QUERY_ME  } from '../../utils/queries';

const LitReviewForm = () => {

    const [ searchTerm, setVar1 ] = useState('');
    const [ project, setVar2 ] = useState('');
    const [ articleSubject, setVar3 ] = useState('');
    const [ articleLink, setVar4 ] = useState('');
    const [ articleDatabase, setVar5 ] = useState('');
    const [ articleYear, setVar6 ] = useState('');
    const [ articleSourceType, setVar7 ] = useState('');
    const [ articleNotes, setVar8 ] = useState('');
    
    
    const [addLitReview, { error }] = useMutation(MUTATION_ADD_LITENTRY, {
        update(cache, { data: { addLitReview } }) {
      
          try {
            // update me array's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: { ...me, litReviews: [...me.litReviews, addLitReview] } },
            });
          } catch (e) {
            console.warn("First thought insertion by user!")
          }
      
          // update thought array's cache
          const { litReviews } = cache.readQuery({ query: QUERY_LITREVIEWS });
          cache.writeQuery({
            query: QUERY_LITREVIEWS,
            data: { litReviews: [addLitReview, ...litReviews] },
          });
        }
      });

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
                    articleSourceType,
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
            setVar8('');

        } catch (e) {
            console.error(e);
        }
    };

    return(
        <div>
            <form class="litreview-form" onSubmit={handleFormSubmit}>
                <div class='lit-form-input'>
                    <label for='searchTerm'>Enter the search term you used for this literature review:</label>
                    <input
                        placeholder='Search Term'
                        name='searchTerm'
                        id='searchTerm'
                        value={searchTerm}
                        onChange={(e) => setVar1(e.target.value)}
                    />
                </div>
                <div class='lit-form-input'>
                <label htmlFor='project'>What project are you assigning this literature review for:</label>
                <input
                    placeholder='Project'
                    name='project'
                    id='project'
                    value={project}
                    onChange={(e) => setVar2(e.target.value)}
                />
                </div>
                <div class='lit-form-input'>
                <label htmlFor='articleSubject'>What is the subject of the literature reivew:</label>
                <input
                    placeholder='Article Subject'
                    name='articleSubject'
                    id='articleSubject'
                    value={articleSubject}
                    onChange={(e) => setVar3(e.target.value)}
                />
                </div>
                <div class='lit-form-input'>
                <label htmlFor='articleLink'>What is the link to the literature review:</label>
                <input
                    placeholder='Article Link'
                    name='articleLink'
                    id='articleLink'
                    value={articleLink}
                    onChange={(e) => setVar4(e.target.value)}
                />
                </div>
                <div class='lit-form-input'>
                <label htmlFor='articleDatabase'>What database did you get the literature review from</label>
                <input
                    placeholder='Article Database'
                    name='articleDatabase'
                    id='articleDatabase'
                    value={articleDatabase}
                    onChange={(e) => setVar5(e.target.value)}
                />
                </div>
                <div class='lit-form-input'>
                <label htmlFor='articleyear'>What year was the article published</label>
                <input
                    placeholder='Article Year'
                    name='articleYear'
                    id='articleYear'
                    value={articleYear}
                    onChange={(e) => setVar6(e.target.value)}
                />
                </div>
                <div class='lit-form-input'>
                    <label htmlFor='articleSourceType'>Article Source Type:</label>
                    <select name='articleSourceType' id='articleSourceType'
                    value={articleSourceType} onChange={(e) => setVar7(e.target.value)}
                    >
                        <option value='Peer Reviewed Journal Article'>Peer Reviewed Journal Article</option>
                        <option value='Academic Book'>Academic Book</option>
                        <option value='Article in Professional Journal'>Article in Professional Journal</option>
                        <option value='Government Website'>Government Website</option>
                        <option value='General Website'>General Website</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div class='lit-form-input'>
                <label htmlFor='articleNotes'>Enter any notes regarding the literature review here</label>
                <textarea
                    placeholder='Enter Notes Here'
                    rows="10"
                    cols="40"
                    name='articleNotes'
                    id='articleNotes'
                    value={articleNotes}
                    onChange={(e) => setVar8(e.target.value)}
                />
                </div>
                <button type='submit' class="litreview-form-btn">
                    Submit Brit-ature Review
                </button>
            </form>
        </div>
    )
};

export default LitReviewForm;