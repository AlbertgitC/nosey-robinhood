import * as UsersApiUtil from '../util/users_api_util';

export const RECEIVE_USER_ORDER = 'RECEIVE_USER_ORDER';

const receiveUserOrder = order => ({
  type: RECEIVE_USER_ORDER,
  order
});

export const createPurchase = purchaseOrder => dispatch => (
  UsersApiUtil.createPurchase(purchaseOrder)
    .then(purchase => dispatch(receiveUserOrder(purchase)))
);

export const createSale = saleOrder => dispatch => (
  UsersApiUtil.createSale(saleOrder)
    .then(sale => dispatch(receiveUserOrder(sale)))
);