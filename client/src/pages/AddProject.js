import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_PROJECT } from '../utils/mutations';

function AddProject() {

    const [ projectName, setProjectName] = useState('');
    const [ projectDetails, setProjectDetails] = useState('');
    const [ projectType, setProjectType] = useState('');

    const [addProject, { error }] = useMutation(MUTATION_ADD_PROJECT);

    // Submit Form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addProject({
                variables: {
                    projectName,
                    projectDetails,
                    projectType
                },
            });

            setProjectName('');
            setProjectDetails('');
            setProjectType('');

        } catch (e) {
            console.log(e);
        }
    };

    return(
        <section class="add-project-form">
            <h1>Add a Project Below</h1>
            <form onSubmit={handleFormSubmit}>
            <label htmlFor='projectName'>Project Name:</label>
            <input
            placeholder='project name'
            id='projectName'
            name='projectName'
            type='text'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            />
            <label htmlFor='projectDetails'>What are the details of the project</label>
            <input
            placeholder='project details'
            id='projectDetails'
            name='projectDetails'
            type='text'
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            />
            <label htmlFor='projectType'>What type of project is this:</label>
            <input
            placeholder='project type'
            id='projectType'
            name='projectType'
            type='text'
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            />
            <button type='submit'>
                SUBMIT
            </button>
            </form>
            {error && <div>You must be logged in to create a new project</div>}
        </section>
    )
};

export default AddProject;