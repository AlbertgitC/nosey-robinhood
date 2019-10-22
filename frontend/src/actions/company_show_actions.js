import * as APIUtil from '../util/company_api_util';

export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_COMPANY_ERRORS = 'RECEIVE_COMPANY_ERRORS';

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_COMPANY_ERRORS,
//   errors
// });

export const fetchCompany = companyTicker => dispatch => (
  APIUtil.fetchCompany(companyTicker)
    .then(company => (dispatch(receiveCompany(company))),
    err => console.log(err))
);