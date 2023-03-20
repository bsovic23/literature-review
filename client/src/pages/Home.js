import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_LITREVIEWS } from '../utils/queries';

import LitReviewList from '../components/LitReviewList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_LITREVIEWS);

    // litEntries is the graphql point pulling from
    /*
        Saving the data from the litEntries graphql point
        to the const litReviews which is used to send below 
        to the component
    */
    const litReviews = data?.litEntries || [];

return (
    <main>
        <div>
            <div>
                <h1>Brit-ature Review</h1>
                <p>
                    Welcome to Brit-ature Review. This application was developed to easily store and search literature reviews.
                    The site allows the user to enter information regarding a literature review. Instead of having an excel document
                    that is filled in an unorganized manner, and only searchable by ctrl + f, Brit-atrue Review was developed to
                    provide an organized easy to search application. See the table of contents below to help guide you in this application
                </p>
                <h3>Table of Contents</h3>
                <ul>
                    <h4>Home</h4>
                    <li>
                        You are currently on the home page. The literature reviews below consist of all literature reviews conducted. 
                        They are sorted by most recent date of entry into the system.
                    </li>
                    <h4>Add a Brit-ature Review</h4>
                    <li>Add a literature review to the application</li>
                    <h4>Profile</h4>
                    <li>See a list of all literature reviews you have conducted</li>
                    <li>Download an excel spredsheet of all literature reviews you have conducted</li>
                    <h4>Brit-ature Review Search</h4>
                    <li>Find certain literature reviews you and/or others in your deparment have conducted</li>
                    <li>Download an excel spredsheet based on your literature review search criteria</li>
                    <h4>Contact</h4>
                    <li>Leave a comment based on user experience or error for Brit to address</li>
                </ul>
            </div>
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