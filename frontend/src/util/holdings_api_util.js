import axious from 'axios';

export const fetchAllHoldings = user => (
  axious.get(`/api/purchase_records/user/${user.id}`)
);

export const fetchCompanyHolding = companyTicker => (
  axious.get(`/api/purchase_records/company/${companyTicker}`)
);

export const createPurchaseRecord = (companyTicker, purchaseOrder) => (
  axious.post(
    `/api/purchase_records/company/${companyTicker}/purchase`,
    purchaseOrder
  )
);

export const updatePurchaseRecord = purchaseOrder => (
  axious.patch('/api/purchase_records/sale', purchaseOrder)
);