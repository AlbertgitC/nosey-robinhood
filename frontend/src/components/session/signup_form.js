import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../assets/images/robinhood-logo.jpg'
import security from '../../assets/images/security.png'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

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
      <div>
        <img className="sign-up-logo" src={logo}></img>
        <nav className="signup-navbar">
          <Link className="signup-nav-link">Nosey Robinhood</Link>
          <Link className="signup-nav-link">Home</Link>
          <Link to="/login" className="signup-nav-link">Login</Link>
          <Link className="signup-nav-link sign-up-active">Sign Up</Link>
        </nav>
        <div className="signup-underline"></div>
        <div className="main-signup-flex">
          <div className="signup-form-container">
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <h1 className="signup-header">Make Your Money Move</h1>
              <h2 className="signup-message">Robinhood lets you invest in companies you love, commission-free.</h2>
              <div className="login-form">
                <br />
                <input className="signup-input" type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
                <br />
                <input className="signup-input" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
                <br />
                <input className="signup-input" type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
                <br />
                <input className="signup-submit" type="submit" value="Sign Up" />
                {this.renderErrors()}
              </div>
            </form>
          </div>
          <div className="signup-image-div-flex">
            <img className="security-image" src={security}></img>
            <h3 className="security-h3">Free Stock Trading.</h3>
            <h3 className="security-h3">Stop paying up to $10 per trade.</h3>
            <p className="security-p">We've cut the fat that makes other brokerages costly, like manual account management
              and hundreds of storefront locations, so we can offer zero commission trading.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);