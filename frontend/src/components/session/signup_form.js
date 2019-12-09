import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../assets/images/robinhood-logo.jpg'
import security from '../../assets/images/security.png'
import GreenPiedPiperLogo from '../../assets/greenlogo'

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
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/user_profile');
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

  handleDemoSubmit() {
    this.props.login({email: "demo@demo.com", password: "demo123"});
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
        <GreenPiedPiperLogo />
        <nav className="signup-navbar">
          <Link to="/" className="signup-nav-link">Nosey Robinhood</Link>
          <Link to="/" className="signup-nav-link">Home</Link>
          <Link to="/login" className="signup-nav-link">Login</Link>
          <Link to="/signup" className="signup-nav-link sign-up-active">Sign Up</Link>
        </nav>
        <div className="signup-underline"></div>
        <div className="main-signup-flex">
          <div className="signup-form-container">
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <h1 className="signup-header">Make Your Imaginary Money Move</h1>
              <h2 className="signup-message">Nosey Robinhood lets you invest in companies you love, with the money you don't have!</h2>
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
            <button id="demo-button" onClick={this.handleDemoSubmit}>Demo Log In</button>
          </div>
          <div className="signup-image-div-flex">
            <img className="security-image" src={security}></img>
            <h3 className="security-h3">Free Stock Trading Simulation.</h3>
            <h3 className="security-h3">Start playing with $30000.</h3>
            <p className="security-p">We do not include the brokerage cost, taxes... etc. Real life experience may vary.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);