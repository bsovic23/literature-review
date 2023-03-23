import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="header">
          <div class="header-section">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <h1>Brit-ature Review</h1>
            </Link>
          </div>
          <div class="header-section">
            <div>
              <p><Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Login</Link></p>
            </div>
            <div>
              <p><Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>Signup</Link></p>
            </div>
          </div>
        </header>
      );
}

export default Header;