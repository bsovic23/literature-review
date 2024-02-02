import React from 'react';
import { Link } from 'react-router-dom';

// Data Imports
import { sidebarData } from '../../data/sidebar';

const Sidebar = ({ onLinkHover }) => {

    return(
        <section id='sidebar'>
            {sidebarData.map((nav, index) => (
                <Link
                    class='sidebar-link'
                    key={index} 
                    to={nav.link}
                    onMouseEnter={() => onLinkHover(nav.text, nav.picture, nav.description)}
                >
                    <button>
                        {nav.text}
                    </button>
                </Link>
            ))}
        </section>
    )
};

export default Sidebar;