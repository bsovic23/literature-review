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
                <Link to="/profile">Me</Link>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
               <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Login</Link>
                <Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>Signup</Link>
              </>
            )}
          </nav>
        </header>
      );
}

export default Header;