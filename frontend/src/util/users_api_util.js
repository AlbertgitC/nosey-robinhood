import axios from 'axios';

export const createPurchase = purchaseOrder => (
  axios.post('/api/users/purchase', purchaseOrder)
);

export const createSale = saleOrder => (
  axios.post('/api/users/sale', saleOrder)
);