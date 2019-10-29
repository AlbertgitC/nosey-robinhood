import React from 'react';
import { withRouter } from 'react-router-dom';
import Session from "../../assets/session.css";
import { Link } from 'react-router-dom';
import Navigation from '../main/navigation'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/user_profile');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="multi-page-wrapper">
        <Navigation />
        <div className="image-div">
        </div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-content-wrapper">
              <h1 className="welcome-h1">Welcome to Nosey Robinhood</h1>
              <label className="form-label">
                Email
                <input className="form-input" type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <br />
              <label className="form-label">
                Password
                <input className="form-input" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br />
              <input className="submit-button" type="submit" value="Sign In" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);