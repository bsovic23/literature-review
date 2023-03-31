import React, { useState } from 'react';

import ProjectsMenu from '../components/ProjectsMenu';
import ProjectsList from '../components/ProjectsList';

function Projects() {

    const [currentProject, setProject] = useState('');

    return(
        <section>
            <div>
                <h1>Projects</h1>
            </div>
            <div>
                <ProjectsMenu setProject={setProject} />
                <ProjectsList currentProject={currentProject} />
            </div>
        </section>
    )
};

export default Projects;