import React from 'react';
import CompanySaleItem from './company_sale_item';

class CompanyPurchase extends React.Component {

  // total price needs to be something set to state

  constructor(props) {
    super(props);

    this.state = {
      shares: 0,
      purchase_price: this.props.company,
      totalPrice: (this.state.purchase_price * this.state.shares)
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
      .then(() => this.props.fetchCompanyHolding(this.props.companyTicker))
      .then(totalPrice => this.props.createPurchase(totalPrice));
  }

  render() {
    debugger;
    let totalShares = 0;
    let sellShares;

    if (this.props.companyHoldings) {
      // this.props.companyHoldings.map(purchase => totalShares += purchase.shares);

      sellShares = this.props.companyHoldings.map((purchase, idx) => {
        totalShares += purchase.shares;
        const purchased_at = new Date(purchase.date).toLocaleDateString("en-US", {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        if (purchase.shares > 0) {
          return (
            <CompanySaleItem
              key={idx}
              date={purchased_at}
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
              {this.state.purchase_price}
            </div>
          </div>
          <div className='purchase-form-cost'>
            { this.state.totalPrice }
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