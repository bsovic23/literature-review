import React, { useState } from 'react';
import ProjectMenu from '../components/ProjectMenu';
import ProjectLitReviewList from '../components/ProjectLitReviewList';

const Project = () => {
    const [currentProject, setProject] = useState('');

    return(
        <section>
            <div>
                <h1>All Projects</h1>
            </div>
            <div>
                <ProjectMenu setProject={setProject} />
                <ProjectLitReviewList currentProject={currentProject} />
            </div>
        </section>
    )
};

export default Project;