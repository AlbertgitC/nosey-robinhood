import React from 'react';
import CompanySaleItem from './company_sale_item';


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
    this.setState({ price: this.props.currentPrice });
    this.props.fetchUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.companyTicker !== this.props.companyTicker) {
      this.setState({ price: this.props.currentPrice });
    }
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
      .then(() => (
        this.props.createPurchase(this.state)
        ))
      .then(() => this.props.fetchCompanyHolding(this.props.companyTicker))
      .then(() => this.props.fetchUser());
      this.setState({ shares: 0 })
    } else {
      this.props.holdingError("Insufficient Funds");
    }
  }

  render() {
    let totalShares;
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
              holdingError={this.props.holdingError}
              fetchUser={this.props.fetchUser} />
          )
        }
      });
    }

    if (this.props.companyHoldings) {
      totalShares = 0;
      this.props.companyHoldings.forEach(record => {
        totalShares += record.shares;
      });
    }

    return (
      <div className='purchase-sell-form'>
        <form
          onSubmit={this.handlePurchase}
          className={`purchase-form ${this.props.buyTab}`}>
          <div className='purchase-form-title-shares'>
            <div className='purchase-form-title'>
              {`Buy ${this.props.companyTicker}`}
            </div>
            <div className='purchase-form-shares'>
              <div>Current Shares:</div>
              <div className='purchase-form-shares-total'>{totalShares || 0}</div>
            </div>
          </div>
          <div className='purchase-form-order'>
            <div className='purchase-form-component'>
              <div>Shares</div>
              <input
                name='shares'
                type='number'
                onChange={this.update('shares')}
                value={this.state.shares}
                />
            </div>
            <div className='purchase-form-component'>
              <div>
                Market Price
              </div>
              <div>
                {this.state.price.toFixed(2)}
              </div>
            </div>
            <div className='purchase-form-component'>
              <div>
                Estimated Price
              </div>
              <div>
                { this.state.totalPrice.toFixed(2) }
              </div>
            </div>
          </div>
          <div className='purchase-form-submit'>
            <input type='submit' value='Purchase Shares'/>
          </div>
        </form>
        <div className={`current-funds ${this.props.buyTab}`}>
          Funds: $ {this.props.userFunds}
        </div>

        <ul className={`sell-form-list ${this.props.sellTab}`}>
          {sellShares}
        </ul>

      </div>
    )
  }
}

export default CompanyPurchase;