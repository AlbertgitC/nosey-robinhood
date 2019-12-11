import React from 'react';
import CompaniesContainer from '../companies/companies_container';
import CompanyNavbar from '../companies/company_navbar_container';
import { fetchCompanyBatchQuote } from '../../actions/company_actions';
import { Link } from 'react-router-dom';
import xor from 'lodash/xor';
import '../../assets/user_profile.css';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      totalInvest: 0,
      noseyMSG: "",
      noseyMsgColor: "green", 
      watchListData: [], 
      stockData: [], 
      techData: [], 
      graphData: null,
      totalStockValue: 0
    }
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
            res => { this.setState({ stockData: Object.entries(res.data) },
              () => {
                let total = 0;
                this.state.stockData.map(stockHold => {
                  let totalShares = 0;
                  this.props.holdings[stockHold[0]].map(purchaseRecord => {
                    totalShares += purchaseRecord.shares;
                  });
                  total += (stockHold[1].quote.latestPrice * totalShares);
                });
                this.setState({ totalStockValue: total });
                const totalInvest = total + this.props.user.funds;
                this.setState({ totalInvest: totalInvest.toFixed(2) }, () => {
                  if (this.state.totalInvest >= 30000 && this.state.totalInvest < 33000) {
                    this.setState({ noseyMSG: "Well go on, nothing's happening here." });
                    this.setState({ noseyMsgColor: "black" });
                  } else if (this.state.totalInvest >= 33000 && this.state.totalInvest < 45000) {
                    this.setState({ noseyMSG: "Time to put the downpay for your dream car!" });
                    this.setState({ noseyMsgColor: "green" });
                  } else if (this.state.totalInvest >= 45000) {
                    this.setState({ noseyMSG: "Congratulations! You're the next Warren Buffett!!!" });
                    this.setState({ noseyMsgColor: "green" });
                  } else if (this.state.totalInvest < 30000 && this.state.totalInvest >= 27000) {
                    this.setState({ noseyMSG: "Uh-oh, maybe it's just bad luck..." });
                    this.setState({ noseyMsgColor: "black" });
                  } else if (this.state.totalInvest < 27000 && this.state.totalInvest >= 15000) {
                    this.setState({ noseyMSG: "Hmm... time to stock up instant noodle!" });
                    this.setState({ noseyMsgColor: "red" });
                  } else if (this.state.totalInvest < 15000) {
                    this.setState({ noseyMSG: "Do yourself a favor, never invest in stock market... EVER!" });
                    this.setState({ noseyMsgColor: "red" });
                  }
                });
              }
            ); }
          );
        } else {
          if (this.props.user.funds) {
            this.setState({ totalInvest: this.props.user.funds.toFixed(2) }, () => {
              if (this.state.totalInvest >= 30000 && this.state.totalInvest < 33000) {
                this.setState({ noseyMSG: "Well go on, nothing's happening here." });
                this.setState({ noseyMsgColor: "black" });
              } else if (this.state.totalInvest >= 33000 && this.state.totalInvest < 45000) {
                this.setState({ noseyMSG: "Time to put the downpay for your dream car!" });
                this.setState({ noseyMsgColor: "green" });
              } else if (this.state.totalInvest >= 45000) {
                this.setState({ noseyMSG: "Congratulations! You're the next Warren Buffett!!!" });
                this.setState({ noseyMsgColor: "green" });
              } else if (this.state.totalInvest < 30000 && this.state.totalInvest >= 27000) {
                this.setState({ noseyMSG: "Uh-oh, maybe it's just bad luck..." });
                this.setState({ noseyMsgColor: "black" });
              } else if (this.state.totalInvest < 27000 && this.state.totalInvest >= 15000) {
                this.setState({ noseyMSG: "Hmm... time to stock up instant noodle!" });
                this.setState({ noseyMsgColor: "red" });
              } else if (this.state.totalInvest < 15000) {
                this.setState({ noseyMSG: "Do yourself a favor, never invest in stock market... EVER!" });
                this.setState({ noseyMsgColor: "red" });
              }
            });
          }
        }
      }
    );

    // const topList = "VTI,VXUS,AMZN,GOOGL,FB";
    const techList = "GOOGL,NVDA,AMZN,AAPL,MSFT";
    fetchCompanyBatchQuote(techList).then(
      res => { this.setState({ techData: Object.entries(res.data) }); }
    );
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (xor(prevState.stockData, this.state.stockData).length !== 0) {
      if (this.state.stockData.length !== 0) {
        let total = 0;
        this.state.stockData.map(stockHold => {
          let totalShares = 0;
          this.props.holdings[stockHold[0]].map(purchaseRecord => {
            totalShares += purchaseRecord.shares;
          });
          total += (stockHold[1].quote.latestPrice * totalShares);
        });
        this.setState({ totalStockValue: total });
        const totalInvest = total + this.props.user.funds;
        this.setState({ totalInvest: totalInvest.toFixed(2) }, () => {
          if (this.state.totalInvest >= 30000 && this.state.totalInvest < 33000) {
            this.setState({ noseyMSG: "Well go on, nothing's happening here." });
            this.setState({noseyMsgColor: "black"});
          } else if (this.state.totalInvest >= 33000 && this.state.totalInvest < 45000) {
            this.setState({ noseyMSG: "Time to put the downpay for your dream car!" });
            this.setState({ noseyMsgColor: "green" });
          } else if (this.state.totalInvest >= 45000) {
            this.setState({ noseyMSG: "Congratulations! You're the next Warren Buffett!!!" });
            this.setState({ noseyMsgColor: "green" });
          } else if (this.state.totalInvest < 30000 && this.state.totalInvest >= 27000) {
            this.setState({ noseyMSG: "Uh-oh, maybe it's just bad luck..." });
            this.setState({ noseyMsgColor: "black" });
          } else if (this.state.totalInvest < 27000 && this.state.totalInvest >= 15000) {
            this.setState({ noseyMSG: "Hmm... time to stock up instant noodle!" });
            this.setState({ noseyMsgColor: "red" });
          } else if (this.state.totalInvest < 15000) {
            this.setState({ noseyMSG: "Do yourself a favor, never invest in stock market... EVER!" });
            this.setState({ noseyMsgColor: "red" });
          }
        });
      } else {
        this.setState({ totalInvest: this.props.user.funds }, () => {
          if (this.state.totalInvest >= 30000 && this.state.totalInvest < 33000) {
            this.setState({ noseyMSG: "Well go on, nothing's happening here." })
          } else if (this.state.totalInvest >= 33000 && this.state.totalInvest < 45000) {
            this.setState({ noseyMSG: "Time to put the downpay for your dream car!" })
          } else if (this.state.totalInvest >= 45000) {
            this.setState({ noseyMSG: "Congratulations! You're the next Warren Buffett!!!" })
          } else if (this.state.totalInvest < 30000 && this.state.totalInvest >= 27000) {
            this.setState({ noseyMSG: "Uh-oh, maybe it's just bad luck..." })
          } else if (this.state.totalInvest < 27000 && this.state.totalInvest >= 15000) {
            this.setState({ noseyMSG: "Hmm... time to stock up instant noodle!" })
          } else if (this.state.totalInvest < 15000) {
            this.setState({ noseyMSG: "Do yourself a favor, never invest in stock market... EVER!" })
          }
        });
      }
    }
  }

  updateGraph(company) {
    this.setState({ graphData: company });
  }

  closeMsg() {
    document.getElementsByClassName("nosey-msg")[0].style.display = "none";
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

  holdingStockList(data) {
    const stockLis = data.map(
      (company, i) => {
        let totalShares = 0;
        this.props.holdings[company[0]].map(
          purchaseRecord => { totalShares += purchaseRecord.shares }
        );
        if (totalShares === 0) {
          return null;
        } else {
          return (
            <li key={i}>
              <div>
                <div onClick={() => this.updateGraph(company)}>
                  <span>{company[0]}</span>
                  <span>${company[1].quote.latestPrice.toFixed(2)}</span>
                </div>
                <Link to={`/company/${company[0]}`}>Detail</Link>
              </div>
              <div>{totalShares} Shares</div>
            </li>
          );
        }
      }
    );
    return stockLis;
  }

  render() {

    let allStockShares = 0;
    if (this.state.stockData.length !== 0) {
      this.state.stockData.map(
        company => {
          this.props.holdings[company[0]].map(
            purchaseRecord => { allStockShares += purchaseRecord.shares }
          );
        }
      );
    }
    

    if (this.state.techData.length === 0 || !this.props.user) {
      return (
        <div>
          Loading...
        </div>
      );
    } else if (this.state.watchListData.length === 0 && allStockShares === 0) {
      return (
        <div>
          <CompanyNavbar />
        <div className="user-profile-main">
          <div className="user-profile-graph">
            <div className="nosey-msg">
              <div id="nosey-msg-close" onClick={this.closeMsg}>X</div>
              <h1 id={this.state.noseyMsgColor}>{this.state.noseyMSG}</h1>
            </div>
            <h2>Investing</h2>
            <h2>${this.state.totalInvest}</h2>
            <CompaniesContainer data={this.state.graphData || this.state.techData[0]} />
            <div className="user-profile-investing">
              <div className="user-profile-investing-total">
                <p>Total Investments</p>
                <p>${this.state.totalInvest}</p>
              </div>
              <div className="user-profile-investing-stocks">
                <p>Total Value of Stock</p>
                <p>${this.state.totalStockValue.toFixed(2)}</p>
              </div>
              <div className="user-profile-investing-funds">
                <p>Total Usable Funds</p>
                <p>${this.props.user.funds.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="user-profile-side">
            <div>
              <span>Top Tech Stocks</span>
              <ul className="stock-list">
                {this.stockList(this.state.techData)}
              </ul>
            </div>
          </div>
        </div>
        </div>
      );

    } else if (this.state.watchListData.length !== 0 && allStockShares === 0) {
      return (
        <div>
          <CompanyNavbar />
        <div className="user-profile-main">
          <div className="user-profile-graph">
            <div className="nosey-msg">
              <div id="nosey-msg-close" onClick={this.closeMsg}>X</div>
              <h1 id={this.state.noseyMsgColor}>{this.state.noseyMSG}</h1>
            </div>
            <h2>Investing</h2>
            <h2>${this.state.totalInvest}</h2>
            <CompaniesContainer data={this.state.graphData || this.state.watchListData[0]}/>
            <div className="user-profile-investing">
              <div className="user-profile-investing-total">
                <p>Total Investments</p>
                <p>${this.state.totalInvest}</p>
              </div>
              <div className="user-profile-investing-stocks">
                <p>Total Value of Stock</p>
                <p>${this.state.totalStockValue.toFixed(2)}</p>
              </div>
              <div className="user-profile-investing-funds">
                <p>Total Usable Funds</p>
                <p>${this.props.user.funds.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="user-profile-side">
            <div>
              <span>Watchlist</span>
              <ul className="stock-list">
                {this.stockList(this.state.watchListData)}
              </ul>
            </div>
            <div>
              <span>Top Tech Stocks</span>
              <ul className="stock-list">
                {this.stockList(this.state.techData)}
              </ul>
            </div>
          </div>
        </div>
        </div>
      );
    } else if (this.state.watchListData.length === 0 && allStockShares !== 0) {
      return (
        <div>
          <CompanyNavbar />
        <div className="user-profile-main">
          <div className="user-profile-graph">
            <div className="nosey-msg">
              <div id="nosey-msg-close" onClick={this.closeMsg}>X</div>
              <h1 id={this.state.noseyMsgColor}>{this.state.noseyMSG}</h1>
            </div>
            <h2>Investing</h2>
            <h2>${this.state.totalInvest}</h2>
            <CompaniesContainer data={this.state.graphData || this.state.stockData[0]} />
            <div className="user-profile-investing">
              <div className="user-profile-investing-total">
                <p>Total Investments</p>
                <p>${this.state.totalInvest}</p>
              </div>
              <div className="user-profile-investing-stocks">
                <p>Total Value of Stock</p>
                <p>${this.state.totalStockValue.toFixed(2)}</p>
              </div>
              <div className="user-profile-investing-funds">
                <p>Total Usable Funds</p>
                <p>${this.props.user.funds.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="user-profile-side">
            <div>
              <span>Stocks</span>
              <ul className="holding-stock-list">
                {this.holdingStockList(this.state.stockData)}
              </ul>
            </div>
            <div>
              <span>Top Tech Stocks</span>
              <ul className="stock-list">
                {this.stockList(this.state.techData)}
              </ul>
            </div>
          </div>
        </div>
        </div>
      );
    }
    
    return (
      <div>
        <CompanyNavbar />
      <div className="user-profile-main">
          <div className="user-profile-graph">
            <div className="nosey-msg">
              <div id="nosey-msg-close" onClick={this.closeMsg}>X</div>
              <h1 id={this.state.noseyMsgColor}>{this.state.noseyMSG}</h1>
            </div>
            <h2>Investing</h2>
            <h2>${this.state.totalInvest}</h2>
            <CompaniesContainer data={this.state.graphData || this.state.stockData[0]} />
            <div className="user-profile-investing">
              <div className="user-profile-investing-total">
                <p>Total Investments</p>
                <p>${this.state.totalInvest}</p>
              </div>
              <div className="user-profile-investing-stocks">
                <p>Total Stock Value</p>
                <p>${this.state.totalStockValue.toFixed(2)}</p>
              </div>
              <div className="user-profile-investing-funds">
                <p>Funds</p>
                <p>${this.props.user.funds.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="user-profile-side">
            <div>
              <span>Stocks</span>
              <ul className="holding-stock-list">
                {this.holdingStockList(this.state.stockData)}
              </ul>
            </div>
            <div>
              <span>Watchlist</span>
              <ul className="stock-list">
                {this.stockList(this.state.watchListData)}
              </ul>
            </div>
            <div>
              <span>Top Tech Stocks</span>
              <ul className="stock-list">
                {this.stockList(this.state.techData)}
              </ul>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default UserProfile;