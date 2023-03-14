import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_LITREVIEWS } from '../utils/queries';


import LitReviewList from '../components/LitReviewList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_LITREVIEWS);

    const litReviews = data?.litEntries || [];

return (
    <main>
        <div>
            <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <LitReviewList litReviews={litReviews} title="Literature Reviews" />
            )}
            </div>
        </div>
    </main>
    )
};

export default Home;