import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav className="splash-nav-bar">
        <span className="splash-nav-logo">Nosey Robinhood</span>
        <span className="nav-splash-span">
          <Link className="splash-nav-link login-splash-link" to="/login">Log in</Link>
          <Link className="splash-nav-link signup-splash-link" to="/signup">Sign up</Link>
        </span>
      </nav>
    </div>
  );
}

export default Navigation