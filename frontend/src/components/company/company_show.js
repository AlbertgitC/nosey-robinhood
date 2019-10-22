import React from 'react';
import { Link } from 'react-router-dom';
// import './user_profile.css'

class CompanyShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCompany('payc')
      .then(response => this.setState({ response }));
  }

  render() {
    return (
      <div>
        {this.state.response}
      </div>
    );
  }
}

export default CompanyShow;