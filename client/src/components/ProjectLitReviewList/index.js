import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function ProjectLitReviewList({ currentProject }) {
    const {loading, data } = useQuery(QUERY_PROJECTS);
    const reviews = data?.projects || [];
    console.log(reviews);

    function filterProjects() {
        if (!currentProject) {
            return reviews;
        }
            return reviews.filter(
                (reviews) => reviews.projectName === currentProject
            );
    }

    return(
        <div>
        <h2>Projects Selected:</h2>
        <tr class="table-headers">
                <th>Entered by</th>
                <th>createdAt</th>
                <th>Search Term</th>
                <th>Project</th>
                <th>Article Subject</th>
                <th>Article Link</th>
                <th>Article Database</th>
                <th>Article Year</th>
                <th>Article Notes</th>
        </tr>
        {reviews.length ? (
            <div>
            {filterProjects().map((reviews) => (
            <tr key={reviews.projectLitReview._id} class="table-body">
                <th>{reviews.projectLitReview.username}</th>
                <th>{reviews.projectLitReview.createdAt}</th>
                <th>{reviews.projectLitReview.searchTerm}</th>
                <th>{reviews.projectLitReview.project}</th>
            </tr>       
            ))}
        </div>
        ) : (
            <h3>There are currently no projects</h3>
        )}
        </div>
    )
};

export default ProjectLitReviewList;