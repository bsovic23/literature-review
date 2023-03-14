import React from 'react';

const LitReviewList = ({ litReviews, title }) => {
    if (!litReviews.length) {
        return <h3>There are no lit reviews yet</h3>
    }

    return(
        <div>
            <h3>{title}</h3>
            <table border="1">
            <tr>
               <th>Entered by</th>
               <th>Search Term</th>
               <th>Project</th>
               <th>Article Subject</th>
               <th>Article Link</th>
               <th>Article Notes</th>
            </tr>
            {litReviews &&
            litReviews.map(lit => (
            <tr key={lit._id}>
                <th>{lit.username}</th>
                <th>{lit.searchTerm}</th>
                <th>{lit.project}</th>
                <th>{lit.articleSubject}</th>
                <th>{lit.articleLink}</th>
                <th>{lit.articleNotes}</th>
            </tr>
            ))
        }    
        </table>
        </div>
    )
};

export default LitReviewList;