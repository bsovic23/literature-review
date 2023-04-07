// use contact email -> britcoding@gmail.com
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_COMMENT } from '../utils/mutations';

function Contact() {

    const [addComment, { error }] = useMutation(MUTATION_ADD_COMMENT);

    const [commentType, setCommentType ] = useState('');
    const [commentBody, setCommentBody ] = useState('');

    // Submit Form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addComment({
                variables: {
                    commentType,
                    commentBody
                },
            });

            setCommentType('');
            setCommentBody('');
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <section class="comment">
            <h1>Contact Form</h1>
            <p>
                Choose what type of comment you are leaving 
                and the comment details in the two fields.

                I will respond to you as quickly as possible.
            </p>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="commentType">Comment Type:</label>
                <select name='commentType' id='commentType'
                    value={commentType} onChange={(e) => setCommentType(e.target.value)}
                >
                    <option value='null'>Select Comment Type</option>
                    <option value='question'>Question</option>
                    <option value='error'>Error</option>
                    <option value='other'>Other</option>
                </select>
                <label htmlFor='commentBody'>Comment Body:</label>
                <textarea
                rows="10"
                cols="40"
                placeholder='Type your comment here'
                name='commentBody'
                id='commentBody'
                type='text'
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                />
                <button type='submit'>
                    Submit Comment
                </button>
            </form>
        </section>
    )
};

export default Contact;