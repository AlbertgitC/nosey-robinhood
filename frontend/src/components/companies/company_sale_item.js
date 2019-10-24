import React from 'react';

class CompanySaleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: 0,
      currentShares: this.props.shares,
      purchaseId: this.props.purchaseId,
      companyTicker: this.props.companyTicker
    };
    this.handleSale = this.handleSale.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: parseInt(e.currentTarget.value)
    });
  }

  handleSale(e) {
    e.preventDefault();
    this.props.updatePurchaseRecord(this.state)
      .then(() => this.props.fetchCompanyHolding(this.props.companyTicker));
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
          <input type='submit' value='Sell Shares' />
        </form>
      </li>
    )
  }
}

export default CompanySaleItem;