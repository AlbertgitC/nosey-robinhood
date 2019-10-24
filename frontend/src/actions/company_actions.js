// import axios from 'axios';
// import { AlphaVantageAPI } from 'alpha-vantage-cli';
// const alphaVantageKey = require("../keys").alphaVantageKey;
// const alphaVantageAPI = new AlphaVantageAPI(alphaVantageKey, 'compact', true);

// export const RECEIVE_COMPANY = "RECEIVE_COMPANY";

// export const receiveCompany = (company, tag) => ({
//   type: RECEIVE_COMPANY,
//   company
// });


// export const fetchCompanyDaily = (tag) => dispatch => {
//   return alphaVantageAPI.getDailyData(tag).then(
//     (company) => dispatch(receiveCompany(company, tag))
//   );
// }

// export const fetchCompanyIntraday = (tag) => dispatch => {
//   return alphaVantageAPI.getIntradayData(tag, '15min').then(
//     (company) => dispatch(receiveCompany(company))
//   );
// }

