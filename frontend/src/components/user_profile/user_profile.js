import React from 'react';
import CompaniesContainer from '../companies/companies_container';
import { fetchCompanyBatchQuote, fetchCompanyDaily } from '../../actions/company_actions';
import { Link } from 'react-router-dom';
import '../../assets/user_profile.css';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.state = { watchListData: [], stockData: [], techData: [], graphData: null }
    this.updateGraph = this.updateGraph.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser().then(
      () => {
        if (this.props.user.watch_list.length !== 0) {
          let watchList = "";
          this.props.user.watch_list.map(
            tag => {
              watchList = watchList.concat(`${tag},`);
            }
          );
          watchList = watchList.substring(0, watchList.length - 1);
          fetchCompanyBatchQuote(watchList).then(
            res => { this.setState({ watchListData: Object.entries(res.data) }); }
          );
        }
      }
    );
    this.props.fetchAllHoldings().then(
      () => {
        if (Object.getOwnPropertyNames(this.props.holdings).length > 0) {
          let stockList = "";
          Object.keys(this.props.holdings).map(
            tag => {
              stockList = stockList.concat(`${tag},`);
            }
          );
          stockList = stockList.substring(0, stockList.length - 1);
          fetchCompanyBatchQuote(stockList).then(
            res => { this.setState({ stockData: Object.entries(res.data) }); }
          );
        }
      }
    );
    // const topList = "VTI,VXUS,AMZN,GOOGL,FB";
    const techList = "GOOGL,NVDA,AMZN,AAPL,MSFT";
    fetchCompanyBatchQuote(techList).then(
      res => { this.setState({ techData: Object.entries(res.data) }); }
    );
    
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  updateGraph(company) {
    this.setState({ graphData: company });
  }

  stockList(data) {
    const stockLis = data.map(
      (company, i) => {
        return (
          <li key={i}>
            <div onClick={() => this.updateGraph(company)}>
              <span>{company[0]}</span>
              <span>${company[1].quote.latestPrice.toFixed(2)}</span>
            </div>            
            <Link to={`/company/${company[0]}`}>Detail</Link>            
          </li>
        );
      }
    );
    return stockLis;
  }

  render() {
    if (this.state.techData.length === 0) {
      return (
        <div>
          Loading...
        </div>
      );
    } else if (this.state.watchListData.length === 0 && this.state.stockData.length === 0) {
      return (
        <div className="user-profile-main">
          <h2>Investing ${this.props.user.funds}</h2>
          <h1>NOSEY MESSAGE HERE!!!</h1>
          <CompaniesContainer data={this.state.graphData || this.state.techData[0]} />
          <div>
            <span>Top Tech Stocks</span>
            <ul>
              {this.stockList(this.state.techData)}
            </ul>
          </div>

          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );

    } else if (this.state.watchListData.length !== 0 && this.state.stockData.length === 0) {
      return (
        <div className="user-profile-main">
          <h2>Investing ${this.props.user.funds}</h2>
          <h1>NOSEY MESSAGE HERE!!!</h1>
          <CompaniesContainer data={this.state.graphData || this.state.watchListData[0]}/>
          <div>
            <span>Watchlist</span>
            <ul>
              {this.stockList(this.state.watchListData)}
            </ul>
          </div>
          <div>
            <span>Top Tech Stocks</span>
            <ul>
              {this.stockList(this.state.techData)}
            </ul>
          </div>

          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else if (this.state.watchListData.length === 0 && this.state.stockData.length !== 0) {
      return (
        <div className="user-profile-main">
          <h2>Investing ${this.props.user.funds}</h2>
          <h1>NOSEY MESSAGE HERE!!!</h1>
          <CompaniesContainer data={this.state.graphData || this.state.stockData[0]} />
          <div>
            <span>Stocks</span>
            <ul>
              {this.stockList(this.state.stockData)}
            </ul>
          </div>
          <div>
            <span>Top Tech Stocks</span>
            <ul>
              {this.stockList(this.state.techData)}
            </ul>
          </div>

          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    }
    
    return (
      <div className="user-profile-main">
        <h2>Investing ${this.props.user.funds}</h2>
        <h1>NOSEY MESSAGE HERE!!!</h1>
        <CompaniesContainer data={this.state.graphData || this.state.stockData[0]} />
        <div>
          <span>Stocks</span>
          <ul>
            {this.stockList(this.state.stockData)}
          </ul>
        </div>
        <div>
          <span>Watchlist</span>
          <ul>
            {this.stockList(this.state.watchListData)}
          </ul>
        </div>
        <div>
          <span>Top Tech Stocks</span>
          <ul>
            {this.stockList(this.state.techData)}
          </ul>
        </div>
        
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

export default UserProfile;