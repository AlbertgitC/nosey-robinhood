import { connect } from 'react-redux';
import {
  fetchCompanyHolding,
  createPurchaseRecord,
  updatePurchaseRecord,
  purchaseError
} from '../../actions/holdings_actions';
import {
  createPurchase,
  createSale
} from "../../actions/users_actions";
import CompanyPurchase from './company_purchase';

const mapStateToProps = (state, ownProps) => {
  let companyTicker = ownProps.companyTicker;
  let company = state.companies ? state.companies[0] : { High: 0 };
  let companyHoldings = state.holdings[companyTicker];
  let userFunds = state.user.funds;

  return {
    companyTicker,
    company,
    companyHoldings,
    userFunds
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
    purchaseOrder => dispatch(updatePurchaseRecord(purchaseOrder)),
  createPurchase: purchaseOrder => dispatch(createPurchase(purchaseOrder)),
  createSale: SaleOrder => dispatch(createSale(SaleOrder)),
  purchaseError: errorMessage => dispatch(purchaseError(errorMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyPurchase);