import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LITREVIEWS } from '../../utils/queries';

import StatTable from '../StatTable';

// Importing the statistic functions
import { 
    filterResults, countTerms, sortTerms
} from '../../utils/stat-functions';

const StatFunctions = () => {
    // data object
    const { data: litReviewData } = useQuery(QUERY_LITREVIEWS);

    // extracting the litReviews Array from the data object, now an array of litreview arrays
    const litReviewArray = litReviewData.litReviews;

    // Gives the number of litreviews
    const totalLitReviews = litReviewArray.length;

    // Uses the filterResults function in utils to get an array of all "variable"
    const allTerms = filterResults(litReviewArray, "searchTerm");
    const allSourceType = filterResults(litReviewArray, "articleSourceType");
    
    // Above works
    const numTerms = countTerms(allTerms);
    console.log(numTerms);
    const numSource = countTerms(allSourceType);

    //
    const sortTermsArray = sortTerms(numTerms);
    console.log(sortTermsArray);

    const sortSourceArray = sortTerms(numSource);
    console.log(sortSourceArray);


    return(
        <div class="stat-sections">
            
            <h3>
            Total Number of Lit Reviews: {totalLitReviews}
            </h3>
           
            <div>
            <StatTable 
            title="Top Five Literature Review Search Terms"
            data={sortTermsArray}
            />
            </div>
            <div>
            <StatTable 
            title="Top Five Literature Review Sources"
            data={sortSourceArray}
            />
            </div>

            <div>
            -Coming Soon: Pie Chart of Number of Lit Reviews by department
            </div>

            <div>
            -Coming Soon: Top Lit Review databases
            </div>

            <div>
            Coming Soon:
            Top Lit Review databases

            Lit reviews in the past week:
                                past month:
                                past 6 months:
                                past year:
            </div>
        </div>
    )
};

export default StatFunctions;