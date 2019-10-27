import React from 'react';
import CompaniesContainer from './companies_container';
import CompanyPurchaseContainer from './company_purchase_container';
import { fetchCompanyDaily } from '../../actions/company_actions';
import Show from '../../assets/company-show.css';

class CompanyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: undefined,
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
  }

  render() {

    return (
      <div className='company-show'>
        <div className='company-graph-purchase'>
          <div className='company-graph'>
            <CompaniesContainer tag={this.props.companyTicker}/>
          </div>
          <div>
            <div className='purchase-sell-form-tabs'>
              <button
                className={`purchase-sell-form-tab-button ${this.state.buyButton}`}
                onClick={this.switchTab}>
                  Buy
              </button>
              <button
                className={`purchase-sell-form-tab-button ${this.state.sellButton}`}
                onClick={this.switchTab}>
                  Sell
              </button>
            </div>
            <div className='company-purchase'>
              <CompanyPurchaseContainer
                companyTicker={this.props.companyTicker}
                buyTab={this.state.buyTab}
                sellTab={this.state.sellTab} />
            </div>
          </div>
        </div>
        <div className='company-info'>
          <div className='company-info-description'>
            <div className = 'company-info-description-title' >
              About
            </div>
            <div className = 'company-info-description-about' >
              Lorem ipsum dolor sit amet, fabulas offendit aliquando et eos.Vim no delenit
              commune, aliquam pertinax suavitate no his.Ludus scripta repudiandae has eu, cu
              sint meliore tractatos cum.Doctus atomorum usu in , mazim virtute necessitatibus ex
              vim. His ut tota voluptatum, tota appetere ut sit.Eam ad legimus fierent electram,
              cum ex malis soluta deterruisset, in has duis iriure abhorreant.
            </div>
          </div>
          <div className='company-info-misc'>
            <div className='company-info-misc-component'>
              <div className={'company-info-misc-component-title'}>
                CEO
              </div>
              <div className={'company-info-misc-component-description'}>
                Jasim Atiyeh
              </div>
            </div>
            <div className='company-info-misc-component'>
              <div className={'company-info-misc-component-title'}>
                Employees
              </div>
              <div className={'company-info-misc-component-description'}>
                1
              </div>
            </div>
            <div className='company-info-misc-component'>
              <div className={'company-info-misc-component-title'}>
                Headquarters
              </div>
              <div className={'company-info-misc-component-description'}>
                Oklahoma City, Oklahoma
              </div>
            </div>
            <div className='company-info-misc-component'>
              <div className={'company-info-misc-component-title'}>
                Founded
              </div>
              <div className={'company-info-misc-component-description'}>
                1989
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
      </div>
    )
    
  }
}

export default CompanyShow;