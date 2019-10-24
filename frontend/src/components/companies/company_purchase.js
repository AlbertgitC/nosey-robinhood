import React from 'react';

class CompanyPurchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shares: 0,
      purchase_price: this.props.price
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit() {
    let companyTicker = this.props.companyTicker;
    this.props.createPurchaseRecord(companyTicker, this.state);
  }

  render() {

    return (
      <div className='purchase-form'>
        <form onSubmit={this.handleSubmit}>
          <div className='purchase-form-title'>
            {`Buy ${this.props.companyTicker}`}
            {`Current Shares: ${this.props.shares}`}
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
      </div>
    )
  }
}

export default CompanyPurchase;