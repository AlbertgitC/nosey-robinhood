import axios from 'axios';

export const fetchAllHoldings = user => (
  axios.get(`/api/purchase_records/user/${user.id}`)
);

export const fetchCompanyHolding = companyTicker => (
  axios.get(`/api/purchase_records/company/${companyTicker}`)
);

export const createPurchaseRecord = (companyTicker, purchaseOrder) => (
  axios.post(
    `/api/purchase_records/company/${companyTicker}/purchase`,
    purchaseOrder
  )
);

export const updatePurchaseRecord = purchaseOrder => (
  axios.patch('/api/purchase_records/sale', purchaseOrder)
);