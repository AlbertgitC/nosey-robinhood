import React from 'react';
import CompaniesContainer from './companies_container';
import CompanyPurchase from './company_purchase';

class CompanyShow extends React.Component {

  componentDidMount() {
    let companyTicker = this.props.companyTicker;
    this.props.fetchCompanyHolding(companyTicker);
    this.props.fetchCompanyDaily(companyTicker);
  }

  // componentDidUpdate() {
  //   let companyTicker = this.props.companyTicker;
  //   this.props.fetchCompanyHolding(companyTicker);
  //   this.props.fetchCompanyDaily(companyTicker);
  // }

  render() {
    let companyHoldings;
    let price;

    if (this.props.companyHoldings && this.props.company) {
      companyHoldings = this.props.companyHoldings;
      price = this.props.company[0].Close;
    }

    return (
      <div>
        <div>
          <div className='company-graph'>
            <CompaniesContainer tag={this.props.companyTicker}/>
          </div>
          <div className='company-purchase'>
            <CompanyPurchase
              companyTicker={this.props.companyTicker}
              companyHoldings={companyHoldings}
              price={price}
              createPurchaseRecord={this.props.createPurchaseRecord}
              updatePurchaseRecord={this.props.updatePurchaseRecord}
              fetchCompanyHolding={this.props.fetchCompanyHolding} />
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
            <div className='company-info-misc-ceo'>
              <div>
                CEO
              </div>
              <div>
                Jasim Atiyeh
              </div>
            </div>
            <div className='company-info-misc-employees'>
              <div>
                Employees
              </div>
              <div>
                1
              </div>
            </div>
            <div className='company-info-misc-headquarters'>
              <div>
                Headquarters
              </div>
              <div>
                Oklahoma City, Oklahoma
              </div>
            </div>
            <div className='company-info-misc-founded'>
              <div>
                Founded
              </div>
              <div>
                1989
              </div>
            </div>
            <div className='company-info-misc-market-cap'>
              <div>
                Market Cap
              </div>
              <div>
                12.34T
              </div>
            </div>
            <div className='company-info-misc-price-earning-ratio'>
              <div>
                Price-Earning Ratio
              </div>
              <div>
                456.85
              </div>
            </div>
            <div className='company-info-misc-dividend-yield'>
              <div>
                Dividend Yield
              </div>
              <div>
                100.46
              </div>
            </div>
            <div className='company-info-misc-average-volume'>
              <div>
                Average Volume
              </div>
              <div>
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