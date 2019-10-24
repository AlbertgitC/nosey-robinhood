import React from 'react';
import { Link } from 'react-router-dom'
import heroBanner from '../../assets/images/robinhood-hero-gif.mp4'
import ReactLogo from '../../assets/images/react-icon.svg.png'
import ReduxLogo from '../../assets/svg'
import MongoDBLogo from '../../assets/images/mongo-db-logo.png'
import PassportLogo from '../../assets/images/passport-js.png'
import NodeJSLogo from '../../assets/images/nodejs-logo.png'
import ExpressLogo from '../../assets/images/expressjs-logo.png'
import MongooseLogo from '../../assets/images/mongoose-js-logo.png'
import GithubLogo from '../../assets/images/GitHub-Mark-Light-120px-plus.png'


class MainPage extends React.Component {

  render() {
    return (
      <div>
        <nav className="splash-nav-bar">
          <span className="splash-nav-logo">Nosey Robinhood</span>
          <span className="nav-splash-span">
            <Link className="splash-nav-link login-splash-link" to="/login">Log in</Link>
            <Link className="splash-nav-link signup-splash-link" to="/signup">Sign up</Link>        
          </span>
        </nav>

        <div className="splash-hero-section">
          <h1 className="splash-hero-h1">A Robinhood Clone</h1>
          <h3 className="splash-hero-h3">Robinhood, a pioneer of commission-free investing, gives you access to investing and more ways to make your money work harder.</h3>
          <video autoPlay loop className="hero-banner-photo" src={heroBanner}></video>
          <Link className="signup-button-on-splash" to="/signup">Demo</Link>
        </div>
        <section className="splash-commission-section">
          <h1 className="splash-commission-h1">MERN Stack</h1>
          <div className="stack-item">
            <span className="left-column-stack">
              <h3 className="stack-item-h3">React</h3>
              <p className="stack-item-p">A JavaScript library for building user interfaces.</p>
              <p className="stack-item-type">Frontend</p>
            </span>
            <img className="logo-splash-item" src={ReactLogo} alt="react logo"></img>
          </div>
          <div className="stack-item">
            <span className="left-column-stack">
            <h3 className="stack-item-h3">Redux</h3>
            <p className="stack-item-p">A predicatble state container for JS apps.</p>
            <p className="stack-item-type">Frontend</p>
            </span>
            <ReduxLogo />
          </div>
          <div className="stack-item">
            <span className="left-column-stack">
            <h3 className="stack-item-h3">ExpressJS</h3>
            <p className="stack-item-p">A fast, minimalist framework for Node.js.</p>
            <p className="stack-item-type">Backend</p>
            </span>
            <img className="logo-splash-item" id="express-logo-stack" src={ExpressLogo} alt="react logo"></img>
          </div>
          <div className="stack-item">
            <span className="left-column-stack">
            <h3 className="stack-item-h3">Node.js</h3>
            <p className="stack-item-p">A JavaScript runtime built on Chrome's V8 engine.</p>
            <p className="stack-item-type">Backend</p>
            </span>
            <img className="node-js-logo-stack logo-splash-item" src={NodeJSLogo} alt="react logo"></img>
          </div>
          <div className="stack-item">
            <span className="left-column-stack">
            <h3 className="stack-item-h3">MongoDB</h3>
              <p className="stack-item-p">MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.</p>
            <p className="stack-item-type">Database</p>
            </span>
            <img className="logo-splash-item large-stack-image" src={MongoDBLogo} alt="react logo"></img>
          </div>
          <div className="stack-item">
            <span className="left-column-stack">
            <h3 className="stack-item-h3">Mongoose</h3>
              <p className="stack-item-p">Provides elegant MongoDB object modeling for Node.js</p>
            <p className="stack-item-type">ODM</p>
            </span>
            <img id="mongoose-logo" className="logo-splash-item" src={MongooseLogo} alt="react logo"></img>
          </div>
          <div className="stack-item">
            <span className="left-column-stack">
            <h3 className="stack-item-h3">PassportJS</h3>
              <p className="stack-item-p">Simple, unobtrusive authentication for Node.js</p>
            <p className="stack-item-type">Authentication</p>
            </span>
            <img className="logo-splash-item passport-js-logo" src={PassportLogo} alt="react logo"></img>
          </div>
        </section>
        <section className="splash-portfolio-section">
          <div className="stack-item github-stack">
            <span className="github-span-container">
            <h1 className="github-h1 github-header">Github Accounts</h1>
            </span>
          </div>
          <a className="link-out-link-out" target="_blank" href="https://github.com/ZacharyCWilliams">
            <div className="stack-item github-stack">
              <span className="github-span-container">
                <h1 className="github-h1">Zach Williams</h1>
                <a className="test">
                  <img className="github-logo" src={GithubLogo}></img>
                </a>
              </span>
            </div>
          </a>
          <a className="link-out-link-out" target="_blank" href="https://github.com/AlbertgitC">
            <div className="stack-item github-stack">
              <span className="github-span-container">
                <h1 className="github-h1">Albert Cheng</h1>
                <img className="github-logo" src={GithubLogo}></img>
              </span>
            </div>
          </a>
          <a className="link-out-link-out" target="_blank" href="https://github.com/ZacharyCWilliams">
            <div className="stack-item github-stack">
              <span className="github-span-container">
                <h1 className="github-h1">Jasim Atiyeh</h1>
                <img className="github-logo" src={GithubLogo}></img>
              </span>
            </div>
          </a>
        </section>
      </div>
    );
  }
}

export default MainPage;