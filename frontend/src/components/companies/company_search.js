import React from 'react';
import { fetchCompanySearch } from '../../actions/company_actions';

class CompanySearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchRequest: '',
      searchResults: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetchCompanySearch(this.state.searchRequest)
      .then(searchResults => this.setState({
        searchResults: searchResults.data.bestMatches
      }));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  clearSearch() {
    this.setState({ searchRequest: '' });
  }
  
  render() {
    let searchResults;
    let active;
    if (this.state.searchResults) {
      active = 'results';
      searchResults = this.state.searchResults.map((result, idx) => (
        <li key={idx} className='company-search-results-list-item'>
          <div className='company-search-results-list-company-name'>
            {result['2. name']}
          </div>
          < div className = 'company-search-results-list-company-ticker' >
            {result['1. symbol']}
          </div>
        </li>
      ))
    }

    return (
      <div className='company-search'>
        <div className='company-search-input'>
          {/* < i class = "material-icons" > search </i> */}
          <form onSubmit={this.handleSubmit}>
            <input
              className="company-search-bar-nav"
              type='text'
              placeholder='Search'
              onChange={this.update('searchRequest')}/>
          </form>
          {/* < i class = "material-icons" onClick={this.clearSearch}> clear </i> */}
        </div>
        <div className='company-search-results'>
          <ul className={`company-search-results-list ${active}`}>
            {searchResults}
          </ul>
        </div>
      </div>
    )
  }
}

export default CompanySearch