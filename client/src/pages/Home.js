import React, { useState } from 'react';

// Component imports
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';


const Home = () => {

    const [preview, setPreview] = useState({
        text: '',
        picture: '',
        description: ''
    });

    const previewSidebar = (text, picture, description) => {
        setPreview({
            text,
            picture,
            description
        })
    };

    return (
        <section class='page' id='home'>
            <Header />
            <div class='flexbox'>
                <div>
                    <Sidebar onLinkHover={previewSidebar} />
                </div>
                <div>
                    {preview.text && (
                        <div>
                            {preview.text}
                            {preview.picture}
                            {preview.description}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </section>
    )
};

export default Home;