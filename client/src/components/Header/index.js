import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="header">
          <div>
            <Link to="/">
              Brit-ature Review
            </Link>
          </div>
          <nav>
            <Link to="/login">Login</Link>
          </nav>
        </header>
      );
}

export default Header;