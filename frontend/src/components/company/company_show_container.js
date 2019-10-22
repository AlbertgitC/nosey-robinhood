import { connect } from 'react-redux';
import { fetchCompany } from '../../actions/company_show_actions';
import CompanyShow from './company_show';

const mapStateToProps = (state, ownProps) => ({
  companies: state.companies,
  companyTicker: ownProps.match.params.company_ticker
});

const mapDispatchToProps = dispatch => ({
  fetchCompany: companyTicker => dispatch(fetchCompany(companyTicker))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyShow);