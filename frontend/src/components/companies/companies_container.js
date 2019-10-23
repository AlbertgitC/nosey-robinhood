import { connect } from 'react-redux';
import { fetchCompanyIntraday, fetchCompanyDaily } from '../../actions/company_actions';
import Companies from './companies';

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCompanyIntraday: tag => dispatch(fetchCompanyIntraday(tag)),
    fetchCompanyDaily: tag => dispatch(fetchCompanyDaily(tag))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);