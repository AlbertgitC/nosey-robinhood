import React from 'react';
import { Link } from "react-router-dom" 
import ReactLogo from '../../assets/images/react-icon.svg.png'
import ReduxLogo from '../../assets/svg'
import MongoDBLogo from '../../assets/images/mongo-db-logo.png'
import PassportLogo from '../../assets/images/passport-js.png'
import NodeJSLogo from '../../assets/images/nodejs-logo.png'
import ExpressLogo from '../../assets/images/expressjs-logo.png'
import MongooseLogo from '../../assets/images/mongoose-js-logo.png'
import TechStackCard from './tech_stack_card'

function TechStackSection() {
  return (
    <section className="splash-commission-section">
      <h1 className="splash-commission-h1">MERN Stack</h1>
      <TechStackCard 
        language={"React"} 
        description={"A JavaScript library for building user interfaces."}
        type={"Frontend"}
        logo={ReactLogo}
      />
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
          <p className="stack-item-p">MongoDB is a general purpose, document-based, distributed database.</p>
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
  );
}

export default TechStackSection




