import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_PROJECT } from '../utils/mutations';

function AddProject() {

    const [ projectName, setProjectName] = useState('');
    const [ projectDetails, setProjectDetails] = useState('');
    const [ projectType, setProjectType] = useState('');
    const [projectFieldList, setProjectFieldList] = useState([{ projectField: "" }]);

    const [addProject, { error }] = useMutation(MUTATION_ADD_PROJECT);    

    const handleProjectFieldChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...projectFieldList];
        list[index][name] = value;
        setProjectFieldList(list);
    }

    const handleAddProjectField = () => {
        setProjectFieldList([...projectFieldList, { projectField: ""}])
    };

    const handleRemoveProjectField = (index) => {
        const list = [...projectFieldList];
        list.splice(index, 1);
        setProjectFieldList(list);
    };

    // Submit Form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addProject({
                variables: {
                    projectName,
                    projectDetails,
                    projectType,
                    projectFieldList
                },
            });

            setProjectName('');
            setProjectDetails('');
            setProjectType('');
            setProjectFieldList([{ projectField: "" }]);

        } catch (e) {
            console.log(e);
        }
    };

    return(
        <section class="add-project-form">
            <h1>Add a Project Below</h1>
            <p>Below you will fill out the project details as well as create the project outline structure</p>
            <form onSubmit={handleFormSubmit}>
                <div class='project-input-field'>
                    <label htmlFor='projectName'>Project Name:</label>
                    <input
                    placeholder='project name'
                    id='projectName'
                    name='projectName'
                    type='text'
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>
                <div class='project-input-field'>
                    <label htmlFor='projectDetails'>What are the details of the project:</label>
                    <input
                    placeholder='project details'
                    id='projectDetails'
                    name='projectDetails'
                    type='text'
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    />
                </div>
                <div class='project-input-field'>
                    <label htmlFor='projectType'>What type of project is this:</label>
                    <input
                    placeholder='project type'
                    id='projectType'
                    name='projectType'
                    type='text'
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    />
                </div>
                <p>Create the structure of the lit review below</p>
                <div>
                    <form id='project-outline'>
                        {projectFieldList.map((field, index) => (
                            <div key={index}>
                                <div>
                                    <label>Field Name:</label>
                                    <input
                                        type='text'
                                        placeholder='type field here'
                                        name='projectField'
                                        id='projectField'
                                        value={field.projectField}
                                        onChange={(e) => handleProjectFieldChange(e, index)}
                                    />
                                    {projectFieldList.length > 1 && (
                                        <button 
                                            type='button' 
                                            class='remove-btn'
                                            onClick={() => handleRemoveProjectField(index)}
                                        >
                                            Remove Field
                                        </button>
                                    )}
                                </div>
                                {projectFieldList.length - 1 === index && (
                                    <button 
                                        type='button' 
                                        class='add-btn'
                                        onClick={handleAddProjectField}
                                    >
                                        + Add Additional Field
                                    </button>
                                )}
                            </div>
                        ))}
                    </form>
                </div>
                <button type='submit'>
                    SUBMIT PROJECT
                </button>
            </form>
            {error && <div>You must be logged in to create a new project</div>}
        </section>
    )
};

export default AddProject;