import React from 'react';
import CompaniesContainer from '../companies/companies_container';
import { fetchCompanyBatchQuote, fetchCompanyDaily } from '../../actions/company_actions';
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);

    this.state = { watchList: [],  data: [] }
  }

  componentDidMount() {
    const topList = "VTI,VXUS,AMZN,GOOGL,FB";
    const techList = "GOOGL,NVDA,AMZN,AAPL,MSFT";
    fetchCompanyBatchQuote(techList).then(
      res => { this.setState({ data: Object.entries(res.data) }); }
    );
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  stockList(data) {
    const stockLis = data.map(
      (company, i) => {
        return (
          <li key={i}>
            <Link to={`/company/${company[0]}`}>
              <div>{company[0]}</div>
              <div>${company[1].quote.latestPrice}</div>
            </Link>            
          </li>
        );
      }
    );
    return stockLis;
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <h1>Investing $30,000.00</h1> {/* change this! */}
        <CompaniesContainer tag={this.state.data[0][0]} />
        <ul>
          {this.stockList(this.state.data)}
        </ul>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

export default UserProfile;