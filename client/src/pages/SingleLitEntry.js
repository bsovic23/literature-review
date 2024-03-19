import React from 'react';

// Component Imports
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import LitReviewForm from '../components/LitReviewForm';
import Footer from '../components/Footer';

function SingleLitEntry() {
    return(
        <section class='page' id='single-lit-entry'>
            <Header />
            <h1>Add a Brit-ature Review</h1>
            <div class='flexbox'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <LitReviewForm />
                </div>
            </div>
            <Footer />
        </section>
    )
};

export default SingleLitEntry;