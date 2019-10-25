import { connect } from 'react-redux';
import {
  fetchCompanyHolding,
  createPurchaseRecord,
  updatePurchaseRecord
} from '../../actions/holdings_actions';
import { fetchCompanyDaily } from '../../actions/company_actions';
import CompanyShow from './company_show';

const mapStateToProps = (state, ownProps) => {
  let companyTicker = ownProps.match.params.company_ticker;
  let company = state.companies ? state.companies[0] : { High: 0 };
  let companyHoldings = state.holdings[companyTicker];

  return {
    companyTicker,
    company,
    companyHoldings,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanyHolding:
    companyTicker => dispatch(fetchCompanyHolding(companyTicker)),
  createPurchaseRecord:
    (companyTicker, purchaseOrder) => (
      dispatch(createPurchaseRecord(companyTicker, purchaseOrder))
    ),
  updatePurchaseRecord:
    purchaseOrder => dispatch(updatePurchaseRecord(purchaseOrder))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyShow);