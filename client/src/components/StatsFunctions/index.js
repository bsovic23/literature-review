import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LITREVIEWS } from '../../utils/queries';

const StatFunctions = () => {
    const { data: litReviewData } = useQuery(QUERY_LITREVIEWS);
    console.log(litReviewData);
    const totalLitReviews = litReviewData.litReviews.length;

    return(
        <div>
            Total Number of Lit Reviews: {totalLitReviews}

            Number of Lit Reviews by type: 

            Number of Lit Reviews by department
            ^ some sort of circle graph that each slide is by department

            Top Lit Review Search Terms

            Top Lit Review databases

            Lit reviews in the past week:
                                past month:
                                past 6 months:
                                past year:
        </div>
    )
};

export default StatFunctions;