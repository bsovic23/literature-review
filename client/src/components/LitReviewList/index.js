import React from 'react';

import { Link } from 'react-router-dom';

const LitReviewList = ({ litReviews, title }) => {
    if (!litReviews.length) {
        return <h3>There are no lit reviews yet</h3>
    }

    const litReviewHeaders = ["Entered By", "Created At", "Search Term", "Project", "Article Subject",
        "Article Link", "Article Database", "Article Year", "Article Source Type", "Article Notes"
    ];

    return(
        <div class="table">
            <h3>{title}</h3>
            <table border="1">
            <tr class="table-headers">
            {litReviewHeaders &&
            litReviewHeaders.map(item => (
                <th key={item}>
                    {item}
                </th>
            ))
            }
            </tr>
            {litReviews &&
            litReviews.map(lit => (
            <tr key={lit._id} class="table-body">
                <th>
                    <Link
                        to={`/profile/${lit.username}`}
                    >
                    {lit.username}
                    </Link>
                </th>
                <th>{lit.createdAt}</th>
                <th>{lit.searchTerm}</th>
                <th>{lit.project}</th>
                <th>{lit.articleSubject}</th>
                <th>{lit.articleLink}</th>
                <th>{lit.articleDatabase}</th>
                <th>{lit.articleYear}</th>
                <th>{lit.articleSourceType}</th>
                <th>{lit.articleNotes}</th>
            </tr>
            ))
        }    
        </table>
        </div>
    )
};

export default LitReviewList;