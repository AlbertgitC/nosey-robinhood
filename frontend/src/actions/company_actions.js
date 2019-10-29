import axios from 'axios';
const alphaVantageKey = require("../keys").alphaVantageKey;
const iexKey = require("../keys").iexKey;


// export const RECEIVE_COMPANY = "RECEIVE_COMPANY";

// export const receiveCompany = (company, tag) => ({
//   type: RECEIVE_COMPANY,
//   company
// });

export const fetchCompanyDaily = (tag) => {
  return axios.get("https://www.alphavantage.co/query",
    {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: tag,
        apikey: alphaVantageKey
      }
    }
  )
}

export const fetchCompanyBatchQuote = (tags) => {
  return axios({
    transformRequest: [(data, headers) => { delete headers.common.Authorization; return data }],
    method: 'get',
    url: "https://cloud.iexapis.com/stable/stock/market/batch",
    params: {
      symbols: tags,
      types: "quote,chart",
      token: iexKey
    }
  })
}

export const fetchCompanyInfo = tag => {
  return axios({
    transformRequest: [(data, headers) => { delete headers.common.Authorization; return data }],
    method: 'get',
    url: `https://cloud.iexapis.com/stable/stock/${tag}/company`,
    params: { token: iexKey }
  });
};

export const fetchCompanySearch = searchRequest => (
  axios.get("https://www.alphavantage.co/query",
  {
    params: {
      function: 'SYMBOL_SEARCH',
      keywords: searchRequest,
      apikey: alphaVantageKey,
      datatype: 'json'
    }
  })
);

