import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function ProjectMenu({ setProject }) {

    const { data: projectData } = useQuery(QUERY_PROJECTS);
    const projects = projectData?.projects || [];

    return(
        <section>
            <div>
                <h1>Click a button below to select a project and its related literature reviews</h1>
            </div>
            <div>
                {projects.map((item) => (
                    <button 
                    key={item._id}
                    onClick={() => {
                        setProject(item.projectName);
                    }}
                    >
                    {item.projectName}
                    </button>
                ))}
            </div>
        </section>
    )
};

export default ProjectMenu;