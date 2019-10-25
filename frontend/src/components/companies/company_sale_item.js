import React from 'react';

class CompanySaleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: 0,
      currentShares: this.props.shares,
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
        [field]: e.currentTarget.value
      });
    };
  }

  handleSale(e) {
    e.preventDefault();
    this.props.updatePurchaseRecord(this.state)
      .then(() => this.props.fetchCompanyHolding(this.props.companyTicker))
      .then(() => this.props.createSale(this.state));
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
          <div className='sell-form-shares'>
            Shares: {this.state.currentShares}
            <input
              type='number'
              onChange={this.update('shares')}
              />
          </div>
          <div className='sell-form-total-sale'>
            Sale: {this.state.totalSale}
          </div>
          <input type='submit' value='Sell Shares' />
        </form>
      </li>
    )
  }
}

export default CompanySaleItem;