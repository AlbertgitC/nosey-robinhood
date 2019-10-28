import React, { Component } from 'react'
import CompanySearch from './company_search'

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
    console.log(this.props)
    return (
      <div>
        <nav className="nav-bar-nav-bar">
          
          <CompanySearch />
          <span id="company-nav-logo-robinhood">Nosey Robinhood</span>
          <button onClick={this.logoutUser}>Logout</button>
        </nav>
      </div>
    )
  }
}

export default CompanyNavbar




