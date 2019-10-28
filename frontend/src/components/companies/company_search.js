import React from 'react';
import { fetchCompanySearch } from '../../actions/company_actions';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CompanyLogo from '../../assets/companylogo'


class CompanySearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchRequest: '',
      searchResults: undefined,
      show: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetchCompanySearch(this.state.searchRequest)
      .then(searchResults => this.setState({
        searchResults: searchResults.data.bestMatches,
        show: true
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
          <Link to={`/company/${result['2. name']}`}>
            <div className='company-search-results-list-company-name'>
                {result['2. name']}
            </div>
            < div className = 'company-search-results-list-company-ticker' >
              {result['1. symbol']}
            </div>
          </Link>
        </li>
      ))
    }

    return (
      <div className='company-search'>
        <CompanyLogo />
        <div className='company-search-input'>
          <form onSubmit={this.handleSubmit} className='company-search-bar-nav'>
            <div className='company-search-first'>
              <SearchIcon />
              <input
                className="company-search-bar"
                type='text'
                placeholder='Search'
                value={this.state.searchRequest}
                onChange={this.update('searchRequest')}/>
            </div>
          < HighlightOffIcon onClick={this.clearSearch} />
          </form>
        </div>
        <div className='company-search-results'>
          {this.state.show &&
            (<>
              <div className='modal' onClick={() => this.setState({
                show: false,
                searchRequest: ''
              })}></div>
              <ul className={`company-search-results-list ${active}`}>
                {searchResults}
              </ul>
            </>)
          }
        </div>
      </div>
    )
  }
}

export default CompanySearch