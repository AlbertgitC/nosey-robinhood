import React, { Component } from 'react'
import CompanySearch from './company_search'

class CompanyNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="splash-nav-bar">
          
          <CompanySearch />
          <span className="splash-nav-logo" id="company-nav-logo-robinhood">Nosey Robinhood</span>
        </nav>
      </div>
    )
  }
}

export default CompanyNavbar




