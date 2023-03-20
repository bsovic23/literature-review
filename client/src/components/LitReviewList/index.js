import React from 'react';

const LitReviewList = ({ litReviews, title }) => {
    if (!litReviews.length) {
        return <h3>There are no lit reviews yet</h3>
    }

    return(
        <div>
            <h3>{title}</h3>
            <table border="1">
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
            {litReviews &&
            litReviews.map(lit => (
            <tr key={lit._id} class="table-body">
                <th>{lit.username}</th>
                <th>{lit.createdAt}</th>
                <th>{lit.searchTerm}</th>
                <th>{lit.project}</th>
                <th>{lit.articleSubject}</th>
                <th>{lit.articleLink}</th>
                <th>{lit.articleDatabase}</th>
                <th>{lit.articleYear}</th>
                <th>{lit.articleNotes}</th>
            </tr>
            ))
        }    
        </table>
        </div>
    )
};

export default LitReviewList;