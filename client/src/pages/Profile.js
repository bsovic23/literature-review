import React from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import LitReviewList from '../components/LitReviewList';
import LitReviewForm from '../components/LitReviewForm';

import Auth from '../utils/auth';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || [];

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam ) {
        return <Navigate to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user?.username) {
        return (
          <h4>
            You need to be logged in to see this page. Use the navigation links above to sign up or log in!
          </h4>
        );
      }

    return(
        <section class="profile">
            <div>
                <h2>
                    Viewing { userParam ? `${user.username}'s` : 'your'} profile
                </h2>
            </div>

            <div>
                <LitReviewList litReviews={user.litReviews} title={`${user.username}'s Literature Reviews:`}/>
            </div>
            <div>{!userParam && <LitReviewForm />}</div>
        </section>
    );
};

export default Profile;