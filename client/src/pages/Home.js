import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_LITREVIEWS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_LITREVIEWS);

    const litReviews = data?.litEntries || [];
    console.log(litReviews);

return (
    <main>
        <div>
            <div>lit reviews list</div>
        </div>
    </main>
    )
};

export default Home;