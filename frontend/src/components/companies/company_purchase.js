import React from 'react';
import CompanySaleItem from './company_sale_item';
import {
  fetchCompanyDaily
} from "../../actions/company_actions";


class CompanyPurchase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shares: 0,
      price: 0,
      totalPrice: 0
    };
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    fetchCompanyDaily(this.props.companyTicker)
      .then(company => {
        this.setState({
          price: Object.entries(company.data["Time Series (Daily)"])[0][1]["4. close"]
        });
      });
  }

  update(field) {
    return e => {
      this.setState({
        totalPrice: this.state.price * e.currentTarget.value
      });
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handlePurchase(e) {
    e.preventDefault();
    let companyTicker = this.props.companyTicker;
    let userFunds = this.props.userFunds;
    if (userFunds > this.state.totalPrice) {
      this.props.createPurchaseRecord(companyTicker, this.state)
        .then(() => this.props.fetchCompanyHolding(this.props.companyTicker))
        .then(() => (
          this.props.createPurchase(this.state)
        ));
    } else {
      this.props.holdingError("Insufficient Funds");
    }
  }

  render() {
    let totalShares = 0;
    let sellShares;

    if (this.props.companyHoldings) {

      sellShares = this.props.companyHoldings.map((purchase, idx) => {
        totalShares += purchase.shares;
        const purchased_at = new Date(purchase.date).toLocaleDateString("en-US", {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        if (purchase.shares > 0 && this.state.price > 0) {
          return (
            <CompanySaleItem
              key={idx}
              date={purchased_at}
              shares={purchase.shares}
              purchaseId={purchase._id}
              companyTicker={this.props.companyTicker}
              updatePurchaseRecord={this.props.updatePurchaseRecord}
              fetchCompanyHolding={this.props.fetchCompanyHolding}
              createSale={this.props.createSale}
              price={this.state.price}
              holdingError={this.props.holdingError} />
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