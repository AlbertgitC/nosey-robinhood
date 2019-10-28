import React from 'react';
import { fetchCompanySearch } from '../../actions/company_actions';
import CompanyLogo from '../../assets/companylogo'

class CompanySearch extends React.Component {

  constructor() {
    super();
    this.state = {
      searchRequest: '',
      searchResults: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetchCompanySearch(this.state.searchRequest)
      .then(searchResults => this.setState({
        searchResults: searchResults.bestMatches
      }));
  }

  update(e) {
    this.setState({ searchRequest: e.currentTarget.value })
  }

  clearSearch() {
    this.setState({ searchRequest: '' });
  }
  
  render() {
    let searchResults;
    if (this.state.searchResults) {
      searchResults = this.state.searchResults.map((result, idx) => (
        <li>
          <div className='company-search-results-list-company-name'>
            {result.name}
          </div>
          < div className = 'company-search-results-list-company-ticker' >
            {result.symbol}
          </div>
        </li>
      ))
    }

    return (
      <div className='company-search'>
        <CompanyLogo />
        <div className='company-search-input'>
          {/* < i class = "material-icons" > search </i> */}
          <form onSubmit={this.handleSubmit}>
            <input
              className="company-search-bar-nav"
              type='text'
              placeholder='Search'
              onChange={this.update}/>
          </form>
          {/* < i class = "material-icons" onClick={this.clearSearch}> clear </i> */}
        </div>
        <div className='company-search-results'>
          <ul className='company-search-results-list'>
            {searchResults}
          </ul>
        </div>
      </div>
    )
  }
}

export default CompanySearch