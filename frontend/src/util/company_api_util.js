// import axios from 'axios';

// export const fetchCompany = companyTicker => (
//   axios.get(`/api/companies/${companyTicker}`, companyTicker)
// );

const AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
const yourApiKey = 'N8I5YKNOKROBHLSK';
const alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);

// router.get('/companies/:company_ticker', (req, res) => (
//   alphaVantageAPI.getIntradayData(req.ticker, req.interval)
//   .then(intradayData => res.json(intradayData))
//   .catch(err => res.json(err))
// ));

export const fetchCompany = companyTicker => (
  alphaVantageAPI.getIntradayData(companyTicker)
);