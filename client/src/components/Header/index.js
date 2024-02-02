import React from 'react';

import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

    const logout = event => {
      event.preventDefault();
      Auth.logout();
      window.alert("You are logged out");
    };

    return (
        <header class="header">
          <div class="header-section">
            <Link to="/home" style={{textDecoration: 'none', color: 'black'}}>
              <h1>Brit-ature Review</h1>
            </Link>
          </div>
          <nav class="header-nav">
            {Auth.loggedIn() ? (
              <>
                <Link to="/profile">
                  <div>Me</div>
                </Link>
                <button onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
                  <div>Login</div>
                </Link>
                <Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>
                  <div>Signup</div>
                </Link>
              </>
            )}
          </nav>
        </header>
      );
}

export default Header;