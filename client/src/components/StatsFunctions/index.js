import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LITREVIEWS, QUERY_ALL_USERS } from '../../utils/queries';

import StatTable from '../StatTable';

// Importing the statistic functions
import { 
    runStats
} from '../../utils/stat-functions';

const StatFunctions = () => {

    // User Stats
    const { data: usersData } = useQuery(QUERY_ALL_USERS);
    let userArray = [];
    let totalUsers = 0;
    if (usersData && usersData.users) {
      userArray = usersData.users;
      totalUsers = userArray.length;
    };    

    // Literature Review Stats
    const { data: litReviewData } = useQuery(QUERY_LITREVIEWS);
    let litReviewArray = [];
    let totalLitReviews = 0;
    if (litReviewData && litReviewData.litReviews) {
        litReviewArray = litReviewData.litReviews;
        totalLitReviews = litReviewArray.length;
    }
 
    const searchTermStats = runStats(litReviewArray, "searchTerm");
    const sourceTypeStats = runStats(litReviewArray, "articleSourceType");
    const databaseStats = runStats(litReviewArray, "articleDatabase");
    
    return(
        <div class="stat-sections">
            <div class="stat-users">
                <h1>User Stats</h1>
                <h3>Total Number of Users: {totalUsers}</h3>
            </div>
            <div class="stat-litreviews">
                <h1>Literature Review Stats</h1>
                <h3>Total Number of Lit Reviews: {totalLitReviews}</h3>
                <div>
                <StatTable 
                title="Top Five Literature Review Search Terms"
                data={searchTermStats}
                />
                </div>
                <div>
                <StatTable 
                title="Top Five Literature Review Sources"
                data={sourceTypeStats}
                />
                </div>

                <div>
                <StatTable 
                title="Top Literature Review Databases"
                data={databaseStats}
                />
                </div>

                <div>
                -Coming Soon: Pie Chart of Number of Lit Reviews by department
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
            <div class="stat-projects">
                <h1>Project Stats</h1>
            </div>
        </div>
    )
};

export default StatFunctions;