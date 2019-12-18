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
    <div>
      <section className="splash-commission-section">
        <article className="tracking-article">
          <h1 className="track-your-fav-companies">Track Companies You Love</h1>
          <p className="tracking-paragraph">We use a third party API to pull up to date company data. You can search for companies, view company profiles, and even add companies to your watchlist.</p>
        </article>
      </section>
    </div>
  );
}

export default TechStackSection




