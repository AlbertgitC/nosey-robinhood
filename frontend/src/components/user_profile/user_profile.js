import React from 'react';
// import { Link } from 'react-router-dom'
// import './user_profile.css'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        <h1>Investing $30,000.00</h1> {/* change this! */}
        <div>stock graph here</div>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

export default UserProfile;