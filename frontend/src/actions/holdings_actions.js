import * as HoldingsApiUtil from '../util/holdings_api_util';

export const RECEIVE_ALL_HOLDINGS = 'RECEIVE_ALL_HOLDINGS';
export const RECEIVE_COMPANY_HOLDING = 'RECEIVE_COMPANY_HOLDING';
export const RECEIVE_HOLDING_ERROR = 'RECEIVE_HOLDING_ERROR';

const receiveAllHoldings = holdings => ({
  type: RECEIVE_ALL_HOLDINGS,
  holdings
});

const receiveCompanyHolding = companyHolding => ({
  type: RECEIVE_COMPANY_HOLDING,
  companyHolding: companyHolding.data
});

const receiveHoldingError = errorMessage => ({
  type: RECEIVE_HOLDING_ERROR,
  errorMessage
});

export const fetchAllHoldings = () => dispatch => (
  HoldingsApiUtil.fetchAllHoldings()
    .then(holdings => dispatch(receiveAllHoldings(holdings)))
);

export const fetchCompanyHolding = companyTicker => dispatch => (
  HoldingsApiUtil.fetchCompanyHolding(companyTicker)
    .then(companyHolding => dispatch(receiveCompanyHolding(companyHolding)))
);

export const createPurchaseRecord = (companyTicker, purchaseOrder) => dispatch => (
  HoldingsApiUtil.createPurchaseRecord(companyTicker, purchaseOrder)
    .then(companyHolding => dispatch(receiveCompanyHolding(companyHolding)))
);

export const updatePurchaseRecord = purchaseOrder => dispatch => (
  HoldingsApiUtil.updatePurchaseRecord(purchaseOrder)
    .then(companyHolding => dispatch(receiveCompanyHolding(companyHolding)))
);

export const holdingError = errorMessage => dispatch => (
  dispatch(receiveHoldingError(errorMessage))
);