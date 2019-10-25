import { connect } from 'react-redux';
import {
  fetchCompanyHolding,
  createPurchaseRecord
} from '../../actions/holdings_actions';
import { fetchCompanyDaily } from '../../actions/company_actions';
import CompanyShow from './company_show';

const mapStateToProps = (state, ownProps) => {
  let companyTicker = ownProps.match.params.company_ticker;
  let company = state.companies ? state.companies[0] : { High: 0 };
  let companyHoldings = state.holdings[companyTicker];
  let currentUser = state.session.user;

  return {
    companyTicker,
    company,
    companyHoldings,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanyHolding:
    companyTicker => dispatch(fetchCompanyHolding(companyTicker)),
  createPurchaseRecord:
    (companyTicker, purchaseOrder) => (
      dispatch(createPurchaseRecord(companyTicker, purchaseOrder))
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyShow);