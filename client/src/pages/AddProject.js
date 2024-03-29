import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_PROJECT } from '../utils/mutations';

// Component Imports
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function AddProject() {

    // Project Set Up Fields
    const [projectName, setProjectName] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectMembersList, setProjectMembersList] = useState([{ memberField: "" }]);
    const [projectSuggestedFields, setProjectSuggestedFields] = useState([]);
    const [projectFieldList, setProjectFieldList] = useState([{ projectField: "" }]);

    const [addProject, { error }] = useMutation(MUTATION_ADD_PROJECT); 

    // Add User Access to Project
    const handleProjectMemberChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...projectMembersList];
        list[index][name] = value;
        setProjectMembersList(list);
    }

    const handleAddProjectMember = () => {
        setProjectMembersList([...projectMembersList, { memberField: "" }]);
    };

    // Remove User Access to Project
    const handleRemoveProjectMember = (index) => {
        const list = [...projectMembersList];
        list.splice(index, 1);
        setProjectMembersList(list);
    }

    // Handle Project Suggested Fields
    const handleCheckboxChange = (field) => {
        const isSelected = projectSuggestedFields.includes(field);

        if (isSelected) {
            setProjectSuggestedFields(projectSuggestedFields.filter((f) => f !== field));
        } else {
            setProjectSuggestedFields([...projectSuggestedFields, field]);
        }
    };

    // Add Custom Project Fields
    const handleProjectFieldChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...projectFieldList];
        list[index][name] = value;
        setProjectFieldList(list);
    }

    const handleAddProjectField = () => {
        setProjectFieldList([...projectFieldList, { projectField: ""}])
    };

    // Remove Custom Project Fields
    const handleRemoveProjectField = (index) => {
        const list = [...projectFieldList];
        list.splice(index, 1);
        setProjectFieldList(list);
    };

    // Submit Project Form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addProject({
                variables: {
                    projectName,
                    projectDetails,
                    projectType,
                    projectMembers: projectMembersList.map(field => ({ fieldName: field.projectMemberUsername })),
                    projectSuggestedFields,
                    projectLitReviewOutline: projectFieldList.map(field => ({ fieldName: field.projectField }))
                },
            });

            setProjectName('');
            setProjectDetails('');
            setProjectType('');
            setProjectMembersList([{ memberField: "" }]);
            setProjectSuggestedFields([]);
            setProjectFieldList([{ projectField: "" }]);

        } catch (e) {
            console.log(e);
        }
    };

    return(
        <section class='page' id="add-project-form">
            <Header />
            <div class='flexbox'>
                <div>
                    <Sidebar />
                </div>
                <div>
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
                        <p>Add Usernames of all members that need access to the project</p>
                        <div>
                            <form>
                                {projectMembersList.map((field, index) => (
                                    <div key={index}>
                                        <div>
                                            <label>Username:</label>
                                            <input
                                                type='text'
                                                placeholder='type username here'
                                                name='projectMemberUsername'
                                                id='projectMemberUsername'
                                                value={field.projectMemberUsername}
                                                onChange={(e) => handleProjectMemberChange(e, index)}
                                            />
                                            {projectMembersList.length > 1 && (
                                                <button
                                                    type='button'
                                                    class='remove-btn'
                                                    onClick={() => handleRemoveProjectMember(index)}
                                                >
                                                    Remove Project Member
                                                </button>
                                            )}
                                        </div>
                                        {projectMembersList.length - 1 === index && (
                                            <button
                                                type='button'
                                                class='add-button'
                                                onClick={handleAddProjectMember}    
                                            >
                                                + Add Additional Project User
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </form>
                        </div>
                        <div>
                            Suggested Fields to include below. Select suggested fields you do wish to include
                        </div>
                        <div>
                            <label>
                                <input
                                    type='checkbox'
                                    value='Search Term'
                                    checked={projectSuggestedFields.includes('Search Term')}
                                    onChange={() => handleCheckboxChange('Search Term')}
                                />
                                Search Term
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    value='Article Link'
                                    checked={projectSuggestedFields.includes('Article Link')}
                                    onChange={() => handleCheckboxChange('Article Link')}
                                />
                                Article Link
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    value='Article Subject'
                                    checked={projectSuggestedFields.includes('Article Subject')}
                                    onChange={() => handleCheckboxChange('Article Subject')}
                                />
                                Article Subject
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    value='Article Database'
                                    checked={projectSuggestedFields.includes('Article Database')}
                                    onChange={() => handleCheckboxChange('Article Database')}
                                />
                                Article Database
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    value='Article Year'
                                    checked={projectSuggestedFields.includes('Article Year')}
                                    onChange={() => handleCheckboxChange('Article Year')}
                                />
                                Article Year
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    value='Article Source Type'
                                    checked={projectSuggestedFields.includes('Article Source Type')}
                                    onChange={() => handleCheckboxChange('Article Source Type')}
                                />
                                Article Source Type
                            </label>
                            <label>
                                <input
                                    type='checkbox'
                                    value='Article Notes'
                                    checked={projectSuggestedFields.includes('Article Notes')}
                                    onChange={() => handleCheckboxChange('Article Notes')}
                                />
                                Article Notes
                            </label>
                        </div>
                        <p>Create Custom Project Fields Below</p>
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
                </div>
            </div>
            <Footer />
        </section>
    )
};

export default AddProject;