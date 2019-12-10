import React from 'react';
import CompaniesContainer from './companies_container';
import CompanyPurchaseContainer from './company_purchase_container';
import CompanyNavbar from './company_navbar_container';
import '../../assets/watch_list.css';
import Show from '../../assets/company-show.css';
import {
  fetchCompanyDaily,
  fetchCompanyInfo
} from '../../actions/company_actions';
import WatchListContainer from '../watch_list/watch_list_container';

class CompanyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: undefined,
      companyInfo: undefined,
      buyTab: '',
      sellTab: 'hidden',
      buyButton: 'active',
      sellButton: ''
    };
    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(e) {
    if (e.currentTarget.innerText === 'Buy') {
      this.setState({
        buyTab: '',
        sellTab: 'hidden',
        buyButton: 'active',
        sellButton: ''
      });
    } else if (e.currentTarget.innerText === 'Sell') {
      this.setState({
        buyTab: 'hidden',
        sellTab: '',
        buyButton: '',
        sellButton: 'active'
      });
    }
  }

  componentDidMount() {
    let companyTicker = this.props.companyTicker;
    this.props.fetchCompanyHolding(companyTicker);
    fetchCompanyDaily(companyTicker).then(
      res => this.setState({company: res.data})
    );
    fetchCompanyInfo(companyTicker)
      .then(response => this.setState({
        companyInfo: response.data
      }));
  }

  componentDidUpdate(prevProps, prevState) {
    let companyTicker = this.props.companyTicker;
    if (prevProps.companyTicker !== this.props.companyTicker) {
      fetchCompanyInfo(companyTicker)
        .then(response => this.setState({
          companyInfo: response.data
        }));
      
      this.setState({company: undefined}, ()=> {
        fetchCompanyDaily(companyTicker).then(
          res => this.setState({ company: res.data })
        );
      })
    }
  }

  render() {
    let companyInfo;
    let companyInfoComponent;
    if (this.state.companyInfo) {
      companyInfo = this.state.companyInfo;
      companyInfoComponent = (
        <div className='company-info'>
            <div className='company-info-description'>
              <div className = 'company-info-description-title' >
                About
              </div>
              <div className = 'company-info-description-about' >
                {companyInfo.description}
              </div>
            </div>
            <div className='company-info-misc'>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  CEO
                </div>
                <div className={'company-info-misc-component-description'}>
                  {companyInfo.CEO}
                </div>
              </div>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  Employees
                </div>
                <div className={'company-info-misc-component-description'}>
                  {companyInfo.employees}
                </div>
              </div>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  Headquarters
                </div>
                <div className={'company-info-misc-component-description'}>
                  {companyInfo.city}, {companyInfo.state}
                </div>
              </div>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  Website
                </div>
                <div className={'company-info-misc-component-description'}>
                  <a href={companyInfo.website}>{companyInfo.website}</a>
                </div>
              </div>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  Market Cap
                </div>
                <div className={'company-info-misc-component-description'}>
                  12.34T
                </div>
              </div>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  Price-Earning Ratio
                </div>
                <div className={'company-info-misc-component-description'}>
                  456.85
                </div>
              </div>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  Dividend Yield
                </div>
                <div className={'company-info-misc-component-description'}>
                  100.46
                </div>
              </div>
              <div className='company-info-misc-component'>
                <div className={'company-info-misc-component-title'}>
                  Average Volume
                </div>
                <div className={'company-info-misc-component-description'}>
                  432.48K
                </div>
              </div>
            </div>
          </div>
      )
    }
    if (!this.state.company || !this.state.company[this.props.companyTicker]) {
      return null;
    }
    return (
      <div>
        <CompanyNavbar />
        <div className='company-show'>
          <div className='company-graph-purchase'>
            <div className='company-graph'>
              <CompaniesContainer tag={this.props.companyTicker}/>
            </div>
            <div className='purchase-sell-form-watch'>
              <div className='purchase-sell-form-container'>
                <div className='purchase-sell-form-tabs'>
                  <button
                    id='buy'
                    className={`purchase-sell-form-tab-button ${this.state.buyButton}`}
                    onClick={this.switchTab}>
                      Buy
                  </button>
                  <button
                    id='sell'
                    className={`purchase-sell-form-tab-button ${this.state.sellButton}`}
                    onClick={this.switchTab}>
                      Sell
                  </button>
                </div>
                <div className='company-purchase'>
                  <CompanyPurchaseContainer
                    companyTicker={this.props.companyTicker}
                    buyTab={this.state.buyTab}
                    sellTab={this.state.sellTab}
                    currentPrice={this.state.company[this.props.companyTicker].quote.latestPrice} />
                </div>
              </div>
              <div className='watch-button-container'>
                <WatchListContainer tag={this.props.companyTicker}/>
              </div>
            </div>
          </div>
          {companyInfoComponent}
        </div>
      </div>
    )
    
  }
}

export default CompanyShow;