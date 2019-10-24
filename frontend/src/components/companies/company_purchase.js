import React from 'react';
import CompanySaleItem from './company_sale_item';

class CompanyPurchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shares: 0,
      purchase_price: this.props.price,
    };
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handlePurchase(e) {
    e.preventDefault();
    let companyTicker = this.props.companyTicker;
    this.props.createPurchaseRecord(companyTicker, this.state)
      .then(() => this.props.fetchCompanyHolding(this.props.companyTicker));
  }

  render() {
    let totalShares = 0;
    let sellShares;

    if (this.props.companyHoldings) {
      this.props.companyHoldings.map(purchase => totalShares += purchase.shares);

      sellShares = this.props.companyHoldings.map((purchase, idx) => {
        if (purchase.shares > 0) {
          return (
            <CompanySaleItem
              key={idx}
              date={purchase.date}
              shares={purchase.shares}
              purchaseId={purchase._id}
              companyTicker={this.props.companyTicker}
              updatePurchaseRecord={this.props.updatePurchaseRecord}
              fetchCompanyHolding={this.props.fetchCompanyHolding} />
          )
        }
      });
    }

    return (
      <div className='purchase-sell-form'>

        <form onSubmit={this.handlePurchase} className='purchase-form'>
          <div className='purchase-form-title'>
            {`Buy ${this.props.companyTicker}`}
            {`Current Shares: ${totalShares}`}
          </div>
          <div className='purchase-form-order'>
            <div className='purchase-form-order-shares'>
              <label>Shares
                <input
                  type='number'
                  onChange={this.update('shares')}
                  value={this.state.shares}
                  />
              </label>
            </div>
            <div className='purchase-form-order-price'>
              {this.props.price}
            </div>
          </div>
          <div className='purchase-form-cost'>
            {[this.props.price] * [this.state.shares]}
          </div>
          <input type='submit' value='Purchase Shares'/>
        </form>

        <ul className='sell-form'>
          {sellShares}
        </ul>

      </div>
    )
  }
}

export default CompanyPurchase;