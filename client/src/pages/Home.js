import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_LITREVIEWS, QUERY_ME_BASIC } from '../utils/queries';

import Auth from '../utils/auth';

import LitReviewList from '../components/LitReviewList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_LITREVIEWS);

    const litReviews = data?.litReviews || [];

    const loggedIn = Auth.loggedIn();
    const { data: litData } = useQuery(QUERY_ME_BASIC);

return (
    <main class="home">
        <div>
            <div>
                <h1>Welcome</h1>
                <p>
                    Brit-ature Review is an application developed to easily store and search literature reviews.
                    The site allows the user to enter information regarding a literature review as a Brit-ature Review. Instead of having an excel document
                    that is filled in an unorganized manner, and only searchable by ctrl + f, Brit-atrue Review was developed to
                    provide an organized easy to search application. See the table of contents below to help guide you in this application
                </p>
                <p>
                    The application also allows the user to use past literature reviews completed and able to search and compose a literature review
                    export of previous literature reviews. This means an individual does not need to have multiple different excel literature reviews
                    for each project but rather complete and enter all into this application.
                </p>
                <div class="home-toc">
                    <h3>Table of Contents</h3>
                        <h4>Me</h4>
                        <li>See a list of all Brit-ature reviews you have created</li>
                        <li>Download an excel spredsheet of all Brit-ature reviews you have conducted</li>
                        <li>See a list of department members you're associated with to also view their Brit-ature reviews</li>
                        <li>Add a Brit-ature Review to the application</li>
                        <h4>Home</h4>
                        <li>
                            The literature reviews below consist of all literature reviews conducted and are sorted by most recent date of entry into the system.
                        </li>
                        <h4>Add a Brit-ature Review</h4>
                        <li>Add a Brit-ature Review to the application</li>
                        <h4>Brit-ature Review Search</h4>
                        <li>Search the Brit-ature Review Database by certain variable(s)</li>
                        <li>Download an excel spredsheet based on your Brit-ature reviews search criteria</li>
                        <h4>Add Project</h4>
                        <li>Add a project that Brit-ature Reviews added can be associated with</li>
                        <h4>All Projects</h4>
                        <li>See all current projects added to the Brit-ature Review application</li>
                        <h4>Brit-ature Review Statistics</h4>
                        <li>See statistics of the application use</li>
                        <li>See statistics of Brit-ature Reviews</li>
                        <h4>Contact</h4>
                        <li>Leave a comment based on user experience or error for Brit to address</li>
                </div>
            </div>
            <div>
                {loggedIn && litData ? (
                    <div>
                        {litData.me.username} has completed {litData.me.litReviewCount} Britature Reviews 
                    </div>
                ) : null }
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