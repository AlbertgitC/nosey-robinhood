import React from 'react';
import CompaniesContainer from '../companies/companies_container';
// import { Link } from 'react-router-dom'
// import './user_profile.css'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);

    this.state = { watchList: [], topList: ["VTI", "VXUS", "AMZN", "GOOGL", "FB"], techList: ["GOOGL", "NVDA", "AMZN", "AAPL", "MSFT"] }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  stockList(list) {
    const stockLis = list.map(
      (tag, i) => {
        return (
          <li></li>
        );
      }
    );
  }

  render() {
    const tag = "AMZN";
    const classname = "stock-graph";
    return (
      <div>
        <h1>Investing $30,000.00</h1> {/* change this! */}
        <CompaniesContainer tag={tag} classname={classname}/>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

export default UserProfile;