import React from 'react';

class CompanySaleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: 0,
      currentShares: Number(this.props.shares),
      purchaseId: this.props.purchaseId,
      companyTicker: this.props.companyTicker,
      price: this.props.price,
      totalSale: 0
    };
    this.handleSale = this.handleSale.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        totalSale: this.state.price * e.currentTarget.value
      });
      this.setState({
        [field]: Number(e.currentTarget.value)
      });
    };
  }

  handleSale(e) {
    e.preventDefault();
    if (this.state.currentShares >= this.state.shares) {
      this.props.updatePurchaseRecord(this.state)
        .then(() => this.props.fetchCompanyHolding(this.props.companyTicker))
        .then(() => this.props.createSale(this.state))
        .then(() => this.props.fetchUser());
    } else {
      this.props.holdingError("Not enough shares");
    }
  }

  render() {

    const purchased_at = new Date(this.props.date).toLocaleDateString("en-US", {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    return (
      <li key={this.props.key} className='sell-form'>
        <form onSubmit={this.handleSale}>
          <div className='sell-form-date'>
            {purchased_at}
          </div>
          <div className='sell-form-columns'>
            <div className='sell-form-column-left'>
              <div className='sell-form-total-shares'>
                <div>
                  Shares:
                </div>
                <div>
                  {this.state.currentShares}
                </div>
              </div>
              <div className='sell-form-total-sale'>
                <div>
                  Sale:
                </div>
                <div>
                  {this.state.totalSale.toFixed(2)}
                </div>
              </div>
            </div>
            <div className='sell-form-column-right'>
              <input
                type='number'
                onChange={this.update('shares')}
                />
              <input type='submit' value='Sell Shares' />
            </div>
          </div>
        </form>
      </li>
    )
  }
}

export default CompanySaleItem;