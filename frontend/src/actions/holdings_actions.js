import * as HoldingsApiUtil from '../util/holdings_api_util';
import { RECEIVE_USER_ORDER } from './users_actions';

export const RECEIVE_ALL_HOLDINGS = 'RECEIVE_ALL_HOLDINGS';
export const RECEIVE_COMPANY_HOLDING = 'RECEIVE_COMPANY_HOLDING';
export const RECEIVE_PURCHASE_ERROR = 'RECEIVE_PURCHASE_ERROR';

const receiveAllHoldings = holdings => ({
  type: RECEIVE_ALL_HOLDINGS,
  holdings
});

const receiveCompanyHolding = companyHolding => ({
  type: RECEIVE_COMPANY_HOLDING,
  companyHolding: companyHolding.data
});

const receivePurchaseError = errorMessage => ({
  type: RECEIVE_PURCHASE_ERROR,
  errorMessage
});

export const fetchAllHoldings = user => dispatch => (
  HoldingsApiUtil.fetchAllHoldings(user)
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

export const purchaseError = errorMessage => dispatch => (
  dispatch(receivePurchaseError(errorMessage))
);