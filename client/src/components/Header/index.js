import React from 'react';

import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

    const logout = event => {
      event.preventDefault();
      Auth.logout();
    };

    return (
        <header class="header">
          <div class="header-section">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <h1>Brit-ature Review</h1>
            </Link>
          </div>
          <nav class="header-nav">
            {Auth.loggedIn() ? (
              <>
                <div><Link to="/profile" style={{textDecoration: 'none', color: 'black'}}>Me</Link></div>
                <div><a href="/" onClick={logout} style={{textDecoration: 'none', color: 'black'}}>
                  Logout 
                </a></div>
              </>
            ) : (
              <>
                <div><Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Login</Link></div>
                <div><Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>Signup</Link></div>
              </>
            )}
          </nav>
          <div class="header-nav">
            <div><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link></div>
            <div>Add a Brit-ature Review</div>
            <div>Brit-ature Review Search</div>
            <div><Link to="/addproject" style={{textDecoration: 'none', color: 'black'}}>Add Project</Link></div>
            <div><Link to="/project" style={{textDecoration: 'none', color: 'black'}}>All Projects</Link></div>
            <div><Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contact</Link></div>
            <div>Brit-ature Review Statistics</div>
          </div>
        </header>
      );
}

export default Header;