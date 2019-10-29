import React, { Component } from 'react';
import CompanySearch from './company_search';
import CompanyLogo from '../../assets/companylogo';
import { Link } from 'react-router-dom';

class CompanyNavbar extends React.Component {

  constructor(props) {
    super(props)

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    
    return (
      <div>
        <nav className="nav-bar-nav-bar">
          <div className="company-search-and-logo">
            <Link id="company-logo-react-router" to="/user_profile">
              <CompanyLogo />
            </Link>
            <CompanySearch />
          </div>
          <div className="company-logo-and-logout">
            <Link id="company-name-react-router" to="/user_profile">
              <span id="company-nav-logo-robinhood">Nosey Robinhood</span>
            </Link>
            <button className="company-nav-logout-button" onClick={this.logoutUser}>Logout</button>
          </div>
        </nav>
      </div>
    )
  }
}

export default CompanyNavbar




