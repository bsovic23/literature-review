import React from 'react';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import LitReviewList from '../components/LitReviewList';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

    const user = data?.user || [];

    if (loading) {
        return <div>Loading...</div>
    }

    return(
        <section class="profile">
            <div>
                <h2>
                    Viewing {user.username}'s profile
                </h2>
            </div>

            <div>
                <LitReviewList litReviews={user.litReviews} title={`${user.username}'s Literature Reviews:`}/>
            </div>
        </section>
    );
};

export default Profile;