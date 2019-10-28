import React, { Component } from 'react'
import CompanySearch from './company_search'

class CompanyNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="splash-nav-bar">
          <span className="splash-nav-logo">Nosey Robinhood</span>
          {/* <span className="splash-nav-logo">
            <PiedPiperLogo />
          </span> */}
          <CompanySearch />
        </nav>
      </div>
    )
  }
}

export default CompanyNavbar




